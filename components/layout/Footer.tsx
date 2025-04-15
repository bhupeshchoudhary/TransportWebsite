
"use client" 
// src/components/Footer.tsx

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  CheckCircle2,
  Truck,
  Shield
} from 'lucide-react';

interface FooterLink {
  title: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: 'Our Services',
    links: [
      { title: 'Residential Moving', href: '/services/residential' },
      { title: 'Commercial Moving', href: '/services/commercial' },
      { title: 'Packing & Unpacking', href: '/services/packing' },
      { title: 'Storage Solutions', href: '/services/storage' },
      { title: 'Vehicle Transportation', href: '/services/vehicle' },
      { title: 'International Moving', href: '/services/international' },
    ],
  },
  {
    title: 'Quick Links',
    links: [
      { title: 'About Us', href: '/about' },
      { title: 'Service Areas', href: '/service-areas' },
      { title: 'Get a Quote', href: '/quote' },
      { title: 'FAQs', href: '/faqs' },
      { title: 'Blog', href: '/blog' },
      { title: 'Contact Us', href: '/contact' },
    ],
  },
  {
    title: 'Support',
    links: [
      { title: 'Customer Support', href: '/support' },
      { title: 'Track Your Move', href: '/track' },
      { title: 'Terms & Conditions', href: '/terms' },
      { title: 'Privacy Policy', href: '/privacy' },
      { title: 'Refund Policy', href: '/refund' },
      { title: 'Documentation', href: '/docs' },
    ],
  },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your newsletter subscription logic here
  };

  return (
    <footer className="bg-gray-900 text-gray-200">
      {/* Top Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Newsletter */}
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Subscribe to Our Newsletter
              </h3>
              <p className="mb-6 text-gray-400">
                Get the latest updates, offers, and moving tips delivered to your inbox.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700 text-white"
                />
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                  Subscribe
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: CheckCircle2, text: 'Licensed & Insured' },
                { icon: Truck, text: 'Pan India Service' },
                { icon: Clock, text: '24/7 Support' },
                { icon: Shield, text: 'Safe & Secure' },
              ].map((badge, index) => (
                <div key={index} className="flex items-center gap-2">
                  <badge.icon className="w-5 h-5 text-blue-400" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold text-white">
                Shivam Transport
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Your trusted partner for safe and reliable moving services across India.
              Professional packing, moving, and transportation solutions for homes and businesses.
            </p>
            <div className="space-y-3">
              {[
                { icon: MapPin, text: '123 Business Hub, Mumbai - 400069' },
                { icon: Phone, text: '+91 98765 43210' },
                { icon: Mail, text: 'info@shivamtransport.com' },
                { icon: Clock, text: 'Mon-Sat: 9:00 AM - 7:00 PM' },
              ].map((contact, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-400">
                  <contact.icon className="w-5 h-5 text-blue-400" />
                  <span>{contact.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Shivam Transport. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Payment Methods */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">Payment Methods:</span>
              {/* Add payment method icons here */}
              <div className="flex gap-2">
                {['visa', 'mastercard', 'upi'].map((method) => (
                  <div
                    key={method}
                    className="w-8 h-5 bg-gray-800 rounded"
                    title={method}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;