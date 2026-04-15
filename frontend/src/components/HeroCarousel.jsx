import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides } from '../mockData';
import { Button } from './ui/button';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
          
          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col items-start justify-center max-w-[1440px] mx-auto px-16">
            {/* Trust Badge */}
            <div className="bg-white rounded-full px-6 py-4 shadow-lg mb-6 animate-in fade-in slide-in-from-left duration-700">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full border-4 border-white"></div>
                  <div className="text-center z-10">
                    <div className="text-white text-xs font-bold">TRUSTED</div>
                    <div className="text-white text-xs font-bold">Brand</div>
                  </div>
                  {/* Stars around badge */}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xs">★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">India's Most</div>
                  <div className="text-xs text-gray-600">Research by White Page</div>
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-in fade-in slide-in-from-left duration-700 delay-150">
              {slide.title}
            </h1>
            <p className="text-xl text-white/90 mb-8 animate-in fade-in slide-in-from-left duration-700 delay-300">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        onClick={prevSlide}
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full w-12 h-12 shadow-lg"
      >
        <ChevronLeft size={24} className="text-gray-800" />
      </Button>
      <Button
        onClick={nextSlide}
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full w-12 h-12 shadow-lg"
      >
        <ChevronRight size={24} className="text-gray-800" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
