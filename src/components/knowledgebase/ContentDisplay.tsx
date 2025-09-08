import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion";

// Lazy load content section components for code splitting
const IntroSection = lazy(() => import("./content-sections/IntroSection"));
const ComparisonTableSection = lazy(() => import("./content-sections/ComparisonTableSection"));
const CategoryBreakdownSection = lazy(() => import("./content-sections/CategoryBreakdownSection"));
const MaterialsGuideSection = lazy(() => import("./content-sections/MaterialsGuideSection"));
const ApplicationPracticesSection = lazy(() => import("./content-sections/ApplicationPracticesSection"));
const HydraulicsSection = lazy(() => import("./content-sections/HydraulicsSection"));
const TruckSetupSection = lazy(() => import("./content-sections/TruckSetupSection"));
const MaintenanceSection = lazy(() => import("./content-sections/MaintenanceSection"));
const PlowTypesSection = lazy(() => import("./content-sections/PlowTypesSection"));

interface ContentSection {
  type: string;
  title?: string;
  content?: string;
  description?: string;
  items?: any[];
  scenarios?: any[];
  points?: any[];
  [key: string]: any;
}

interface KnowledgebaseContent {
  id: string;
  title: string;
  description: string;
  sections: ContentSection[];
}

interface ContentDisplayProps {
  content: KnowledgebaseContent | null;
  loading: boolean;
}

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-truckcorp-orange-500"></div>
    </div>
  );
}

function ContentSectionRenderer({ section, index }: { section: ContentSection; index: number }) {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      {/* Intro sections */}
      {section.type === 'intro' && section.content && (
        <IntroSection content={section.content} index={index} />
      )}

      {/* PlowTypesSection - dedicated component for plow types content */}
      {section.type === 'plow-overview' && section.title && (
        <PlowTypesSection 
          title={section.title}
          description={section.description}
          index={index}
        />
      )}


      {/* HydraulicsSection - dedicated component for hydraulics content */}
      {(
        section.type === 'central-hydraulics' || 
        section.type === 'operator-controls' ||
        section.type === 'ground-speed-control' ||
        section.type === 'olympus-system' ||
        section.type === 'best-practices'
      ) && section.title && (
        <HydraulicsSection 
          title={section.title}
          description={section.description}
          index={index}
        />
      )}

      {/* TruckSetupSection - dedicated component for truck setup content */}
      {(
        section.type === 'weight-ratings' ||
        section.type === 'push-frames-mounts' ||
        section.type === 'wing-systems' ||
        section.type === 'underbody-scrapers' ||
        section.type === 'spreaders' ||
        section.type === 'lighting-visibility' ||
        section.type === 'comms-telematics' ||
        section.type === 'accessories' ||
        section.type === 'procurement-checklist'
      ) && section.title && (
        <TruckSetupSection 
          title={section.title}
          description={section.description}
          index={index}
        />
      )}

      {/* MaintenanceSection - dedicated component for maintenance content */}
      {section.type === 'maintenance-overview' && section.title && (
        <MaintenanceSection 
          title={section.title}
          description={section.description}
          index={index}
        />
      )}


      {/* MaterialsGuideSection - specifically for materials comparison */}
      {section.type === 'materials-guide' && section.title && (
        <MaterialsGuideSection
          title={section.title}
          overview={section.overview}
          materials={section.materials}
          index={index}
        />
      )}

      {/* ComparisonTableSection - for strategies and other comparisons */}
      {(
        section.type === 'cutting-edge-comparison' ||
        section.type === 'strategy-comparison' ||
        section.type === 'spreaders'
      ) && section.title && (
        <ComparisonTableSection
          title={section.title}
          description={section.description || section.selection}
          overview={section.overview}
          materials={section.materials || section.edgeMaterials}
          strategies={section.strategies || section.options}
          index={index}
        />
      )}

      {/* ApplicationPracticesSection - specifically for application best practices */}
      {section.type === 'application-practices' && section.title && (
        <ApplicationPracticesSection
          title={section.title}
          overview={section.overview}
          practices={section.practices}
          index={index}
        />
      )}


      {/* CategoryBreakdownSection - for categorized information and system breakdowns */}
      {(
        section.type === 'environmental-considerations' ||
        section.type === 'decision-matrix' ||
        section.type === 'operator-safety' ||
        section.type === 'extreme-conditions' ||
        section.type === 'drift-control' ||
        section.type === 'emergency-procedures' ||
        section.type === 'training-requirements' ||
        section.type === 'best-practices'
      ) && section.title && (
        <CategoryBreakdownSection
          title={section.title}
          description={section.description}
          overview={section.overview}
          categories={section.categories || section.practices || section.procedures || section.requirements || section.systems}
          systems={section.systems}
          components={section.components}
          options={section.options}
          accessories={section.accessories}
          index={index}
        />
      )}

      {/* Generic section fallback for any remaining types */}
      {![
        'intro', 'plow-overview', 'central-hydraulics', 'operator-controls', 'ground-speed-control', 'olympus-system', 'best-practices',
        'weight-ratings', 'push-frames-mounts', 'wing-systems', 'underbody-scrapers', 'spreaders', 
        'lighting-visibility', 'comms-telematics', 'accessories', 'procurement-checklist',
        'cutting-edge-comparison', 'strategy-comparison', 'materials-guide', 'daily-routines', 
        'calibration-storage', 'application-practices', 'maintenance-overview',
        'environmental-considerations', 'decision-matrix',
        'operator-safety', 'extreme-conditions', 'drift-control', 'emergency-procedures',
        'training-requirements', 'plow-types', 'quick-selector', 'considerations'
      ].includes(section.type) && section.title && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index, duration: 0.6 }}
        >
          <h2 className="text-2xl font-black text-truckcorp-black uppercase mb-6">
            {section.title}
          </h2>
          {section.content && (
            <div className="bg-white p-8 rounded-xl shadow-md border border-snow-100">
              <p className="text-snow-700 leading-relaxed">{section.content}</p>
            </div>
          )}
        </motion.div>
      )}
    </Suspense>
  );
}

export function ContentDisplay({ content, loading }: ContentDisplayProps) {
  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-8"
      >
        <LoadingSpinner />
        <p className="text-center text-snow-600 mt-4">Loading content...</p>
      </motion.div>
    );
  }

  if (!content) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-8 text-center"
      >
        <p className="text-snow-600">Select a category to view content</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      key={content.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-8"
    >
      {/* Content Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-black text-truckcorp-black uppercase mb-4">
          {content.title}
        </h1>
        <p className="text-lg text-snow-700">
          {content.description}
        </p>
      </motion.div>

      {/* Content Sections */}
      <div className="space-y-8">
        {content.sections.map((section, index) => (
          <ContentSectionRenderer 
            key={`${content.id}-${index}`} 
            section={section} 
            index={index} 
          />
        ))}
      </div>
    </motion.div>
  );
}

export default ContentDisplay;