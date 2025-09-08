import React from "react";
import { motion } from "framer-motion";
import { Settings, Gauge, Target, Monitor, ExternalLink } from "lucide-react";

interface HydraulicsSectionProps {
  title: string;
  description?: string;
  index: number;
}

export function HydraulicsSection({ 
  title, 
  description,
  index 
}: HydraulicsSectionProps) {
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
          <div className="bg-truckcorp-orange-50 p-6 rounded-lg border-l-4 border-truckcorp-orange-500 mb-8">
            <p className="text-truckcorp-black text-lg font-medium">
              <strong>What this covers:</strong> Central hydraulic architecture, in-cab controls, spreader integration, 
              and Olympus — TruckCorp's integrated control platform. Designed for <strong>simultaneous</strong> operation 
              of front plow, wing, underbody scraper, dump body, and spreader.
            </p>
          </div>
        </div>

        {/* Central Hydraulic Architecture */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-truckcorp-orange-100 rounded-lg">
              <Settings className="w-6 h-6 text-truckcorp-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-truckcorp-black">Central Hydraulic Architecture</h3>
          </div>

          <div className="space-y-6 text-snow-700 leading-relaxed">
            <div>
              <h4 className="font-bold text-truckcorp-black mb-3">Flow & pressure for concurrency.</h4>
              <p>
                Size the pump and valve stack so raising/angling a plow doesn't starve the spreader or wing. 
                Favor <strong className="text-truckcorp-black">load-sensing / pressure-compensated</strong> systems 
                for smooth multi-function control and efficiency.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-truckcorp-black mb-3">Valve sections & expansion.</h4>
              <p>
                Specify enough circuits for today's tools <strong className="text-truckcorp-black">plus spares</strong> for 
                future adds (e.g., second wing, brine pump). Include <strong className="text-truckcorp-black">manual overrides</strong> at 
                each valve for field recovery.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-truckcorp-black mb-3">Reservoir & filtration.</h4>
              <p>
                Use an appropriately sized tank with anti-aeration baffles, quality <strong className="text-truckcorp-black">return filtration</strong>, 
                and a suction screen. Service indicators on filters reduce guesswork.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-truckcorp-black mb-3">Corrosion resistance.</h4>
              <p>
                Prefer <strong className="text-truckcorp-black">stainless hardlines</strong> along the frame and sealed connectors. 
                Salt + vibration kills hoses and fittings; spec hardware to survive winters.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-truckcorp-black mb-3">Cold-weather provisions.</h4>
              <p>
                Heated/insulated valve enclosures, weather-tight electronics, and cold-rated hoses/seals keep controls 
                responsive below freezing.
              </p>
            </div>
          </div>
        </div>

        {/* Operator Controls */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-truckcorp-orange-100 rounded-lg">
              <Gauge className="w-6 h-6 text-truckcorp-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-truckcorp-black">Operator Controls (ergonomics & safety)</h3>
          </div>

          <div className="space-y-6 text-snow-700 leading-relaxed">
            <div>
              <h4 className="font-bold text-truckcorp-black mb-3">Glove-friendly layout.</h4>
              <p>
                All primary functions within natural reach; tactile buttons/joysticks you can operate without looking down.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-truckcorp-black mb-3">Status indicators.</h4>
              <p>
                Clear cues for <strong className="text-truckcorp-black">wing/tow position</strong>, plow float, spreader state, 
                lights, and fault conditions.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-truckcorp-black mb-3">Safety interlocks.</h4>
              <p>
                Dead-man triggers and lockouts to prevent accidental actuation when the cab gets jostled.
              </p>
            </div>
          </div>
        </div>

        {/* Ground-Speed Spreader & Pre-wet */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-truckcorp-orange-100 rounded-lg">
              <Target className="w-6 h-6 text-truckcorp-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-truckcorp-black">Ground-Speed Spreader & Pre-wet</h3>
          </div>

          <div className="space-y-6 text-snow-700 leading-relaxed">
            <div>
              <p>
                <strong className="text-truckcorp-black">Closed-loop, ground-speed control</strong> to hold target <strong className="text-truckcorp-black">lbs/lane-mile</strong> as 
                speed changes; avoids over/under-application.
              </p>
            </div>

            <div>
              <p>
                Integrated <strong className="text-truckcorp-black">pre-wet</strong> (brine on granular) and liquid circuits with operator presets 
                (e.g., light/normal/ice). "Blast" and "pause" functions for spot treatment.
              </p>
            </div>

            <div>
              <p>
                <strong className="text-truckcorp-black">Easy calibration</strong> workflow so operators can set rates by material and verify 
                output quickly.
              </p>
            </div>
          </div>
        </div>

        {/* Olympus Integrated Controls */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-truckcorp-orange-50 to-ice-50 p-8 rounded-lg border border-truckcorp-orange-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-truckcorp-orange-500 rounded-lg">
                <Monitor className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-truckcorp-black">Olympus Integrated Controls (TruckCorp)</h3>
            </div>

            <div className="space-y-6 text-snow-700 leading-relaxed">
              <div>
                <h4 className="font-bold text-truckcorp-black mb-3">Unified interface:</h4>
                <p>
                  <strong className="text-truckcorp-black">6-button joystick + 12″ touch screen</strong> consolidates 
                  plow/wing/underbody/spreader, dump, and lighting into one console — less reaching, less distraction.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-truckcorp-black mb-3">Fast multi-functioning:</h4>
                <p>
                  Seamlessly raise/angle the head plow while swinging a wing and running the spreader.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-truckcorp-black mb-3">Diagnostics & visibility:</h4>
                <p>
                  Live system data (pressures, temps, filter status), on-screen fault codes, and guided troubleshooting reduce downtime.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-truckcorp-black mb-3">Telemetry & proof-of-service:</h4>
                <p>
                  Optional cloud logging (location/status snapshots) and alerting to supervisors for proactive maintenance.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-truckcorp-black mb-3">Built to last:</h4>
                <p>
                  Rugged valve block with manual overrides, weather-sealed electronics, and corrosion-resistant plumbing minimize failures in salt and slush.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-truckcorp-black mb-3">Fleet fit:</h4>
                <p>
                  Supports common fleet sensors (plow up/down, spinner feedback) and integrates with ground-speed sources (transmission/GPS). 
                  Profiles let you standardize settings across trucks.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Learn More */}
        <div className="bg-snow-100 p-6 rounded-lg">
          <div className="flex items-center justify-center">
            <a
              href="https://truckcorpllc.com/products/snow-ice-control/central-hydraulic-systems/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-truckcorp-orange-600 hover:text-truckcorp-orange-700 font-medium transition-colors duration-200"
            >
              <span>Learn more: TruckCorp Central Hydraulic Systems</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default HydraulicsSection;