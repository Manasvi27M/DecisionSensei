import React from 'react';
import { Link } from 'react-router-dom';
import { BrainCircuit, Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 shadow-inner py-8 transition-colors duration-300 px-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <BrainCircuit className="text-purple-600 dark:text-purple-400" size={24} />
              <span className="font-semibold text-lg bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300">
                Decision Sensei
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Your AI-powered decision assistant, trained on conversation and empathy to help you make better choices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-medium text-gray-900 dark:text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/chat" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  Chat
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  Features
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-medium text-gray-900 dark:text-white mb-4">Training</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-400">Empathetic Dialogues</li>
              <li className="text-gray-600 dark:text-gray-400">Mental Health Counseling</li>
              <li className="text-gray-600 dark:text-gray-400">Social IQA</li>
              <li className="text-gray-600 dark:text-gray-400">Hellaswag</li>
              <li className="text-gray-600 dark:text-gray-400">Synthetic Persona Chat</li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-medium text-gray-900 dark:text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  Data Usage
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            &copy; {currentYear} Decision Sensei. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;