
import React, { useState, useRef, useEffect } from 'react';
import { GeminiService } from '../services/geminiService';
import { Message } from '../types';

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "SYSTEM ONLINE. DESIGN STRATEGY ENGINE READY. ASK ME ANYTHING." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

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
    <section id="assistant" className="py-32 px-8 bg-white text-black min-h-screen flex flex-col justify-center">
      <div className="max-w-5xl mx-auto w-full">
        <div className="mb-12">
          <h2 className="text-[6vw] font-black uppercase tracking-tighter leading-none serif">
            The <br />Laboratory
          </h2>
          <p className="mt-4 font-bold text-sm uppercase tracking-widest text-black/40">Powered by Gemini AI Engine</p>
        </div>

        <div className="border-[10px] border-black h-[500px] flex flex-col bg-white">
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-8">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[70%] ${m.role === 'user' ? 'text-right' : 'text-left'}`}>
                   <p className={`text-[10px] font-mono uppercase mb-2 ${m.role === 'user' ? 'text-black/30' : 'text-black/30'}`}>
                    {m.role === 'user' ? 'HUMAN_INPUT' : 'STRATEGY_ENGINE'}
                  </p>
                  <p className={`text-xl md:text-2xl font-bold leading-tight uppercase tracking-tight ${m.role === 'assistant' ? 'serif italic' : ''}`}>
                    {m.content}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <p className="text-xl font-bold animate-pulse italic serif">SYNTHESIZING...</p>
              </div>
            )}
          </div>

          <div className="p-8 border-t-[5px] border-black flex flex-col md:flex-row gap-4">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="ASK FOR INSIGHT"
              className="flex-1 bg-transparent text-xl md:text-2xl font-bold placeholder:text-black/10 focus:outline-none uppercase"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="bg-black text-white px-12 py-4 font-black uppercase tracking-widest hover:bg-black/80 transition-all disabled:opacity-20"
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
