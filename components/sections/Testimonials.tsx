"use client" 
// src/components/sections/Testimonials.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
  name: string;
  position: string;
  company: string;
  image: string;
  rating: number;
  review: string;
  moveType: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Rahul Sharma",
    position: "Business Owner",
    company: "Tech Solutions Ltd",
    image: "/testimonials/person1.jpg", // Replace with actual image paths
    rating: 5,
    review: "Outstanding service! The team handled our office relocation with exceptional professionalism. Everything was delivered on time and in perfect condition.",
    moveType: "Commercial Move"
  },
  {
    name: "Priya Patel",
    position: "Homeowner",
    company: "",
    image: "/testimonials/person2.jpg",
    rating: 5,
    review: "Extremely satisfied with the moving service. The staff was courteous, careful with our belongings, and very efficient. Would highly recommend!",
    moveType: "Residential Move"
  },
  {
    name: "Amit Kumar",
    position: "Manager",
    company: "Global Industries",
    image: "/testimonials/person3.jpg",
    rating: 5,
    review: "Professional team, excellent communication, and seamless execution. Made our interstate move stress-free and comfortable.",
    moveType: "Long Distance Move"
  },
  {
    name: "Sneha Reddy",
    position: "Doctor",
    company: "City Hospital",
    image: "/testimonials/person4.jpg",
    rating: 5,
    review: "The packing and moving service was exceptional. Very careful with delicate items and maintained perfect timing throughout.",
    moveType: "Local Move"
  },
];

const Testimonials = () => {
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
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued customers have to say about their experience with us.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="bg-white h-full">
                      <CardContent className="p-6">
                        {/* Quote Icon */}
                        <div className="mb-4">
                          <Quote className="w-8 h-8 text-blue-600 opacity-50" />
                        </div>

                        {/* Rating */}
                        <div className="flex mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 fill-current text-yellow-400"
                            />
                          ))}
                        </div>

                        {/* Review Text */}
                        <p className="text-gray-600 mb-6">
                          "{testimonial.review}"
                        </p>

                        {/* Move Type Badge */}
                        <div className="mb-4">
                          <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">
                            {testimonial.moveType}
                          </span>
                        </div>

                        {/* Customer Info */}
                        <div className="flex items-center">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={testimonial.image} alt={testimonial.name} />
                            <AvatarFallback>
                              {testimonial.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="ml-4">
                            <h4 className="font-semibold">{testimonial.name}</h4>
                            <p className="text-sm text-gray-500">
                              {testimonial.position}
                              {testimonial.company && ` at ${testimonial.company}`}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </motion.div>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 bg-white rounded-xl p-8 shadow-lg"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-blue-600 mb-2">4.9/5</h3>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-600 mb-2">1000+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-600 mb-2">98%</h3>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 mb-4">TRUSTED BY LEADING PLATFORMS</p>
          <div className="flex justify-center items-center space-x-8 opacity-50">
            {/* Add your trust badge images here */}
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="w-24 h-12 bg-gray-200 rounded" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;