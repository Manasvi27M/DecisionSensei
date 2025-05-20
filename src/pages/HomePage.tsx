import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, BrainCircuit } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroImage from '../components/home/HeroImage';
import FeatureCard from '../components/home/FeatureCard';

const HomePage: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  const features = [
    {
      icon: 'BrainCircuit',
      title: 'Advanced AI Model',
      description: 'Leveraging Gemma 3-1B, trained on empathetic dialogues and mental health conversations.'
    },
    {
      icon: 'MessageSquare',
      title: 'Conversational Helper',
      description: 'Natural back-and-forth dialogue to understand your situation and guide your decisions.'
    },
    {
      icon: 'Lightbulb',
      title: 'Decision Insights',
      description: 'Get personalized insights based on your specific situation and context.'
    },
    {
      icon: 'Shield',
      title: 'Private & Secure',
      description: 'Your conversations are private and secure, with no data stored beyond your session.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="px-4 pt-16 md:pt-20 pb-24 md:pb-32 overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300">
                  Make Better Decisions with AI
                </h1>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
                  Decision Sensei helps you navigate life's choices with AI trained on human empathy, social intelligence, and counseling conversations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/chat"
                    className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
                  >
                    Start Chatting <ArrowRight className="ml-2" size={18} />
                  </Link>
                  <Link
                    to="/features"
                    className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 font-medium rounded-lg hover:shadow-md transition-all flex items-center justify-center"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <HeroImage />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              How Decision Sensei Works
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our AI is specially trained to help you make better choices through intelligent conversation.
            </p>
          </div>
          
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={item}>
                <FeatureCard feature={feature} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Training Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Trained on Human Understanding
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Decision Sensei leverages these specialized datasets to provide thoughtful, empathetic guidance.
              </p>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ul className="space-y-4">
                {[
                  "Facebook Empathetic Dialogues - Conversations grounded in emotional understanding",
                  "Mental Health Counseling Conversations - Professional therapeutic dialogue patterns",
                  "Social IQA - Questions and answers about social interactions",
                  "Hellaswag - Commonsense reasoning and situational understanding",
                  "Synthetic Persona Chat - Natural conversational flow and personality"
                ].map((item, index) => (
                  <li key={index} className="flex items-start bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <span className="mr-3 bg-purple-100 dark:bg-purple-900/30 p-1 rounded-full text-purple-600 dark:text-purple-400 flex-shrink-0">
                      <Check size={18} />
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Make Better Decisions?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Start a conversation with Decision Sensei now and get personalized guidance.
          </p>
          <Link
            to="/chat"
            className="px-8 py-3 bg-white text-purple-600 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all inline-flex items-center"
          >
            Start Chatting <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;