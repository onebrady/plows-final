import React from "react";
import { motion } from "framer-motion";
import {
  Snowflake,
  Wrench, 
  Cog,
  Truck,
  Target,
  Shield,
} from "lucide-react";
import { cn } from "../../lib/utils";

// Icon mapping
export const iconMap = {
  snowflake: Snowflake,
  wrench: Wrench, 
  cog: Cog,
  truck: Truck,
  target: Target,
  shield: Shield,
};

export type IconKey = keyof typeof iconMap;

interface Category {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: IconKey;
  file: string;
}

interface NavigationCardsProps {
  categories: Category[];
  activeCategory: string | null;
  onCategoryClick: (categoryId: string) => void;
}

export function NavigationCards({ categories, activeCategory, onCategoryClick }: NavigationCardsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 mb-12">
      {categories.map((category, index) => {
        const IconComponent = iconMap[category.icon];
        const isActive = activeCategory === category.id;
        
        return (
          <motion.button
            key={category.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            whileHover={!isActive ? { 
              y: -8, 
              scale: 1.02,
              transition: { duration: 0.2 } 
            } : {}}
            whileTap={{ scale: 0.98 }}
            onClick={() => onCategoryClick(category.id)}
            className={cn(
              "p-4 rounded-lg shadow-lg transition-all duration-300",
              "text-center group cursor-pointer",
              isActive ? [
                // Active state
                "bg-truckcorp-orange-500 border-truckcorp-orange-500",
                "shadow-xl transform translate-y-[-4px]"
              ] : [
                // Default state
                "bg-snow-50 hover:bg-snow-100 border border-snow-200",
                "hover:shadow-xl hover:border-truckcorp-orange-300"
              ]
            )}
          >
            <div className="flex flex-col items-center space-y-3">
              <div className={cn(
                "p-3 rounded-lg transition-colors duration-300",
                isActive ? [
                  // Active icon background
                  "bg-white"
                ] : [
                  // Default icon background
                  "bg-truckcorp-orange-100",
                  "group-hover:bg-truckcorp-orange-500"
                ]
              )}>
                <IconComponent className={cn(
                  "w-8 h-8 transition-colors duration-300",
                  isActive ? [
                    // Active icon color
                    "text-truckcorp-orange-500"
                  ] : [
                    // Default icon color
                    "text-truckcorp-orange-500",
                    "group-hover:text-white"
                  ]
                )} />
              </div>
              <h3 className={cn(
                "font-black text-sm uppercase leading-tight transition-colors duration-300",
                isActive ? [
                  // Active title color
                  "text-white"
                ] : [
                  // Default title color
                  "text-truckcorp-black"
                ]
              )}>
                {category.shortTitle}
              </h3>
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}

export default NavigationCards;