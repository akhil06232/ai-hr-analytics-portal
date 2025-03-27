
import React, { useState, useEffect, useRef } from 'react';
import { Mic, Send, Bot, Loader2, Volume2 } from 'lucide-react';
import * as tf from '@tensorflow/tfjs';

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export function ConversationalInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [model, setModel] = useState<tf.LayersModel | null>(null);

  useEffect(() => {
    async function loadModel() {
      try {
        // Simple sentiment analysis model
        const model = tf.sequential({
          layers: [
            tf.layers.dense({ inputShape: [100], units: 32, activation: 'relu' }),
            tf.layers.dense({ units: 16, activation: 'relu' }),
            tf.layers.dense({ units: 1, activation: 'sigmoid' })
          ]
        });

        await model.compile({
          optimizer: tf.train.adam(0.001),
          loss: 'binaryCrossentropy',
          metrics: ['accuracy']
        });

        setModel(model);
      } catch (error) {
        console.error('Error loading model:', error);
      }
    }

    loadModel();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const processMessage = async (text: string) => {
    // Simulate AI processing with basic responses
    const responses = [
      "I understand your request. How can I assist you further?",
      "I've analyzed your input and here's what I found...",
      "Based on the data, I recommend the following steps...",
      "Let me check our records and get back to you...",
      "I've processed your request. Would you like more details?"
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMessage = {
      text: input,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsProcessing(true);

    try {
      const response = await processMessage(input);
      
      setTimeout(() => {
        setMessages(prev => [...prev, {
          text: response,
          isUser: false,
          timestamp: new Date()
        }]);
        setIsProcessing(false);
      }, 1000);
    } catch (error) {
      console.error('Error processing message:', error);
      setIsProcessing(false);
    }
  };

  const toggleListening = () => {
    setIsListening(!isListening);
    // Simulate voice recognition
    if (!isListening) {
      setTimeout(() => {
        setInput(prev => prev + " [Voice input detected]");
        setIsListening(false);
      }, 2000);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm h-[600px] flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <Bot className="w-5 h-5 text-blue-600" />
            AI Assistant
          </h2>
          {model && (
            <span className="px-2 py-1 bg-green-100 text-green-800 text-sm rounded-full">
              AI Model Ready
            </span>
          )}
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[70%] rounded-lg p-3 ${
              message.isUser 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-900'
            }`}>
              <div className="flex flex-col">
                <span>{message.text}</span>
                <span className="text-xs opacity-75 mt-1">
                  {message.timestamp.toLocaleTimeString()}
                </span>
              </div>
            </div>
          </div>
        ))}
        {isProcessing && (
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-lg p-3 flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span className="text-sm text-gray-600">AI is thinking...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-gray-200">
        <div className="flex gap-2">
          <button 
            className={`p-2 rounded-full transition-colors ${
              isListening 
                ? 'bg-red-100 text-red-600 animate-pulse' 
                : 'hover:bg-gray-100 text-gray-600'
            }`}
            onClick={toggleListening}
          >
            {isListening ? <Volume2 className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
          </button>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && !isProcessing && handleSend()}
            placeholder="Type your message..."
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isProcessing}
          />
          <button 
            onClick={handleSend}
            disabled={isProcessing || !input.trim()}
            className={`p-2 rounded-lg transition-colors flex items-center gap-2 ${
              isProcessing || !input.trim()
                ? 'bg-gray-100 text-gray-400'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
