import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, AlertTriangle, Info } from "lucide-react";

interface ComparisonItem {
  material?: string;
  strategy?: string;
  effectiveTemp?: string;
  timing?: string;
  materials?: string;
  description?: string;
  characteristics?: string[];
  applications?: string[];
  benefits?: string[];
  limitations?: string[];
  considerations?: string[];
  process?: string[];
  pros?: string[];
  cons?: string[];
  typicalUse?: string;
  costRating?: string;
  durabilityRating?: string;
  bestFor?: string;
}

interface ComparisonTableSectionProps {
  title: string;
  description?: string;
  overview?: string;
  materials?: ComparisonItem[];
  strategies?: ComparisonItem[];
  index: number;
}

export function ComparisonTableSection({ 
  title, 
  description,
  overview,
  materials, 
  strategies,
  index 
}: ComparisonTableSectionProps) {
  const items = materials || strategies || [];

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
        {/* Description/Overview */}
        {(description || overview) && (
          <div className="mb-6">
            <p className="text-snow-700 leading-relaxed">{description || overview}</p>
          </div>
        )}

        {/* Comparison Items */}
        <div className="space-y-6">
          {items.map((item, idx) => (
            <div key={idx} className="bg-snow-50 p-6 rounded-lg">
              {/* Item Header */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <h3 className="text-xl font-bold text-truckcorp-black mb-2 lg:mb-0">
                  {item.material || item.strategy}
                </h3>
                
                {/* Quick Info Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.effectiveTemp && (
                    <span className="inline-block bg-ice-100 text-ice-600 px-3 py-1 rounded-full text-base font-medium">
                      Effective: {item.effectiveTemp}
                    </span>
                  )}
                  {item.costRating && (
                    <span className={`inline-block px-3 py-1 rounded-full text-base font-medium ${
                      item.costRating === 'Low' ? 'bg-green-100 text-green-700' :
                      item.costRating === 'Medium' ? 'bg-warning-100 text-warning-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      Cost: {item.costRating}
                    </span>
                  )}
                  {item.durabilityRating && (
                    <span className={`inline-block px-3 py-1 rounded-full text-base font-medium ${
                      item.durabilityRating === 'Excellent' ? 'bg-green-100 text-green-700' :
                      item.durabilityRating === 'Good' ? 'bg-warning-100 text-warning-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      Durability: {item.durabilityRating}
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              {(item.description || item.timing) && (
                <p className="text-snow-700 mb-4">{item.description || item.timing}</p>
              )}

              {/* Materials Used */}
              {item.materials && (
                <div className="mb-4">
                  <span className="inline-block bg-truckcorp-orange-100 text-truckcorp-orange-800 px-3 py-1 rounded-full text-base font-medium">
                    Materials: {item.materials}
                  </span>
                </div>
              )}

              {/* Best For */}
              {(item.bestFor || item.typicalUse) && (
                <div className="mb-4">
                  <span className="inline-block bg-truckcorp-orange-100 text-truckcorp-orange-800 px-3 py-1 rounded-full text-base font-medium">
                    Best for: {item.bestFor || item.typicalUse}
                  </span>
                </div>
              )}

              {/* Process Steps */}
              {item.process && (
                <div className="mb-4">
                  <h4 className="font-semibold text-truckcorp-black mb-2">Process:</h4>
                  <ol className="space-y-1">
                    {item.process.map((step, stepIdx) => (
                      <li key={stepIdx} className="flex items-start space-x-2">
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-truckcorp-orange-500 text-white rounded-full text-base font-bold flex-shrink-0 mt-0.5">
                          {stepIdx + 1}
                        </span>
                        <span className="text-snow-700">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* Multi-column layout for characteristics, benefits, limitations, etc. */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Characteristics */}
                {item.characteristics && (
                  <div>
                    <h4 className="font-semibold text-truckcorp-black mb-2">Characteristics:</h4>
                    <ul className="space-y-1">
                      {item.characteristics.map((char, charIdx) => (
                        <li key={charIdx} className="flex items-start space-x-2">
                          <Info className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span className="text-snow-700 text-base">{char}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Benefits/Pros */}
                {(item.benefits || item.pros) && (
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">
                      {item.benefits ? 'Benefits:' : 'Pros:'}
                    </h4>
                    <ul className="space-y-1">
                      {(item.benefits || item.pros)?.map((benefit, benefitIdx) => (
                        <li key={benefitIdx} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                          <span className="text-snow-700 text-base">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Limitations/Cons */}
                {(item.limitations || item.cons) && (
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">
                      {item.limitations ? 'Limitations:' : 'Cons:'}
                    </h4>
                    <ul className="space-y-1">
                      {(item.limitations || item.cons)?.map((limitation, limitIdx) => (
                        <li key={limitIdx} className="flex items-start space-x-2">
                          <AlertTriangle className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                          <span className="text-snow-700 text-base">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Applications */}
                {item.applications && (
                  <div>
                    <h4 className="font-semibold text-truckcorp-black mb-2">Applications:</h4>
                    <ul className="space-y-1">
                      {item.applications.map((app, appIdx) => (
                        <li key={appIdx} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-truckcorp-orange-500 mt-1 flex-shrink-0" />
                          <span className="text-snow-700 text-base">{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Considerations */}
                {item.considerations && (
                  <div>
                    <h4 className="font-semibold text-warning-800 mb-2">Considerations:</h4>
                    <ul className="space-y-1">
                      {item.considerations.map((consideration, consIdx) => (
                        <li key={consIdx} className="flex items-start space-x-2">
                          <AlertTriangle className="w-4 h-4 text-warning-600 mt-1 flex-shrink-0" />
                          <span className="text-snow-700 text-base">{consideration}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ComparisonTableSection;