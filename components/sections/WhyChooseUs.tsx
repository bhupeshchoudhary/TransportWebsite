"use client"
// src/components/sections/WhyChooseUs.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import {
  Shield,
  Clock,
  Trophy,
  Users,
  Truck,
  HeartHandshake,
  BadgeCheck,
  PhoneCall,
} from 'lucide-react';

interface Statistic {
  value: string;
  label: string;
}

interface Reason {
  icon: React.ElementType;
  title: string;
  description: string;
}

const statistics: Statistic[] = [
  { value: '15+', label: 'Years Experience' },
  { value: '10K+', label: 'Successful Moves' },
  { value: '98%', label: 'Satisfied Clients' },
  { value: '50+', label: 'Cities Covered' },
];

const reasons: Reason[] = [
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Fully licensed moving company with comprehensive insurance coverage for your peace of mind.'
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description: 'We strictly adhere to scheduled timelines ensuring punctual pickup and delivery.'
  },
  {
    icon: Trophy,
    title: 'Expert Team',
    description: 'Highly trained and experienced moving professionals who handle your belongings with care.'
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: '24/7 customer support team to assist you throughout your moving journey.'
  },
  {
    icon: Truck,
    title: 'Modern Fleet',
    description: 'Well-maintained, modern vehicles equipped with GPS tracking and safety features.'
  },
  {
    icon: HeartHandshake,
    title: 'Transparent Pricing',
    description: 'No hidden charges. Get detailed quotes with clear breakdown of all services.'
  },
  {
    icon: BadgeCheck,
    title: 'Quality Assurance',
    description: 'Strict quality control measures to ensure the highest standards of service.'
  },
  {
    icon: PhoneCall,
    title: '24/7 Availability',
    description: 'Round-the-clock service availability for emergency and planned moves.'
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Shivam Transport
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            With years of experience and dedication to excellence, we provide 
            unmatched moving services that you can trust.
          </p>
        </motion.div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <reason.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 text-center bg-gray-50 rounded-xl p-8"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">
              Trusted by Thousands of Happy Customers
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Add your trust badges/certifications here */}
              {[1, 2, 3, 4].map((badge) => (
                <div
                  key={badge}
                  className="bg-white p-4 rounded-lg shadow-sm"
                >
                  <div className="h-16 flex items-center justify-center">
                    {/* Replace with actual badge/certification images */}
                    <div className="w-full h-8 bg-gray-200 rounded animate-pulse" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;