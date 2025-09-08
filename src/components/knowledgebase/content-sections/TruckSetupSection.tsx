import React from "react";
import { motion } from "framer-motion";
import { Truck, Scale, Zap, Eye, Radio, Wrench, Clipboard } from "lucide-react";

interface TruckSetupSectionProps {
  title: string;
  description?: string;
  index: number;
}

export function TruckSetupSection({ 
  title, 
  description,
  index 
}: TruckSetupSectionProps) {
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
        {/* Introduction */}
        <div className="mb-10">
          <p className="text-snow-700 leading-relaxed text-lg">
            Vehicle integration, weight considerations, and procurement guidelines for municipal plow truck setup.
          </p>
        </div>

        {/* Weight & Ratings */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-truckcorp-orange-100 rounded-lg">
              <Scale className="w-6 h-6 text-truckcorp-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-truckcorp-black">Weight & Ratings</h3>
          </div>

          <div className="space-y-6 text-snow-700 leading-relaxed">
            <div className="bg-warning-50 p-4 rounded-lg border-l-4 border-warning-500">
              <p className="font-medium text-warning-800">
                <strong>Critical:</strong> Respect <strong>GVWR/GAWR</strong> with the plow <strong>raised</strong>; 
                include operator, fuel, ballast, and auxiliary gear.
              </p>
            </div>
            
            <p>
              Diesel front ends reduce allowable plow weight; rear ballast may be required. Front springs/axle upgrades 
              are common with wing/tow plows.
            </p>
          </div>
        </div>

        {/* Push Frames & Mounts */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-truckcorp-orange-100 rounded-lg">
              <Truck className="w-6 h-6 text-truckcorp-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-truckcorp-black">Push Frames & Mounts</h3>
          </div>

          <div className="text-snow-700 leading-relaxed">
            <p>
              Distribute loads across frame rails; reinforce for wing/tow side-loads. Verify compatibility with 
              OEM plow-prep packages and cooling airflow.
            </p>
          </div>
        </div>

        {/* Systems Grid */}
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          {/* Wing Systems */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-truckcorp-orange-100 rounded-lg">
                <Zap className="w-5 h-5 text-truckcorp-orange-600" />
              </div>
              <h4 className="text-xl font-bold text-truckcorp-black">Wing Systems</h4>
            </div>
            <p className="text-snow-700 leading-relaxed">
              Add mirrors/cameras or sensors for wing tip visibility; include travel locks; train operators 
              for deploy/retract at speed.
            </p>
          </div>

          {/* Underbody Scrapers */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-truckcorp-orange-100 rounded-lg">
                <Wrench className="w-5 h-5 text-truckcorp-orange-600" />
              </div>
              <h4 className="text-xl font-bold text-truckcorp-black">Underbody Scrapers</h4>
            </div>
            <p className="text-snow-700 leading-relaxed">
              Ensure adequate down-pressure; spec oscillation for better contact; mind conflicts with PTO/exhaust runs.
            </p>
          </div>

          {/* Spreaders */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-truckcorp-orange-100 rounded-lg">
                <Scale className="w-5 h-5 text-truckcorp-orange-600" />
              </div>
              <h4 className="text-xl font-bold text-truckcorp-black">Spreaders</h4>
            </div>
            <p className="text-snow-700 leading-relaxed">
              Match capacity to route cycle time; consider dump-body spreaders or V-box hoppers; include 
              tarp/vibrators and closed-loop controllers.
            </p>
          </div>

          {/* Lighting & Visibility */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-truckcorp-orange-100 rounded-lg">
                <Eye className="w-5 h-5 text-truckcorp-orange-600" />
              </div>
              <h4 className="text-xl font-bold text-truckcorp-black">Lighting & Visibility</h4>
            </div>
            <p className="text-snow-700 leading-relaxed">
              Plow lights, high-mount ambers, side/rear floods; clean lenses frequently; add reflective striping 
              and markers on wings/tow plows.
            </p>
          </div>

          {/* Comms & Telematics */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-truckcorp-orange-100 rounded-lg">
                <Radio className="w-5 h-5 text-truckcorp-orange-600" />
              </div>
              <h4 className="text-xl font-bold text-truckcorp-black">Comms & Telematics</h4>
            </div>
            <p className="text-snow-700 leading-relaxed">
              Two-way radio and GPS logging for proof-of-service and routing; integrate plow up/down and 
              spreader on/off sensors where possible.
            </p>
          </div>

          {/* Accessories */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-truckcorp-orange-100 rounded-lg">
                <Wrench className="w-5 h-5 text-truckcorp-orange-600" />
              </div>
              <h4 className="text-xl font-bold text-truckcorp-black">Accessories</h4>
            </div>
            <p className="text-snow-700 leading-relaxed">
              Shoes (gravel), casters (storage), curb guards (protect edge ends), deflectors (reduce blow-over), 
              backup cameras/sensors.
            </p>
          </div>
        </div>

        {/* Procurement/Spec Checklist */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-truckcorp-orange-100 rounded-lg">
              <Clipboard className="w-6 h-6 text-truckcorp-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-truckcorp-black">Procurement/Spec Checklist</h3>
          </div>

          <div className="bg-snow-50 p-6 rounded-lg">
            <p className="text-base text-snow-600 mb-4 italic">Copy/paste checklist for procurement specifications:</p>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2 text-snow-700">
                <div><strong className="text-truckcorp-black">•</strong> Route types & lane-mile targets</div>
                <div><strong className="text-truckcorp-black">•</strong> Plow package: head (size/curvature), wing (side/length), tow (Y/N), underbody (Y/N)</div>
                <div><strong className="text-truckcorp-black">•</strong> Cutting edges: initial material + spares by lane-mile target</div>
                <div><strong className="text-truckcorp-black">•</strong> Hydraulics: pump GPM/PSI, # circuits, controller model (ground-speed)</div>
                <div><strong className="text-truckcorp-black">•</strong> Chassis: GVWR, FAWR, PTO, alternator amps, cooling, plow-prep</div>
                <div><strong className="text-truckcorp-black">•</strong> Frame/mount reinforcement; quick-attach requirements</div>
              </div>
              
              <div className="space-y-2 text-snow-700">
                <div><strong className="text-truckcorp-black">•</strong> Body/spreader: capacity, material handling (auger/chain), tarp, pre-wet tanks</div>
                <div><strong className="text-truckcorp-black">•</strong> Lighting/electrical: beacons, work/wing lights, plow lights, wiring standards</div>
                <div><strong className="text-truckcorp-black">•</strong> Comms/telematics: radio, GPS, sensors (plow up/down, spreader on/off)</div>
                <div><strong className="text-truckcorp-black">•</strong> Safety: chains policy, PPE, decals ("Stay Back"), camera(s)</div>
                <div><strong className="text-truckcorp-black">•</strong> Calibration plan (pre-season, after repairs)</div>
                <div><strong className="text-truckcorp-black">•</strong> Storage plan (covered stockpiles; runoff compliance)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default TruckSetupSection;