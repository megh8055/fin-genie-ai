
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

const defaultMessages: Message[] = [
  {
    id: 1,
    text: "Hello! I'm your AI financial assistant. How can I help you with your investment and financial questions today?",
    isUser: false
  }
];

// Sample investment questions to help users get started
const sampleQuestions = [
  "What's a mutual fund?",
  "How do I start investing with ₹1,000?",
  "What's the difference between stocks and bonds?",
  "How much should I save for retirement?",
  "What's an SIP?"
];

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>(defaultMessages);
  const [inputValue, setInputValue] = useState("");
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    // Add the user message
    const newUserMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isUser: true
    };
    
    setMessages([...messages, newUserMessage]);
    setInputValue("");
    setIsLoading(true);
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponses: Record<string, string> = {
        "what's a mutual fund?": "A mutual fund is a professionally managed investment that pools money from many investors to purchase securities. They offer diversification and professional management for retail investors, making them a popular choice for beginners.",
        "how do i start investing with ₹1,000?": "With ₹1,000, you can start by investing in a SIP (Systematic Investment Plan) for mutual funds, which allows you to invest small amounts regularly. You could also consider downloading an investment app that allows fractional investments or buying government bonds.",
        "what's the difference between stocks and bonds?": "Stocks represent ownership in a company and offer potential for higher returns but with higher risk. Bonds are loans to companies or governments that typically offer lower but more consistent returns with less risk.",
        "how much should i save for retirement?": "A common guideline is to save 15-20% of your income for retirement. However, this varies based on your age, current savings, lifestyle expectations, and retirement age. Consider using the 50-30-20 rule: 50% for needs, 30% for wants, and 20% for savings.",
        "what's an sip?": "SIP (Systematic Investment Plan) is a method to invest a fixed amount regularly in mutual funds. It helps you build wealth through disciplined investing, leverages rupee-cost averaging to reduce impact of market volatility, and allows you to start with as little as ₹500 per month."
      };
      
      let responseText = "I don't have specific information on that topic yet. As this is a demo, my knowledge is limited. In a full version, I would be able to provide detailed information on most financial topics relevant to Indian investors.";
      
      // Check for matching questions regardless of case or punctuation
      const normalizedInput = newUserMessage.text.toLowerCase().replace(/[?.,]/g, '');
      
      for (const [question, answer] of Object.entries(aiResponses)) {
        if (normalizedInput.includes(question.replace(/[?.,]/g, ''))) {
          responseText = answer;
          break;
        }
      }
      
      const newAiMessage: Message = {
        id: messages.length + 2,
        text: responseText,
        isUser: false
      };
      
      setMessages(prev => [...prev, newAiMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleSampleQuestion = (question: string) => {
    setInputValue(question);
    toast({
      title: "Question selected",
      description: "You can edit this question or send it as is.",
    });
  };

  return (
    <div className="flex flex-col h-[500px] bg-white rounded-lg shadow-md border border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-rupeerise-blue">Financial Assistant</h2>
        <p className="text-sm text-gray-500">Ask me anything about investing and personal finance in India</p>
      </div>
      
      <ScrollArea className="flex-1 p-4">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`chat-bubble ${message.isUser ? 'chat-bubble-user' : 'chat-bubble-bot'}`}
          >
            {message.text}
          </div>
        ))}
        
        {isLoading && (
          <div className="chat-bubble chat-bubble-bot flex items-center space-x-2">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-150"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-300"></div>
          </div>
        )}
      </ScrollArea>
      
      <div className="p-2 bg-gray-50 rounded-b-lg">
        <div className="flex flex-wrap gap-2 mb-2">
          {sampleQuestions.map((question, index) => (
            <Button 
              key={index} 
              variant="outline" 
              size="sm" 
              className="text-xs bg-white text-gray-600 hover:text-rupeerise-blue hover:border-rupeerise-blue"
              onClick={() => handleSampleQuestion(question)}
            >
              {question}
            </Button>
          ))}
        </div>
        
        <div className="flex space-x-2">
          <Input
            placeholder="Ask a financial question..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1"
          />
          <Button 
            onClick={handleSendMessage} 
            disabled={!inputValue.trim() || isLoading}
            className="bg-rupeerise-blue hover:bg-rupeerise-blue/90"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
