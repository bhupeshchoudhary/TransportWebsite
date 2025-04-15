"use client"

// src/components/sections/Contact.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MessageSquare,
} from 'lucide-react';

interface ContactInfo {
  icon: React.ElementType;
  title: string;
  details: string[];
  color: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['+91 98765 43210', '+91 98765 43211'],
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@shivamtransport.com', 'support@shivamtransport.com'],
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: MapPin,
    title: 'Address',
    details: ['123 Business Hub,', 'Andheri East, Mumbai - 400069'],
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: ['Monday - Saturday:', '9:00 AM - 7:00 PM'],
    color: 'bg-orange-100 text-orange-600',
  },
];

const socialLinks = [
  { icon: Facebook, url: '#', label: 'Facebook' },
  { icon: Twitter, url: '#', label: 'Twitter' },
  { icon: Instagram, url: '#', label: 'Instagram' },
  { icon: Linkedin, url: '#', label: 'LinkedIn' },
];

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
  };

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
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our services? Contact us today and our team will be happy to assist you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Full Name
                      </label>
                      <Input placeholder="John Doe" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Phone Number
                      </label>
                      <Input type="tel" placeholder="+91 98765 43210" required />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Email Address
                    </label>
                    <Input type="email" placeholder="john@example.com" required />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Subject
                    </label>
                    <Input placeholder="How can we help you?" required />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Message
                    </label>
                    <Textarea
                      placeholder="Write your message here..."
                      className="min-h-[150px]"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 rounded-lg ${info.color} flex items-center justify-center mb-4`}>
                        <info.icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2">{info.title}</h4>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-600">{detail}</p>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <Card>
              <CardContent className="p-6">
                <div className="aspect-video w-full bg-gray-200 rounded-lg mb-6">
                  {/* Add your map component here */}
                  <div className="h-full flex items-center justify-center text-gray-500">
                    Interactive Map Coming Soon
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <div className="bg-white rounded-lg p-6 shadow">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Live Chat Button */}
            <Button className="w-full" variant="outline">
              <MessageSquare className="w-4 h-4 mr-2" />
              Start Live Chat
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;