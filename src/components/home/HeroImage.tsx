import React from 'react';
import { motion } from 'framer-motion';

const HeroImage: React.FC = () => {
  return (
    <div className="relative">
      <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-4 shadow-xl">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
          <div className="flex flex-col space-y-4">
            <div className="flex justify-end">
              <div className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 p-3 rounded-lg rounded-tr-none max-w-[80%]">
                <p>I'm trying to decide whether to accept a job offer in a new city or stay at my current position. What should I consider?</p>
              </div>
            </div>
            
            <div className="flex justify-start">
              <div className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-3 rounded-lg rounded-tl-none max-w-[80%]">
                <p>That's a significant decision! Here are some key factors to consider:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Career growth potential in both positions</li>
                  <li>Salary differences considering cost of living</li>
                  <li>Impact on your personal life and relationships</li>
                  <li>Quality of life in the new city</li>
                </ul>
                <p className="mt-2">Which of these aspects is most important to you?</p>
              </div>
            </div>
            
            <div className="flex justify-end">
              <div className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 p-3 rounded-lg rounded-tr-none max-w-[80%]">
                <p>Career growth is important, but I'm also worried about leaving my friends and family.</p>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex justify-start"
            >
              <div className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-3 rounded-lg rounded-tl-none max-w-[80%]">
                <p>That's completely understandable. Social connections are vital for wellbeing. Consider:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>How often could you visit home?</li>
                  <li>Are there opportunities to build new connections?</li>
                  <li>Could technology help maintain current relationships?</li>
                </ul>
                
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-4 -left-4 w-20 h-20 bg-purple-200 dark:bg-purple-800/30 rounded-full blur-xl -z-10"></div>
      <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-200 dark:bg-blue-800/30 rounded-full blur-xl -z-10"></div>
    </div>
  );
};

export default HeroImage;