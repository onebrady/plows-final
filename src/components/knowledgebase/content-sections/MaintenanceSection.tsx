import React from "react";
import { motion } from "framer-motion";
import { Wrench, Clock, Shield, AlertTriangle, CheckCircle, Calendar, Warehouse, HardHat } from "lucide-react";

interface MaintenanceSectionProps {
  title: string;
  description?: string;
  index: number;
}

export function MaintenanceSection({ 
  title, 
  description,
  index 
}: MaintenanceSectionProps) {
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
            Proper maintenance ensures reliable equipment operation, extends service life, and keeps crews safe during snow operations.
          </p>
        </div>

        {/* Daily/Shift Routines */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-truckcorp-orange-100 rounded-lg">
              <Clock className="w-6 h-6 text-truckcorp-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-truckcorp-black">Daily/Shift Routines</h3>
          </div>

          <div className="space-y-8">
            {/* Pre-trip */}
            <div>
              <h4 className="text-xl font-semibold text-truckcorp-black mb-4 flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-truckcorp-orange-500" />
                <span>Pre-trip</span>
              </h4>
              <div className="bg-snow-50 p-6 rounded-lg">
                <p className="text-snow-700 leading-relaxed text-base mb-4">
                  Hydraulics (leaks/levels), edges/bolts, mounts/frame, lights/electrical, tires/chains, radios, 
                  cab defrost/wipers, safety gear; document defects.
                </p>
              </div>
            </div>

            {/* Post-trip */}
            <div>
              <h4 className="text-xl font-semibold text-truckcorp-black mb-4 flex items-center space-x-2">
                <Wrench className="w-5 h-5 text-truckcorp-orange-500" />
                <span>Post-trip</span>
              </h4>
              <div className="bg-snow-50 p-6 rounded-lg">
                <p className="text-snow-700 leading-relaxed text-base">
                  Wash salt/brine off (focus undercarriage, cylinders, lights), lube as per OEM, inspect for damage, 
                  refuel/restock, log issues.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Calibration & Storage */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-truckcorp-orange-100 rounded-lg">
              <Calendar className="w-6 h-6 text-truckcorp-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-truckcorp-black">Calibration & Storage</h3>
          </div>

          <div className="space-y-6">
            <div className="bg-snow-50 p-6 rounded-lg">
              <p className="text-snow-700 leading-relaxed">
                Calibrate spreaders at season start and after repairs/material changes. Store <strong>abrasives/deicers covered and dry</strong>; 
                manage runoff per local requirements. Drain/flush liquid systems off-season; grease/lube and cover plows/spreaders.
              </p>
            </div>

            <div className="bg-warning-50 p-4 rounded-lg border-l-4 border-warning-500">
              <div className="flex items-center space-x-2 mb-2">
                <Warehouse className="w-5 h-5 text-warning-600" />
                <h4 className="font-semibold text-warning-800 text-base">Storage Requirements</h4>
              </div>
              <p className="text-warning-700 text-base">
                Covered stockpiles with runoff compliance are essential for material storage and environmental protection.
              </p>
            </div>
          </div>
        </div>

        {/* Operator Safety */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-truckcorp-orange-100 rounded-lg">
              <HardHat className="w-6 h-6 text-truckcorp-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-truckcorp-black">Operator Safety</h3>
          </div>

          <div className="bg-snow-50 p-6 rounded-lg">
            <p className="text-snow-700 leading-relaxed text-base mb-4">
              Seatbelts always; manage fatigue; maintain visibility; control speed to avoid snow clouds; anticipate hidden obstacles; 
              use curb guards/trip edges; deploy wings/tow only when safe/clear; communicate via radio; assume motorists will do the unexpected.
            </p>
          </div>
        </div>

        {/* Extreme Conditions */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-truckcorp-orange-100 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-truckcorp-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-truckcorp-black">Extreme Conditions</h3>
          </div>

          <div className="space-y-6">
            <div className="bg-snow-50 p-6 rounded-lg">
              <p className="text-snow-700 leading-relaxed">
                Convoy plowing where appropriate; stage during whiteouts if visibility unsafe; plan <strong>drift control</strong> 
                (snow fences/vegetation) pre-season on trouble spots. Carry emergency spares (hose/coupler, tools, tow strap).
              </p>
            </div>

            <div className="bg-ice-50 p-4 rounded-lg border-l-4 border-ice-500">
              <div className="flex items-center space-x-2 mb-2">
                <Shield className="w-5 h-5 text-ice-600" />
                <h4 className="font-semibold text-ice-800 text-base">Emergency Preparedness</h4>
              </div>
              <p className="text-ice-700 text-base">
                Always carry emergency spares and plan drift control measures before the season begins.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default MaintenanceSection;