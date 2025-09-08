import React from "react";
import { motion } from "framer-motion";
import { Info } from "lucide-react";

interface IntroSectionProps {
  content: string;
  index: number;
}

export function IntroSection({ content, index }: IntroSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.6 }}
    >
      <div className="bg-ice-50 p-6 rounded-lg border-l-4 border-truckcorp-orange-500">
        <div className="flex items-start space-x-3">
          <Info className="w-5 h-5 text-truckcorp-orange-500 mt-1 flex-shrink-0" />
          <p className="text-snow-800 leading-relaxed">{content}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default IntroSection;