"use client"
// src/components/sections/HowItWorks.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  ClipboardList,
  CalendarCheck,
  PackageCheck,
  Truck,
  MapPin,
  ThumbsUp,
  PhoneCall,
} from 'lucide-react';

interface Step {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

const steps: Step[] = [
  {
    icon: ClipboardList,
    title: 'Request Quote',
    description: 'Fill out our simple form or call us to get a free moving quote.',
    color: 'bg-blue-500',
  },
  {
    icon: CalendarCheck,
    title: 'Schedule Survey',
    description: 'Our team visits your location for detailed assessment and planning.',
    color: 'bg-green-500',
  },
  {
    icon: PackageCheck,
    title: 'Packing Service',
    description: 'Professional packing of your belongings with quality materials.',
    color: 'bg-purple-500',
  },
  {
    icon: Truck,
    title: 'Loading & Moving',
    description: 'Careful loading and secure transportation of your items.',
    color: 'bg-orange-500',
  },
  {
    icon: MapPin,
    title: 'Transportation',
    description: 'Safe and timely transportation to your destination.',
    color: 'bg-red-500',
  },
  {
    icon: ThumbsUp,
    title: 'Delivery & Setup',
    description: 'Unloading, unpacking, and arrangement at your new location.',
    color: 'bg-teal-500',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gray-50">
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
            How We Make Your Move Easy
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our simple and efficient moving process ensures a smooth relocation experience.
            Here's how we work to make your move stress-free.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 ${step.color} rounded-lg flex items-center justify-center mb-4`}>
                  <step.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>

                {/* Connector Line (except for last item) */}
                {index !== steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-8 border-t-2 border-dashed border-gray-300 -translate-y-1/2" />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl p-8 shadow-xl"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Moving Journey?
            </h3>
            <p className="text-gray-600 mb-6">
              Get in touch with us today for a free consultation and quote.
              Our team is ready to assist you with your move.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <PhoneCall className="w-4 h-4 mr-2" />
                Call Now
              </Button>
              <Button size="lg" variant="outline">
                Get Free Quote
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Additional Information */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Free Consultation',
              description: 'Get expert advice on your moving needs',
            },
            {
              title: 'Custom Solutions',
              description: 'Tailored moving plans to fit your requirements',
            },
            {
              title: 'Regular Updates',
              description: 'Stay informed throughout the moving process',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;