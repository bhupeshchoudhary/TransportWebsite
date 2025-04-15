"use client"

// src/components/sections/FAQ.tsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Phone, Mail, MessageSquare } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    id: '1',
    category: 'general',
    question: 'How far in advance should I book your moving services?',
    answer: 'We recommend booking at least 2-3 weeks in advance for local moves and 4-6 weeks for long-distance moves. However, we also accommodate last-minute moves based on availability.',
  },
  {
    id: '2',
    category: 'pricing',
    question: 'How do you calculate the moving costs?',
    answer: 'Our moving costs are calculated based on several factors including distance, volume of items, type of items, required services (packing, storage, etc.), and the time of year. We provide free detailed quotes after assessing your specific requirements.',
  },
  {
    id: '3',
    category: 'packing',
    question: 'Do you provide packing materials?',
    answer: 'Yes, we provide all necessary packing materials including boxes, bubble wrap, packing paper, tape, and specialized containers for delicate items. You can either purchase these materials from us or opt for our professional packing service.',
  },
  {
    id: '4',
    category: 'services',
    question: 'Do you handle international moves?',
    answer: 'Yes, we offer comprehensive international moving services including documentation, customs clearance, and door-to-door delivery. We have partnerships with reliable international shipping companies.',
  },
  // Add more FAQ items...
];

const categories = [
  { id: 'all', label: 'All Questions' },
  { id: 'general', label: 'General' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'packing', label: 'Packing' },
  { id: 'services', label: 'Services' },
];

const FAQ = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFAQs = faqData.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our moving services.
            Can't find what you're looking for? Feel free to contact us.
          </p>
        </motion.div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search questions..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mb-8">
          <Tabs
            defaultValue="all"
            value={selectedCategory}
            onValueChange={setSelectedCategory}
            className="w-full justify-center"
          >
            <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="w-full"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem value={faq.id}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 bg-white rounded-xl p-8 shadow-lg"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Still Have Questions?</h3>
            <p className="text-gray-600">
              Contact us through any of these channels for immediate assistance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Button
              variant="outline"
              className="h-auto py-6 flex flex-col items-center"
            >
              <Phone className="w-6 h-6 mb-2" />
              <span className="font-semibold">Call Us</span>
              <span className="text-sm text-gray-600">24/7 Support Available</span>
            </Button>

            <Button
              variant="outline"
              className="h-auto py-6 flex flex-col items-center"
            >
              <Mail className="w-6 h-6 mb-2" />
              <span className="font-semibold">Email Us</span>
              <span className="text-sm text-gray-600">Get Response in 24 hrs</span>
            </Button>

            <Button
              variant="outline"
              className="h-auto py-6 flex flex-col items-center"
            >
              <MessageSquare className="w-6 h-6 mb-2" />
              <span className="font-semibold">Live Chat</span>
              <span className="text-sm text-gray-600">Instant Response</span>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;