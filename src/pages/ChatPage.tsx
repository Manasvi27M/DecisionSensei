import React, { useState, useRef, useEffect } from 'react';
import { ArrowUp, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useChat } from '../context/ChatContext';
import ChatMessage from '../components/chat/ChatMessage';
import TypingIndicator from '../components/chat/TypingIndicator';

const ChatPage: React.FC = () => {
  const { messages, sendMessage, clearChat, loading } = useChat();
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (inputMessage.trim() === '' || loading) return;
    
    await sendMessage(inputMessage);
    setInputMessage('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(e);
    }
  };

  // Auto-resize textarea as user types
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputMessage(e.target.value);
    
    // Reset height to auto to allow shrinking
    e.target.style.height = 'auto';
    // Set height based on scrollHeight (content)
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="pt-20 h-screen flex flex-col">
      <div className="flex-grow flex flex-col overflow-hidden container mx-auto px-4 pb-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Chat with Decision Sensei
          </h1>
          {messages.length > 0 && (
            <button
              onClick={clearChat}
              className="flex items-center gap-1 text-gray-500 hover:text-red-500 transition-colors px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Clear chat history"
            >
              <Trash2 size={16} />
              <span className="text-sm">Clear</span>
            </button>
          )}
        </div>

        <div className="flex-grow overflow-auto rounded-lg bg-white dark:bg-gray-800 shadow-md mb-4 p-4">
          {messages.length === 0 ? (
            <div className="h-full flex items-center justify-center text-center p-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-md"
              >
                <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  How can I help you decide today?
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Ask me about a decision you're facing, and I'll help guide you through the options.
                </p>
                <div className="space-y-2">
                  {[
                    "Should I change my career path?",
                    "Help me choose between two job offers",
                    "I'm trying to decide where to live",
                    "Should I pursue further education?"
                  ].map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => setInputMessage(suggestion)}
                      className="block w-full text-left px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-purple-50 dark:hover:bg-purple-900/20 text-gray-700 dark:text-gray-300 transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
              {loading && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        <form onSubmit={handleSendMessage} className="flex items-end gap-2">
          <div className="flex-grow relative rounded-lg shadow-sm border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus-within:ring-2 focus-within:ring-purple-500 dark:focus-within:ring-purple-400 focus-within:border-transparent transition-all">
            <textarea
              ref={inputRef}
              value={inputMessage}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              className="block w-full px-4 py-3 resize-none max-h-32 text-gray-900 dark:text-white bg-transparent border-0 focus:ring-0 outline-none"
              rows={1}
              disabled={loading}
            />
          </div>
          <button
            type="submit"
            disabled={!inputMessage.trim() || loading}
            className={`flex-shrink-0 p-3 rounded-lg ${
              !inputMessage.trim() || loading
                ? 'bg-gray-300 dark:bg-gray-700 cursor-not-allowed'
                : 'bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600'
            } text-white transition-colors`}
            aria-label="Send message"
          >
            <ArrowUp size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatPage;