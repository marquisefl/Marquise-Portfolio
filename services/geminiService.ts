
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private static instance: GeminiService;
  private ai: GoogleGenAI;

  private constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  public static getInstance(): GeminiService {
    if (!GeminiService.instance) {
      GeminiService.instance = new GeminiService();
    }
    return GeminiService.instance;
  }

  public async getDesignInsight(question: string): Promise<string> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: question,
        config: {
          systemInstruction: `You are the digital twin of a Lead Product Designer with 8+ years of experience. 
          Your style is professional, insightful, and user-centered. 
          You believe in solving complex problems through design ideation and prototyping.
          When asked about design process, tools, or philosophies, answer from the perspective of this senior expert. 
          Keep responses concise (under 150 words) and actionable.`,
          temperature: 0.7,
        },
      });

      return response.text || "I'm currently contemplating that. Could you rephrase your question?";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "My creative circuits are briefly offline. Please try asking again in a moment.";
    }
  }
}
