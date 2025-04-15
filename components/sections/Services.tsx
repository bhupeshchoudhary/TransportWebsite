"use client"

// src/components/sections/Services.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Home,
  Building2,
  PackageCheck,
  Truck,
  Car,
  Globe,
  LayoutGrid,
  Clock,
} from 'lucide-react';

// Define the Service interface
interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: Home,
    title: 'Residential Moving',
    description: 'Complete home relocation services with care and precision',
    features: [
      'Careful handling of belongings',
      'Professional packing services',
      'Furniture disassembly/assembly',
      'Door-to-door delivery'
    ]
  },
  {
    icon: Building2,
    title: 'Commercial Moving',
    description: 'Efficient office and business relocation solutions',
    features: [
      'Minimal business disruption',
      'IT equipment handling',
      'Secure document transport',
      'Weekend moving options'
    ]
  },
  {
    icon: PackageCheck,
    title: 'Packing & Unpacking',
    description: 'Professional packing services using quality materials',
    features: [
      'High-quality packing materials',
      'Systematic labeling',
      'Fragile item protection',
      'Unpacking assistance'
    ]
  },
  {
    icon: Truck,
    title: 'Storage Solutions',
    description: 'Secure storage facilities for short and long term needs',
    features: [
      '24/7 surveillance',
      'Climate-controlled units',
      'Flexible duration options',
      'Easy access'
    ]
  },
  {
    icon: Car,
    title: 'Vehicle Transportation',
    description: 'Safe and secure vehicle transportation services',
    features: [
      'Enclosed carriers available',
      'GPS tracking',
      'Insurance coverage',
      'Door-to-door service'
    ]
  },
  {
    icon: Globe,
    title: 'International Moving',
    description: 'Comprehensive international relocation services',
    features: [
      'Custom clearance assistance',
      'Documentation support',
      'Global network',
      'Container shipping'
    ]
  }
];

const Services = () => {
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
            Our Comprehensive Moving Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of professional moving services tailored to meet
            your specific needs and requirements.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <LayoutGrid className="w-4 h-4 mr-2 text-blue-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant="outline">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <div className="bg-blue-600 text-white rounded-xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              Need a Custom Moving Solution?
            </h3>
            <p className="mb-6">
              Contact us today to discuss your specific requirements
            </p>
            <div className="flex justify-center space-x-4">
              <Button variant="secondary" size="lg">
                <Clock className="w-4 h-4 mr-2" />
                Get a Quote
              </Button>
              <Button variant="outline" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Contact Us
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;