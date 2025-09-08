import React from "react";
import { motion } from "framer-motion";
import { Truck, ChevronRight, CheckCircle, Info } from "lucide-react";

interface PlowTypesSectionProps {
  title: string;
  description?: string;
  index: number;
}

export function PlowTypesSection({ 
  title, 
  description,
  index 
}: PlowTypesSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.6 }}
    >
      {/* White background container */}
      <div className="bg-white p-8 rounded-xl shadow-md border border-snow-100">
        {/* Introduction */}
        <div className="mb-10">
          <p className="text-snow-700 leading-relaxed text-lg">
            Understanding different plow types and their optimal use cases for municipal and commercial snow removal operations.
          </p>
        </div>

        {/* Plow Types Grid */}
        <div className="space-y-8 mb-12">
          {/* Front-mounted Plows */}
          <div className="bg-snow-50 p-6 rounded-lg">
            <div className="flex items-start space-x-3 mb-4">
              <div className="p-2 bg-truckcorp-orange-100 rounded-lg flex-shrink-0">
                <Truck className="w-5 h-5 text-truckcorp-orange-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-truckcorp-black mb-2">Front-mounted (Head) Plows</h3>
                <p className="text-snow-700 text-base mb-3">
                  Primary blade on a municipal truck; angles left/right. Moldboard curvature and height affect 
                  rolling/casting performance. Workhorse for general route clearing.
                </p>
                <div className="text-truckcorp-orange-600 font-medium text-base">
                  Best for: General route clearing
                </div>
              </div>
            </div>
          </div>

          {/* Wing Plows */}
          <div className="bg-snow-50 p-6 rounded-lg">
            <div className="flex items-start space-x-3 mb-4">
              <div className="p-2 bg-truckcorp-orange-100 rounded-lg flex-shrink-0">
                <Truck className="w-5 h-5 text-truckcorp-orange-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-truckcorp-black mb-2">Wing Plows</h3>
                <p className="text-snow-700 text-base mb-3">
                  Hydraulically deployed side blades that widen the clearing path and retract to legal width for 
                  transport. Ideal for wide shoulders, ramps, and variable-width corridors—fewer passes per route.
                </p>
                <div className="text-truckcorp-orange-600 font-medium text-base">
                  Best for: Wide shoulders, ramps, variable-width corridors
                </div>
              </div>
            </div>
          </div>

          {/* Tow Plows */}
          <div className="bg-snow-50 p-6 rounded-lg">
            <div className="flex items-start space-x-3 mb-4">
              <div className="p-2 bg-truckcorp-orange-100 rounded-lg flex-shrink-0">
                <Truck className="w-5 h-5 text-truckcorp-orange-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-truckcorp-black mb-2">Tow Plows</h3>
                <p className="text-snow-700 text-base mb-3">
                  Steerable trailer plows that swing out laterally so one truck can clear two lanes at once; 
                  retract for choke points. Excellent for multi-lane routes where reducing the number of trucks 
                  is a goal and there's room to operate.
                </p>
                <div className="text-truckcorp-orange-600 font-medium text-base">
                  Best for: Multi-lane highways
                </div>
              </div>
            </div>
          </div>

          {/* Underbody Scrapers */}
          <div className="bg-snow-50 p-6 rounded-lg">
            <div className="flex items-start space-x-3 mb-4">
              <div className="p-2 bg-truckcorp-orange-100 rounded-lg flex-shrink-0">
                <Truck className="w-5 h-5 text-truckcorp-orange-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-truckcorp-black mb-2">Underbody Scrapers</h3>
                <p className="text-snow-700 text-base mb-3">
                  Mid-frame scraper blades used to <strong>cut compacted pack</strong> and slush that head plows 
                  leave behind—often more effective at highway speeds than a grader for pack removal.
                </p>
                <div className="text-truckcorp-orange-600 font-medium text-base">
                  Best for: Persistent pack conditions
                </div>
              </div>
            </div>
          </div>

          {/* V-Plows */}
          <div className="bg-snow-50 p-6 rounded-lg">
            <div className="flex items-start space-x-3 mb-4">
              <div className="p-2 bg-truckcorp-orange-100 rounded-lg flex-shrink-0">
                <Truck className="w-5 h-5 text-truckcorp-orange-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-truckcorp-black mb-2">V-Plows</h3>
                <p className="text-snow-700 text-base mb-3">
                  "V" configuration to punch through drifts/windrows; many reconfigure to scoop or straight. 
                  Useful for drift-prone corridors and opening blocked roads.
                </p>
                <div className="text-truckcorp-orange-600 font-medium text-base">
                  Best for: Heavy drifts and blocked roads
                </div>
              </div>
            </div>
          </div>

          {/* Rotary Blowers */}
          <div className="bg-snow-50 p-6 rounded-lg">
            <div className="flex items-start space-x-3 mb-4">
              <div className="p-2 bg-truckcorp-orange-100 rounded-lg flex-shrink-0">
                <Truck className="w-5 h-5 text-truckcorp-orange-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-truckcorp-black mb-2">Rotary Blowers</h3>
                <p className="text-snow-700 text-base mb-3">
                  High-capacity auger/impeller systems to throw deep berms well clear of the roadway 
                  (mountain passes, airfields, rail yards).
                </p>
                <div className="text-truckcorp-orange-600 font-medium text-base">
                  Best for: Mountain passes, airfields, heavy accumulation areas
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Selector Guide */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-truckcorp-orange-100 rounded-lg">
              <Info className="w-6 h-6 text-truckcorp-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-truckcorp-black">Quick Selector</h3>
          </div>

          <div className="bg-ice-50 p-6 rounded-lg border border-ice-200">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <ChevronRight className="w-5 h-5 text-truckcorp-orange-500 flex-shrink-0" />
                <span className="text-snow-700 text-base">
                  <strong className="text-truckcorp-black">Two-lane arterials w/ shoulders</strong> → Front + Wing
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <ChevronRight className="w-5 h-5 text-truckcorp-orange-500 flex-shrink-0" />
                <span className="text-snow-700 text-base">
                  <strong className="text-truckcorp-black">Multi-lane highways</strong> → Front + Tow
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <ChevronRight className="w-5 h-5 text-truckcorp-orange-500 flex-shrink-0" />
                <span className="text-snow-700 text-base">
                  <strong className="text-truckcorp-black">Persistent pack</strong> → Add Underbody
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <ChevronRight className="w-5 h-5 text-truckcorp-orange-500 flex-shrink-0" />
                <span className="text-snow-700 text-base">
                  <strong className="text-truckcorp-black">Heavy drifts</strong> → V-plow or blower
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Selection Considerations */}
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-truckcorp-orange-100 rounded-lg">
              <CheckCircle className="w-6 h-6 text-truckcorp-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-truckcorp-black">Selection Considerations</h3>
          </div>

          <div className="bg-warning-50 p-6 rounded-lg border-l-4 border-warning-500">
            <div className="space-y-2">
              <div className="text-snow-700 text-base">
                <strong className="text-truckcorp-black">•</strong> Route characteristics (width, traffic volume, terrain)
              </div>
              <div className="text-snow-700 text-base">
                <strong className="text-truckcorp-black">•</strong> Typical snow conditions and accumulation patterns
              </div>
              <div className="text-snow-700 text-base">
                <strong className="text-truckcorp-black">•</strong> Available equipment operators and training requirements
              </div>
              <div className="text-snow-700 text-base">
                <strong className="text-truckcorp-black">•</strong> Budget considerations for initial purchase and maintenance
              </div>
              <div className="text-snow-700 text-base">
                <strong className="text-truckcorp-black">•</strong> Storage and transport requirements when not in use
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default PlowTypesSection;