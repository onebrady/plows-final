import React from "react";
import { motion } from "framer-motion";
import { Target, Clock, MapPin, Thermometer } from "lucide-react";

interface ApplicationPractice {
  category: string;
  description: string;
  points: string[];
}

interface ApplicationPracticesSectionProps {
  title: string;
  overview?: string;
  practices: ApplicationPractice[];
  index: number;
}

export function ApplicationPracticesSection({ 
  title, 
  overview,
  practices,
  index 
}: ApplicationPracticesSectionProps) {
  const getIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'pre-wetting':
        return <Target className="w-5 h-5 text-truckcorp-orange-500" />;
      case 'application rates':
        return <Thermometer className="w-5 h-5 text-truckcorp-orange-500" />;
      case 'priority areas':
        return <MapPin className="w-5 h-5 text-truckcorp-orange-500" />;
      case 'timing strategy':
        return <Clock className="w-5 h-5 text-truckcorp-orange-500" />;
      default:
        return <Target className="w-5 h-5 text-truckcorp-orange-500" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.6 }}
    >
      <h2 className="text-2xl font-black text-truckcorp-black uppercase mb-6">
        {title}
      </h2>
      
      {/* White background container */}
      <div className="bg-white p-8 rounded-xl shadow-md border border-snow-100">
        {/* Overview */}
        {overview && (
          <div className="mb-8">
            <p className="text-snow-700 leading-relaxed text-lg">{overview}</p>
          </div>
        )}

        {/* Practices Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {practices.map((practice, idx) => (
            <div key={idx} className="bg-snow-50 p-6 rounded-lg">
              {/* Practice Header */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex-shrink-0 p-2 bg-truckcorp-orange-100 rounded-lg">
                  {getIcon(practice.category)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-truckcorp-black">
                    {practice.category}
                  </h3>
                  <p className="text-snow-700 text-base mt-1">{practice.description}</p>
                </div>
              </div>

              {/* Practice Points */}
              <div className="space-y-2">
                {practice.points.map((point, pointIdx) => (
                  <div key={pointIdx} className="text-snow-700">
                    <strong className="text-truckcorp-black">•</strong> {point}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ApplicationPracticesSection;