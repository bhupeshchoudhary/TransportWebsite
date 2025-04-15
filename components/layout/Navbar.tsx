"use client"
// src/components/Navbar.tsx

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { 
  Menu, 
  X, 
  Phone, 
  ChevronDown,
  Truck,
  Package,
  Home,
  Building2,
  Globe,
  MapPin,
} from 'lucide-react';

interface NavItem {
  title: string;
  href: string;
  description?: string;
  icon?: React.ElementType;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  {
    title: 'Services',
    href: '/services',
    children: [
      {
        title: 'Residential Moving',
        href: '/services/residential',
        description: 'Complete home relocation services',
        icon: Home,
      },
      {
        title: 'Commercial Moving',
        href: '/services/commercial',
        description: 'Office and business relocation',
        icon: Building2,
      },
      {
        title: 'Packing & Unpacking',
        href: '/services/packing',
        description: 'Professional packing services',
        icon: Package,
      },
      {
        title: 'Vehicle Transportation',
        href: '/services/vehicle',
        description: 'Safe vehicle transportation',
        icon: Truck,
      },
      {
        title: 'International Moving',
        href: '/services/international',
        description: 'Global relocation services',
        icon: Globe,
      },
    ],
  },
  {
    title: 'About',
    href: '',
  },
  {
    title: 'Service Areas',
    href: '',
    icon: MapPin,
  },
  {
    title: 'Contact',
    href: '',
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-blue-600">
              Shivam Transport
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.children ? (
                      <>
                        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {item.children.map((child) => (
                              <li key={child.title}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={child.href}
                                    className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-100"
                                  >
                                    {child.icon && <child.icon className="w-5 h-5 text-blue-600" />}
                                    <div>
                                      <div className="font-medium">{child.title}</div>
                                      {child.description && (
                                        <p className="text-sm text-gray-500">{child.description}</p>
                                      )}
                                    </div>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link href={item.href} className="px-4 py-2 hover:text-blue-600">
                        {item.title}
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="hidden md:flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                +91 98765 43210
              </Button>
              <Button>Get Free Quote</Button>
            </div>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <div key={item.title}>
                      {item.children ? (
                        <div className="space-y-2">
                          <div className="font-medium">{item.title}</div>
                          <div className="pl-4 space-y-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.title}
                                href={child.href}
                                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100"
                              >
                                {child.icon && <child.icon className="w-5 h-5 text-blue-600" />}
                                <span>{child.title}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="block p-2 hover:text-blue-600"
                        >
                          {item.title}
                        </Link>
                      )}
                    </div>
                  ))}
                  <div className="pt-4 space-y-4">
                    <Button className="w-full" variant="outline">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Us
                    </Button>
                    <Button className="w-full">Get Free Quote</Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;