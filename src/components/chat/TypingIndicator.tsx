import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit } from 'lucide-react';

const TypingIndicator: React.FC = () => {
  return (
    <div className="flex justify-start">
      <div className="flex gap-3 max-w-[80%]">
        <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
          <BrainCircuit size={16} />
        </div>
        
        <div className="flex flex-col">
          <div className="rounded-2xl px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white rounded-tl-none">
            <div className="flex items-center space-x-1">
              {[0, 1, 2].map((dot) => (
                <motion.div
                  key={dot}
                  animate={{
                    y: ["0%", "-50%", "0%"]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "loop",
                    delay: dot * 0.2
                  }}
                  className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full"
                />
              ))}
            </div>
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Thinking...
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;