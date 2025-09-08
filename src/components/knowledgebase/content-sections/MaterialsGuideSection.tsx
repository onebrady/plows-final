import React from "react";
import { motion } from "framer-motion";
import { Thermometer, DollarSign, AlertTriangle } from "lucide-react";

interface Material {
  name: string;
  tempRange: string;
  cost: string;
  description: string;
  keyPoints: string[];
  considerations?: string[];
}

interface MaterialsGuideSectionProps {
  title: string;
  overview?: string;
  materials: Material[];
  index: number;
}

export function MaterialsGuideSection({ 
  title, 
  overview,
  materials,
  index 
}: MaterialsGuideSectionProps) {
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

        {/* Materials Grid */}
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          {materials.map((material, idx) => (
            <div key={idx} className="bg-snow-50 p-6 rounded-lg border border-snow-200">
              {/* Material Header */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-truckcorp-black mb-3">
                  {material.name}
                </h3>
                
                {/* Key Info Badges */}
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="inline-flex items-center bg-ice-100 text-ice-700 px-3 py-1 rounded-full text-base font-medium">
                    <Thermometer className="w-4 h-4 mr-1" />
                    {material.tempRange}
                  </span>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-base font-medium ${
                    material.cost === 'Low' ? 'bg-green-100 text-green-700' :
                    material.cost === 'Medium' ? 'bg-warning-100 text-warning-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    <DollarSign className="w-4 h-4 mr-1" />
                    {material.cost} Cost
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-snow-700 mb-4 leading-relaxed">
                {material.description}
              </p>

              {/* Key Points */}
              {material.keyPoints && material.keyPoints.length > 0 && (
                <div className="mb-4">
                  <div className="space-y-1">
                    {material.keyPoints.map((point, pointIdx) => (
                      <div key={pointIdx} className="text-snow-700">
                        <strong className="text-truckcorp-black">•</strong> {point}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Considerations */}
              {material.considerations && material.considerations.length > 0 && (
                <div className="bg-warning-50 p-3 rounded border-l-4 border-warning-400">
                  <div className="flex items-start space-x-2">
                    <AlertTriangle className="w-4 h-4 text-warning-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-warning-800 mb-1">Considerations:</h4>
                      <div className="space-y-1">
                        {material.considerations.map((consideration, consIdx) => (
                          <div key={consIdx} className="text-warning-700 text-base">
                            {consideration}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default MaterialsGuideSection;