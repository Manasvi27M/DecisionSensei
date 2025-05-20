import React from 'react';
import { BrainCircuit, MessageSquare, Lightbulb, Shield } from 'lucide-react';

interface FeatureProps {
  feature: {
    icon: string;
    title: string;
    description: string;
  };
}

const FeatureCard: React.FC<FeatureProps> = ({ feature }) => {
  const renderIcon = () => {
    switch (feature.icon) {
      case 'BrainCircuit':
        return <BrainCircuit size={32} className="text-purple-600 dark:text-purple-400" />;
      case 'MessageSquare':
        return <MessageSquare size={32} className="text-purple-600 dark:text-purple-400" />;
      case 'Lightbulb':
        return <Lightbulb size={32} className="text-purple-600 dark:text-purple-400" />;
      case 'Shield':
        return <Shield size={32} className="text-purple-600 dark:text-purple-400" />;
      default:
        return <BrainCircuit size={32} className="text-purple-600 dark:text-purple-400" />;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-full w-16 h-16 flex items-center justify-center mb-4">
        {renderIcon()}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
    </div>
  );
};

export default FeatureCard;