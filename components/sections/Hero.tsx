// src/components/sections/Hero.tsx
"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { 
  PhoneCall, 
  Truck, 
  Package, 
  MapPin 
} from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-grid-slate-200"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Your Trusted Partner in
              <span className="text-blue-600"> Moving Solutions</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-xl">
              Professional packing, moving, and transportation services across India. 
              Safe, reliable, and hassle-free relocation for homes and businesses.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 py-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index }}
                  className="flex items-center space-x-2"
                >
                  <feature.icon className="w-5 h-5 text-blue-600" />
                  <span className="text-sm text-gray-600">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex space-x-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Free Quote
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Quote Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-6 shadow-xl bg-white/80 backdrop-blur">
              <h3 className="text-2xl font-semibold mb-6">Get a Quick Quote</h3>
              <form className="space-y-4">
                <div>
                  <Input 
                    placeholder="Your Name" 
                    className="w-full"
                  />
                </div>
                <div>
                  <Input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input 
                    placeholder="Moving From" 
                    className="w-full"
                  />
                  <Input 
                    placeholder="Moving To" 
                    className="w-full"
                  />
                </div>
                <div>
                  <Input 
                    type="date" 
                    placeholder="Moving Date" 
                    className="w-full"
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Request Quote
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Floating Contact Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button 
          size="lg" 
          className="rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg"
        >
          <PhoneCall className="w-5 h-5 mr-2" />
          Call Now
        </Button>
      </motion.div>
    </section>
  );
};

// Features data
const features = [
  { icon: Truck, text: 'Pan India Services' },
  { icon: Package, text: 'Safe Packing' },
  { icon: MapPin, text: 'Real-time Tracking' },
  { icon: PhoneCall, text: '24/7 Support' },
];

export default Hero;