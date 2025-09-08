import React, { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { Layout } from "../Layout";
import { cn } from "../../lib/utils";

// Lazy load components for code splitting
const NavigationCards = React.lazy(() => import("./NavigationCards"));
const ContentDisplay = React.lazy(() => import("./ContentDisplay"));

interface Category {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: keyof typeof import("./NavigationCards").iconMap;
  file: string;
}

interface KnowledgebaseContent {
  id: string;
  title: string;
  description: string;
  sections: any[];
}

interface CategoriesData {
  categories: Category[];
}

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-truckcorp-orange-500"></div>
    </div>
  );
}

export function Knowledgebase() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('plow-types'); // Default to plow-types
  const [content, setContent] = useState<KnowledgebaseContent | null>(null);
  const [loading, setLoading] = useState(false);

  // Load categories index with dynamic import for code splitting
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const categoriesModule = await import("../../data/kb-index.json");
        const data = categoriesModule.default as CategoriesData;
        setCategories(data.categories);
      } catch (err) {
        console.error('Failed to load categories:', err);
      }
    };

    loadCategories();
  }, []);

  // Load content when category is selected with dynamic imports
  useEffect(() => {
    const loadContent = async (categoryId: string) => {
      if (!categories.length) return;
      
      setLoading(true);
      const category = categories.find(cat => cat.id === categoryId);
      
      if (category) {
        try {
          // Dynamic import for JSON files to enable code splitting
          let contentModule;
          switch (category.file) {
            case 'kb-plow-types.json':
              contentModule = await import(`../../data/kb-plow-types.json`);
              break;
            case 'kb-blades-edges.json':
              contentModule = await import(`../../data/kb-blades-edges.json`);
              break;
            case 'kb-hydraulics-controls.json':
              contentModule = await import(`../../data/kb-hydraulics-controls.json`);
              break;
            case 'kb-truck-setup.json':
              contentModule = await import(`../../data/kb-truck-setup.json`);
              break;
            case 'kb-control-strategies.json':
              contentModule = await import(`../../data/kb-control-strategies.json`);
              break;
            case 'kb-maintenance-safety.json':
              contentModule = await import(`../../data/kb-maintenance-safety.json`);
              break;
            default:
              throw new Error(`Unknown content file: ${category.file}`);
          }
          const data = contentModule.default as KnowledgebaseContent;
          setContent(data);
        } catch (err) {
          console.error('Failed to load content:', err);
        }
      }
      
      setLoading(false);
    };

    if (activeCategory) {
      loadContent(activeCategory);
    }
  }, [activeCategory, categories]);

  // Load default content when categories are first loaded
  useEffect(() => {
    if (categories.length && !content && !loading) {
      // Auto-load plow-types content when categories load
      const defaultCategory = categories.find(cat => cat.id === 'plow-types');
      if (defaultCategory) {
        setActiveCategory('plow-types');
      }
    }
  }, [categories, content, loading]);

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Back to Homepage Button */}
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onClick={() => (window as any).navigateTo('home')}
          className={cn(
            "mb-8 flex items-center space-x-2",
            "text-truckcorp-orange-500 hover:text-truckcorp-orange-600",
            "transition-colors duration-200"
          )}
        >
          <Home className="w-5 h-5" />
          <span className="font-medium">Back to Homepage</span>
        </motion.button>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black text-truckcorp-black uppercase mb-4">
            Snow & Ice Equipment
            <br />
            <span className="text-truckcorp-orange-500">Knowledgebase</span>
          </h1>
          <p className="text-xl text-snow-700 max-w-3xl mx-auto">
            Comprehensive guidance for municipal and commercial winter road maintenance operations.
            Select a category to explore detailed information and best practices.
          </p>
        </div>

        {/* Navigation Cards */}
        <Suspense fallback={<LoadingSpinner />}>
          <NavigationCards
            categories={categories}
            activeCategory={activeCategory}
            onCategoryClick={handleCategoryClick}
          />
        </Suspense>

        {/* Content Display */}
        <Suspense fallback={<LoadingSpinner />}>
          <ContentDisplay
            content={content}
            loading={loading}
          />
        </Suspense>

        {/* Footer Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-snow-100 p-6 rounded-lg">
            <p className="text-snow-700 mb-4">
              <strong>Explore TruckCorp Snow & Ice Solutions:</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://truckcorpllc.com/products/snow-ice-control/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-truckcorp-orange-500 hover:text-truckcorp-orange-600 font-medium"
              >
                Complete Snow & Ice Control Overview
              </a>
              <a 
                href="https://truckcorpllc.com/products/snow-ice-control/central-hydraulic-systems/"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-truckcorp-orange-500 hover:text-truckcorp-orange-600 font-medium"
              >
                Central Hydraulics & Olympus Controls
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Layout>
  );
}

export default Knowledgebase;