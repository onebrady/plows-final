import React from "react";
import { motion } from "framer-motion";
import {
  Snowflake,
  Truck,
  Shield,
  BookOpen,
  ArrowRight,
  Target,
  CheckCircle,
  Wrench,
  Settings,
  ShieldCheck,
  Clock,
  MapPin,
} from "lucide-react";
import { Layout } from "./Layout";
import { cn } from "../lib/utils";
import tripEdgeImage from "../assets/images/trip-edgex.jpg";
import fullTripImage from "../assets/images/full-trip.jpg";

export function Homepage() {
  return (
    <Layout>
      {/* Add top padding */}
      <div className="pt-8">
        {/* Header Section - 2 Column Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8"
        >
          {/* Left column - Title and subtitle */}
          <div>
            <h1 className="text-6xl font-black text-truckcorp-black uppercase">
              <span className="text-truckcorp-orange-500">Snow</span> Plows
            </h1>
            <p className="mt-4 text-xl text-snow-700">
              Built to endure the toughest winter extremes
            </p>
          </div>
          
          {/* Right column - Contact button */}
          <div className="flex justify-end">
            <motion.a
              href="https://truckcorpllc.com/contact/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "bg-truckcorp-orange-500 hover:bg-truckcorp-orange-600",
                "text-white px-8 py-4 rounded-lg font-bold",
                "transition-colors duration-300 uppercase",
                "shadow-lg inline-flex items-center"
              )}
            >
              Contact Our Team
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.a>
          </div>
        </motion.div>

        {/* Trip Edge Feature Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 bg-gradient-to-br from-snow-50 via-white to-snow-100 py-16 -mx-4 px-4 relative overflow-hidden"
      >
        {/* Subtle background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-truckcorp-orange-500 rounded-full blur-3xl transform translate-x-48 -translate-y-48"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-ice-600 rounded-full blur-3xl transform -translate-x-32 translate-y-32"></div>
        </div>
        
        <div className="container-app relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative"
            >
              <div className="rounded-lg overflow-hidden shadow-industrial-lg">
                <img 
                  src={tripEdgeImage} 
                  alt="ARM Trip Edge Snowplow Blade" 
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Accent border */}
              <div className="absolute -top-3 -left-3 w-full h-full bg-truckcorp-orange-500 rounded-lg -z-10"></div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="inline-flex items-center bg-truckcorp-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold uppercase mb-6">
                <Wrench className="w-4 h-4 mr-2" />
                Featured Technology
              </div>

              <h2 className="text-4xl font-black text-truckcorp-black uppercase mb-4">
                <span className="text-truckcorp-orange-500">A.R.M</span> Trip
                Edge Plow
              </h2>

              <p className="text-lg text-snow-700 mb-8 leading-relaxed">
                Advanced snowplow blade designed to protect your equipment from
                damage while maintaining peak performance on challenging
                surfaces.
              </p>

              {/* Key Features */}
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: "Smart Protection",
                    desc: "Cutting edge pivots backward when hitting obstacles, protecting your plow and truck",
                  },
                  {
                    title: "Snow Retention",
                    desc: "Keeps the blade upright to continue pushing snow without losing your load",
                  },
                  {
                    title: "Superior Performance",
                    desc: "Ideal for roads with uneven surfaces, manholes, and hidden obstacles",
                  },
                  {
                    title: "System Longevity",
                    desc: "Reduces strain on hydraulic systems and mounting hardware",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckCircle className="w-5 h-5 text-truckcorp-orange-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-truckcorp-black">
                        {feature.title}
                      </h4>
                      <p className="text-snow-600 text-sm">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Benefits Badge */}
              <div className="bg-ice-600 text-white p-4 rounded-lg">
                <p className="text-sm font-medium">
                  <strong>Result:</strong> Cleaner scraping performance with
                  minimal equipment downtime and reduced maintenance costs.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

        {/* Knowledgebase CTA - Compact Card Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 mb-12 flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => (window as any).navigateTo('knowledgebase')}
            className={cn(
              "bg-white hover:bg-snow-50 border-2 border-truckcorp-orange-500 hover:border-truckcorp-orange-600",
              "text-truckcorp-orange-500 hover:text-truckcorp-orange-600 rounded-lg shadow-lg hover:shadow-xl",
              "transition-all duration-300 cursor-pointer group",
              "p-6 max-w-md flex items-center space-x-4"
            )}
          >
            <div className="flex-shrink-0 p-3 bg-truckcorp-orange-500 rounded-lg group-hover:bg-truckcorp-orange-600 transition-colors">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div className="text-left flex-1">
              <div className="font-black uppercase text-lg mb-1">
                Snow Plow Knowledgebase
              </div>
              <div className="text-sm text-snow-600">
                Expert guides & resources
              </div>
            </div>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </motion.div>

        {/* Full Trip Plow Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 py-16"
        >
          <div className="container-app">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center bg-ice-600 text-white px-4 py-2 rounded-full text-sm font-bold uppercase mb-4">
                <Settings className="w-4 h-4 mr-2" />
                Advanced Technology
              </div>
              <h2 className="text-4xl font-black text-truckcorp-black uppercase">
                <span className="text-ice-600">A.R.M</span> Full Trip Plow
              </h2>
              <p className="mt-4 text-lg text-snow-700 max-w-3xl mx-auto">
                Where the entire moldboard trips forward to absorb impact, providing maximum protection 
                for your equipment when encountering obstacles.
              </p>
            </motion.div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
              {/* Left Side - Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
              >
                {/* How It Works */}
                <div className="bg-ice-50 p-6 rounded-lg border-l-4 border-ice-600 mb-8">
                  <h3 className="text-xl font-bold text-truckcorp-black mb-3 flex items-center">
                    <Settings className="w-5 h-5 mr-2 text-ice-600" />
                    How It Works
                  </h3>
                  <p className="text-snow-700 text-base leading-relaxed">
                    The full trip system allows the entire moldboard to pivot forward when encountering 
                    obstructions like curbs, manholes, or frozen snowbanks. This tripping action cushions 
                    the impact, reducing force transferred to the truck and plow.
                  </p>
                </div>

                {/* Core Benefits */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-truckcorp-black mb-4">Core Benefits</h3>
                  
                  <div className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex-shrink-0 p-2 bg-green-100 rounded-lg">
                      <ShieldCheck className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-truckcorp-black mb-1">Ultimate Protection</h4>
                      <p className="text-snow-700 text-base">
                        Prevents damage to both plow and truck from sudden impacts with hidden obstacles.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex-shrink-0 p-2 bg-blue-100 rounded-lg">
                      <Clock className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-truckcorp-black mb-1">Reduced Downtime</h4>
                      <p className="text-snow-700 text-base">
                        Minimizes repair costs and operational delays from unexpected obstacle damage.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex-shrink-0 p-2 bg-purple-100 rounded-lg">
                      <MapPin className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-truckcorp-black mb-1">Versatility</h4>
                      <p className="text-snow-700 text-base">
                        Ideal for areas with various obstacles and uneven surfaces.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="relative"
              >
                <div className="rounded-lg overflow-hidden shadow-industrial-lg">
                  <img 
                    src={fullTripImage} 
                    alt="ARM Full Trip Snowplow" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                {/* Accent border */}
                <div className="absolute -top-3 -right-3 w-full h-full bg-ice-600 rounded-lg -z-10"></div>
              </motion.div>
            </div>

            {/* Trip Edge vs Full Trip Comparison */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.7 }}
              className="bg-snow-100 p-6 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-truckcorp-black mb-4">
                Trip Edge vs. Full Trip – The Differences
              </h3>
              
              <div className="mb-6">
                <p className="text-lg font-medium text-truckcorp-black mb-3">
                  "Trip happens. Well, at least it should happen."
                </p>
                <p className="text-snow-700 text-base leading-relaxed mb-4">
                  Let's face it, stuff jumps out at you in this business. Curbs, manhole covers, 
                  control joints... You name it, we hit it.
                </p>
                <p className="text-snow-700 text-base leading-relaxed">
                  To protect operators, machines and plows, you need a trip function. "Tripability" 
                  can be achieved in different ways, but it's usually done in one of two ways:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg border-2 border-ice-200">
                  <h4 className="font-bold text-ice-600 mb-2">Full Trip</h4>
                  <p className="text-snow-700 text-base">
                    The whole moldboard trips forward. Generally used with floating plows for maximum 
                    protection in areas with numerous obstacles.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg border-2 border-truckcorp-orange-200">
                  <h4 className="font-bold text-truckcorp-orange-500 mb-2">Trip Edge</h4>
                  <p className="text-snow-700 text-base">
                    Just the bottom cutting edge trips back. Generally used on full down-pressure plows 
                    for better snow retention.
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-warning-50 rounded-lg border-l-4 border-warning-500">
                <p className="text-warning-800 text-base">
                  <strong>Note:</strong> Operators often have a preference based on their specific routes 
                  and conditions. Consider your machine type and application when choosing between the two.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>


        {/* Product Recommendation CTA - Hidden for now */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-12 flex justify-center"
        >
          <div className="bg-snow-100 p-8 rounded-lg shadow-lg max-w-md w-full text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-ice-600 rounded-full mb-6"
            >
              <Target className="w-8 h-8 text-white" />
            </motion.div>

            <h3 className="text-xl font-black text-truckcorp-black uppercase mb-3">
              Need the right snowplow?
            </h3>

            <p className="text-snow-700 mb-6">
              Get personalized recommendations with our 3-minute equipment matcher
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "bg-truckcorp-black hover:bg-snow-800",
                "text-white px-8 py-3 rounded-lg font-bold",
                "transition-colors duration-300 uppercase text-sm",
                "shadow-lg"
              )}
            >
              Find My Match
            </motion.button>
          </div>
        </motion.div> */}
      </div>

    </Layout>
  );
}

export default Homepage;
