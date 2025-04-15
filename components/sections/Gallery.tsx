
"use client"
// src/components/sections/Gallery.tsx

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Image as ImageIcon, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Play
} from 'lucide-react';

interface GalleryItem {
  id: number;
  type: 'image' | 'video';
  category: string;
  title: string;
  description: string;
  url: string;
  thumbnail: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    type: 'image',
    category: 'residential',
    title: 'Home Relocation',
    description: 'Complete house moving service in Mumbai',
    url: '/gallery/home-moving-1.jpg',
    thumbnail: '/gallery/home-moving-1-thumb.jpg',
  },
  {
    id: 2,
    type: 'image',
    category: 'commercial',
    title: 'Office Setup',
    description: 'Corporate office relocation project',
    url: '/gallery/office-moving-1.jpg',
    thumbnail: '/gallery/office-moving-1-thumb.jpg',
  },
  {
    id: 3,
    type: 'video',
    category: 'packing',
    title: 'Professional Packing',
    description: 'Our expert packing process',
    url: '/gallery/packing-process.mp4',
    thumbnail: '/gallery/packing-process-thumb.jpg',
  },
  // Add more gallery items...
];

const categories = [
  { id: 'all', label: 'All' },
  { id: 'residential', label: 'Residential' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'packing', label: 'Packing' },
  { id: 'transport', label: 'Transport' },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const filteredItems = galleryItems.filter(
    item => selectedCategory === 'all' || item.category === selectedCategory
  );

  const handleNext = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id);
    const nextItem = filteredItems[(currentIndex + 1) % filteredItems.length];
    setSelectedItem(nextItem);
  };

  const handlePrevious = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id);
    const previousItem = filteredItems[(currentIndex - 1 + filteredItems.length) % filteredItems.length];
    setSelectedItem(previousItem);
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
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Work Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse through our collection of successful moves and projects.
            See how we handle different types of relocations with care and precision.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="mb-12">
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

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative group cursor-pointer"
                onClick={() => {
                  setSelectedItem(item);
                  setLightboxOpen(true);
                }}
              >
                <div className="aspect-square relative overflow-hidden rounded-lg">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
                        <Play className="w-8 h-8 text-blue-600" />
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
          <DialogContent className="max-w-4xl w-full bg-black/95 border-none">
            <div className="relative">
              <Button
                variant="ghost"
                className="absolute right-4 top-4 text-white"
                onClick={() => setLightboxOpen(false)}
              >
                <X className="w-6 h-6" />
              </Button>
              
              {selectedItem?.type === 'image' ? (
                <img
                  src={selectedItem.url}
                  alt={selectedItem.title}
                  className="w-full h-auto"
                />
              ) : (
                <video
                  src={selectedItem?.url}
                  controls
                  className="w-full h-auto"
                />
              )}

              <div className="absolute inset-y-0 left-0 flex items-center">
                <Button
                  variant="ghost"
                  onClick={handlePrevious}
                  className="text-white"
                >
                  <ChevronLeft className="w-8 h-8" />
                </Button>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center">
                <Button
                  variant="ghost"
                  onClick={handleNext}
                  className="text-white"
                >
                  <ChevronRight className="w-8 h-8" />
                </Button>
              </div>

              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">{selectedItem?.title}</h3>
                <p className="text-sm opacity-75">{selectedItem?.description}</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;