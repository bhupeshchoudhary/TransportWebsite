"use client"

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  MapPin,
  Building2,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  Search,
} from 'lucide-react';
import { Input } from '@/components/ui/input';

interface City {
  name: string;
  region: string;
  isMainBranch?: boolean;
}

interface Branch {
  city: string;
  address: string;
  phone: string;
  email: string;
  timing: string;
}

const serviceCities: City[] = [
  { name: 'Mumbai', region: 'West', isMainBranch: true },
  { name: 'Delhi', region: 'North', isMainBranch: true },
  { name: 'Bangalore', region: 'South', isMainBranch: true },
  { name: 'Kolkata', region: 'East', isMainBranch: true },
  { name: 'Pune', region: 'West' },
  { name: 'Hyderabad', region: 'South' },
  { name: 'Chennai', region: 'South' },
  { name: 'Ahmedabad', region: 'West' },
  { name: 'Jaipur', region: 'North' },
  { name: 'Lucknow', region: 'North' },
  { name: 'Chandigarh', region: 'North' },
  { name: 'Bhopal', region: 'Central' },
];

const branches: Branch[] = [
  {
    city: 'Mumbai',
    address: '123, Business Hub, Andheri East, Mumbai - 400069',
    phone: '+91 98765 43210',
    email: 'mumbai@shivamtransport.com',
    timing: 'Mon-Sat: 9:00 AM - 7:00 PM',
  },
  {
    city: 'Delhi',
    address: '456, Industrial Area, Nehru Place, Delhi - 110019',
    phone: '+91 98765 43211',
    email: 'delhi@shivamtransport.com',
    timing: 'Mon-Sat: 9:00 AM - 7:00 PM',
  },
];

const features = ['Door to Door Service', '24/7 Support', 'Real-time Tracking', 'Nationwide Network'];

const ServiceAreas = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedRegion, setSelectedRegion] = React.useState('All');

  // Using useMemo to create regions array
  const regions = useMemo(() => {
    const uniqueRegions = Array.from(new Set(serviceCities.map(city => city.region)));
    return ['All', ...uniqueRegions];
  }, []);

  // Filter cities based on search and region
  const filteredCities = useMemo(() => {
    return serviceCities.filter(city => {
      const matchesSearch = city.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRegion = selectedRegion === 'All' || city.region === selectedRegion;
      return matchesSearch && matchesRegion;
    });
  }, [searchTerm, selectedRegion]);

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
            Our Service Coverage Areas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive moving and packing services across major cities in India.
            Find your nearest Shivam Transport branch.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="max-w-xl mx-auto">
            <div className="flex gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search city..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <select
                className="border rounded-md px-4 py-2"
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
              >
                {regions.map(region => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Service Cities Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {filteredCities.map((city, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`hover:shadow-lg transition-shadow ${city.isMainBranch ? 'border-blue-500 border-2' : ''}`}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                      <h3 className="font-semibold">{city.name}</h3>
                    </div>
                    {city.isMainBranch && (
                      <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                        Main Branch
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mt-2">{city.region} Region</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Branches */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Our Main Branches</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {branches.map((branch, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-4 flex items-center">
                      <Building2 className="w-5 h-5 mr-2 text-blue-600" />
                      {branch.city} Branch
                    </h4>
                    <div className="space-y-3 text-gray-600">
                      <p className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {branch.address}
                      </p>
                      <p className="flex items-center">
                        <Phone className="w-4 h-4 mr-2" />
                        {branch.phone}
                      </p>
                      <p className="flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        {branch.email}
                      </p>
                      <p className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {branch.timing}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Coverage Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="bg-gray-100 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Pan India Coverage</h3>
            <div className="aspect-video bg-gray-200 rounded-lg mb-6">
              {/* Add your map component or image here */}
              <div className="h-full flex items-center justify-center text-gray-500">
                Interactive Map Coming Soon
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceAreas;