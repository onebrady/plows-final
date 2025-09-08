import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Info, Settings, Wrench } from "lucide-react";

interface CategoryItem {
  category?: string;
  system?: string;
  component?: string;
  type?: string;
  description?: string;
  details?: string;
  items?: string[];
  features?: string[];
  benefits?: string[];
  considerations?: string[];
  specifications?: string[];
  applications?: string[];
  components?: string[];
  capabilities?: string[];
  sensors?: string[];
  purpose?: string;
  use?: string;
  item?: string;
}

interface CategoryBreakdownSectionProps {
  title: string;
  description?: string;
  overview?: string;
  categories?: CategoryItem[];
  systems?: CategoryItem[];
  components?: CategoryItem[];
  options?: CategoryItem[];
  accessories?: CategoryItem[];
  index: number;
}

export function CategoryBreakdownSection({ 
  title, 
  description,
  overview,
  categories,
  systems,
  components,
  options,
  accessories,
  index 
}: CategoryBreakdownSectionProps) {
  const items = categories || systems || components || options || accessories || [];

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

        {/* Category Items */}
        <div className="space-y-6">
          {items.map((item, idx) => (
            <div key={idx} className="bg-snow-50 p-6 rounded-lg">
              {/* Item Header */}
              <div className="flex items-start space-x-3 mb-4">
                <div className="flex-shrink-0 mt-1">
                  {(item.system || item.component) ? (
                    <Settings className="w-5 h-5 text-truckcorp-orange-500" />
                  ) : (
                    <Info className="w-5 h-5 text-truckcorp-orange-500" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-truckcorp-black mb-2">
                    {item.category || item.system || item.component || item.type || item.item}
                  </h3>
                  
                  {/* Description/Details/Purpose */}
                  {(item.description || item.details || item.purpose) && (
                    <p className="text-snow-700 mb-4">
                      {item.description || item.details || item.purpose}
                    </p>
                  )}

                  {/* Use case */}
                  {item.use && (
                    <div className="mb-3">
                      <span className="inline-block bg-truckcorp-orange-100 text-truckcorp-orange-800 px-3 py-1 rounded-full text-base font-medium">
                        Use: {item.use}
                      </span>
                    </div>
                  )}

                  {/* Multi-column layout for various arrays */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Items */}
                    {item.items && (
                      <div>
                        <h4 className="font-semibold text-truckcorp-black mb-2">Items:</h4>
                        <ul className="space-y-1">
                          {item.items.map((listItem, itemIdx) => (
                            <li key={itemIdx} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-truckcorp-orange-500 mt-1 flex-shrink-0" />
                              <div className="text-snow-700 text-base">
                                {typeof listItem === 'object' && listItem.item ? (
                                  <div>
                                    <strong>{listItem.item}</strong>
                                    {listItem.use && <span> - {listItem.use}</span>}
                                  </div>
                                ) : (
                                  <span>{listItem}</span>
                                )}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Features */}
                    {item.features && (
                      <div>
                        <h4 className="font-semibold text-truckcorp-black mb-2">Features:</h4>
                        <ul className="space-y-1">
                          {item.features.map((feature, featureIdx) => (
                            <li key={featureIdx} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-truckcorp-orange-500 mt-1 flex-shrink-0" />
                              <span className="text-snow-700 text-base">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Components */}
                    {item.components && (
                      <div>
                        <h4 className="font-semibold text-truckcorp-black mb-2">Components:</h4>
                        <ul className="space-y-1">
                          {item.components.map((component, compIdx) => (
                            <li key={compIdx} className="flex items-start space-x-2">
                              <Wrench className="w-4 h-4 text-truckcorp-orange-500 mt-1 flex-shrink-0" />
                              <span className="text-snow-700 text-base">{component}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Capabilities */}
                    {item.capabilities && (
                      <div>
                        <h4 className="font-semibold text-truckcorp-black mb-2">Capabilities:</h4>
                        <ul className="space-y-1">
                          {item.capabilities.map((capability, capIdx) => (
                            <li key={capIdx} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-truckcorp-orange-500 mt-1 flex-shrink-0" />
                              <span className="text-snow-700 text-base">{capability}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Sensors */}
                    {item.sensors && (
                      <div>
                        <h4 className="font-semibold text-truckcorp-black mb-2">Sensors:</h4>
                        <ul className="space-y-1">
                          {item.sensors.map((sensor, sensorIdx) => (
                            <li key={sensorIdx} className="flex items-start space-x-2">
                              <Info className="w-4 h-4 text-truckcorp-orange-500 mt-1 flex-shrink-0" />
                              <span className="text-snow-700 text-base">{sensor}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Benefits */}
                    {item.benefits && (
                      <div>
                        <h4 className="font-semibold text-green-800 mb-2">Benefits:</h4>
                        <ul className="space-y-1">
                          {item.benefits.map((benefit, benefitIdx) => (
                            <li key={benefitIdx} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                              <span className="text-snow-700 text-base">{benefit}</span>
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
                              <Info className="w-4 h-4 text-warning-600 mt-1 flex-shrink-0" />
                              <span className="text-snow-700 text-base">{consideration}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Specifications */}
                    {item.specifications && (
                      <div>
                        <h4 className="font-semibold text-truckcorp-black mb-2">Specifications:</h4>
                        <ul className="space-y-1">
                          {item.specifications.map((spec, specIdx) => (
                            <li key={specIdx} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-truckcorp-orange-500 mt-1 flex-shrink-0" />
                              <span className="text-snow-700 text-base">{spec}</span>
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
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default CategoryBreakdownSection;