import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Database, MessageCircle, Brain, Lock, Users, Scale, Award } from 'lucide-react';

const FeaturesPage: React.FC = () => {
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

  const datasets = [
    {
      name: "Facebook Empathetic Dialogues",
      description: "A dataset of conversations grounded in emotional understanding.",
      icon: <MessageCircle size={24} className="text-purple-600 dark:text-purple-400" />
    },
    {
      name: "Mental Health Counseling Conversations",
      description: "Professional therapeutic dialogue patterns for supportive communication.",
      icon: <Users size={24} className="text-purple-600 dark:text-purple-400" />
    },
    {
      name: "Social IQA",
      description: "Questions and answers about social situations and interactions.",
      icon: <Brain size={24} className="text-purple-600 dark:text-purple-400" />
    },
    {
      name: "Hellaswag",
      description: "Commonsense reasoning and understanding of everyday situations.",
      icon: <Scale size={24} className="text-purple-600 dark:text-purple-400" />
    },
    {
      name: "Synthetic Persona Chat",
      description: "Natural conversational flow and distinctive communication styles.",
      icon: <Award size={24} className="text-purple-600 dark:text-purple-400" />
    }
  ];

  const keyFeatures = [
    {
      title: "Personalized Decision Support",
      description: "Get tailored advice based on your specific situation and needs.",
      points: [
        "Understands complex decision contexts",
        "Considers multiple factors simultaneously",
        "Adapts to your preferences and values",
        "Asks clarifying questions to understand better"
      ]
    },
    {
      title: "Empathetic Conversation",
      description: "Our AI understands the emotional aspects of difficult decisions.",
      points: [
        "Recognizes and acknowledges emotions",
        "Provides supportive responses",
        "Creates a judgment-free zone",
        "Helps navigate emotionally challenging decisions"
      ]
    },
    {
      title: "Balanced Perspective",
      description: "Receive well-rounded advice that considers different viewpoints.",
      points: [
        "Presents pros and cons objectively",
        "Highlights factors you might not have considered",
        "Explores short and long-term implications",
        "Offers alternative approaches when appropriate"
      ]
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300"
          >
            Features & Capabilities
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Decision Sensei combines state-of-the-art AI technology with specialized training to help you make better decisions.
          </motion.p>
        </div>

        {/* Training Data Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Training Data</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our AI model is trained on diverse, high-quality datasets to understand human decision-making and provide empathetic guidance.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 transform -skew-y-3 rounded-3xl"></div>
            <div className="relative py-12 px-6">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {datasets.map((dataset, index) => (
                  <motion.div 
                    key={index} 
                    variants={item}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center mb-4">
                      {dataset.icon}
                      <h3 className="ml-3 text-xl font-semibold text-gray-900 dark:text-white">{dataset.name}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">{dataset.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Key Features</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Decision Sensei offers a range of capabilities to help you navigate complex choices and make confident decisions.
            </p>
          </div>

          <div className="space-y-12">
            {keyFeatures.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8`}
              >
                <div className="lg:w-1/2 xl:w-3/5">
                  <div className={`bg-gradient-to-br p-1 rounded-xl shadow-xl ${
                    index % 3 === 0 ? 'from-purple-500 to-blue-500' : 
                    index % 3 === 1 ? 'from-blue-500 to-teal-500' : 
                    'from-purple-500 to-pink-500'
                  }`}>
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg h-full">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {feature.points.map((point, i) => (
                          <div key={i} className="flex items-start">
                            <CheckCircle className="flex-shrink-0 mr-3 text-green-500 dark:text-green-400" size={20} />
                            <span className="text-gray-700 dark:text-gray-300">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 xl:w-2/5">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Security & Privacy Section */}
        <section>
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Lock size={180} className="text-purple-500 dark:text-purple-400" />
                </motion.div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Security & Privacy</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="flex-shrink-0 mr-3 mt-1 text-green-500 dark:text-green-400" size={20} />
                    <div>
                      <h3 className="font-semibold text-xl text-gray-900 dark:text-white">Your Data Stays Private</h3>
                      <p className="text-gray-600 dark:text-gray-400">Your conversations are not used to train our models or shared with third parties.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="flex-shrink-0 mr-3 mt-1 text-green-500 dark:text-green-400" size={20} />
                    <div>
                      <h3 className="font-semibold text-xl text-gray-900 dark:text-white">Secure Conversations</h3>
                      <p className="text-gray-600 dark:text-gray-400">All communication with our AI is encrypted end-to-end for maximum security.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="flex-shrink-0 mr-3 mt-1 text-green-500 dark:text-green-400" size={20} />
                    <div>
                      <h3 className="font-semibold text-xl text-gray-900 dark:text-white">Local Storage</h3>
                      <p className="text-gray-600 dark:text-gray-400">Chat history is stored locally on your device, not on our servers.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FeaturesPage;