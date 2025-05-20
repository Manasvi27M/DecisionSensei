import React from 'react';
import { motion } from 'framer-motion';
import { type Message } from '../../context/ChatContext';
import { BrainCircuit, User } from 'lucide-react';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.sender === 'user';
  
  const variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.3 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      <div className={`flex gap-3 max-w-[80%] ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
          isUser
            ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
            : 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
        }`}>
          {isUser ? <User size={16} /> : <BrainCircuit size={16} />}
        </div>
        
        <div className="flex flex-col">
          <div className={`rounded-2xl px-4 py-3 ${
            isUser 
              ? 'bg-purple-100 dark:bg-purple-900/30 text-gray-900 dark:text-white rounded-tr-none' 
              : 'bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white rounded-tl-none'
          }`}>
            <div className="whitespace-pre-wrap">{message.text}</div>
          </div>
          <div className={`text-xs text-gray-500 dark:text-gray-400 mt-1 ${isUser ? 'text-right' : 'text-left'}`}>
            {formatDate(message.timestamp)}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ChatMessage;