
import React, { useState, useRef, useEffect } from 'react';
import { GeminiService } from '../services/geminiService';
import { Message } from '../types';

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "SYSTEM ONLINE. DESIGN STRATEGY ENGINE READY. ASK ME ANYTHING." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if device is mobile/touch
    const checkMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth < 768;
      setIsMobile(isTouchDevice || isSmallScreen);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);
    const gemini = GeminiService.getInstance();
    const response = await gemini.getDesignInsight(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', content: response.toUpperCase() }]);
    setIsLoading(false);
  };

  return (
    <section id="assistant" className="py-16 md:py-32 px-4 md:px-8 bg-white text-black min-h-screen flex flex-col justify-center">
      <div className="max-w-5xl mx-auto w-full">
        <div className="mb-8 md:mb-12">
          <h2 className="text-[10vw] md:text-[6vw] font-black uppercase tracking-tighter leading-none serif">
            The <br />Laboratory
          </h2>
          <p className="mt-3 md:mt-4 font-bold text-xs md:text-sm uppercase tracking-widest text-black/40">Powered by Gemini AI Engine</p>
        </div>

        <div className="border-4 md:border-[10px] border-black h-[400px] md:h-[500px] flex flex-col bg-white">
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6 md:space-y-8">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] md:max-w-[70%] ${m.role === 'user' ? 'text-right' : 'text-left'}`}>
                   <p className={`text-[8px] md:text-[10px] font-mono uppercase mb-1 md:mb-2 ${m.role === 'user' ? 'text-black/30' : 'text-black/30'}`}>
                    {m.role === 'user' ? 'HUMAN_INPUT' : 'STRATEGY_ENGINE'}
                  </p>
                  <p className={`text-base md:text-xl lg:text-2xl font-bold leading-tight uppercase tracking-tight ${m.role === 'assistant' ? 'serif italic' : ''}`}>
                    {m.content}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <p className="text-base md:text-xl font-bold animate-pulse italic serif">SYNTHESIZING...</p>
              </div>
            )}
          </div>

          <div className="p-4 md:p-8 border-t-2 md:border-t-[5px] border-black flex flex-col md:flex-row gap-3 md:gap-4">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="ASK FOR INSIGHT"
              className="flex-1 bg-transparent text-base md:text-xl lg:text-2xl font-bold placeholder:text-black/10 focus:outline-none uppercase"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className={`bg-black text-white px-8 md:px-12 py-3 md:py-4 font-black uppercase tracking-widest ${!isMobile ? 'hover:bg-black/80' : 'active:bg-black/80'} transition-all disabled:opacity-20 text-sm md:text-base`}
            >
              QUERY
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;
