
"use client"
// src/components/Header.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import {
  Truck,
  Package,
  Shield,
  Clock,
  MapPin,
  Phone,
  Calendar,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

const Header = () => {
  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <header className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <img
          src="/images/moving-bg.jpg" // Add your background image
          alt="Moving Services"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6"
          >
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Your Trusted Partner for
              <span className="text-blue-400"> Safe Relocation</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl text-gray-200 max-w-xl">
              Professional packing and moving services across India. 
              Making your relocation smooth and stress-free.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 py-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 * index }}
                  className="flex items-center space-x-2"
                >
                  <feature.icon className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-200">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Free Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Phone className="mr-2 w-4 h-4" />
                Call Us Now
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8">
              <div className="flex flex-wrap items-center gap-6">
                {trustIndicators.map((indicator, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + (0.1 * index) }}
                    className="flex items-center space-x-2"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    <span className="text-gray-200">{indicator}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Quote Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="backdrop-blur-lg bg-white/90">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6">Get a Free Quote</h3>
                <form onSubmit={handleQuoteSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Moving From
                      </label>
                      <Input placeholder="Enter city" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Moving To
                      </label>
                      <Input placeholder="Enter city" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Moving Date
                    </label>
                    <Input type="date" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Name
                      </label>
                      <Input placeholder="Your name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Phone
                      </label>
                      <Input placeholder="Your number" type="tel" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Moving Type
                    </label>
                    <select className="w-full rounded-md border border-gray-300 p-2">
                      <option>Residential Moving</option>
                      <option>Commercial Moving</option>
                      <option>Vehicle Transportation</option>
                      <option>International Moving</option>
                    </select>
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Get Free Quote
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    We'll get back to you within 24 hours
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center"
      >
        <div className="animate-bounce">
          <div className="w-1 h-8 mx-auto bg-white/30 rounded-full" />
        </div>
        <span className="text-sm mt-2 block">Scroll Down</span>
      </motion.div>
    </header>
  );
};

// Data
const features = [
  { icon: Truck, text: 'Pan India Services' },
  { icon: Package, text: 'Safe Packing' },
  { icon: Shield, text: 'Full Insurance' },
  { icon: Clock, text: '24/7 Support' },
];

const trustIndicators = [
  '15+ Years Experience',
  '10,000+ Happy Customers',
  'ISO Certified',
  '100% Satisfaction',
];

export default Header;