import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useMobile } from "@/hooks/use-mobile";

import headshot1 from "@/assets/headshot1.svg";
import headshot2 from "@/assets/headshot2.svg";
import headshot3 from "@/assets/headshot3.svg";
import headshot4 from "@/assets/headshot4.svg";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, StyleHub",
    image: headshot1,
    rating: 5,
    text: "Adarsh delivered an exceptional e-commerce platform that exceeded our expectations. His technical skills and attention to detail resulted in a seamless user experience that has significantly increased our conversion rates."
  },
  {
    id: 2,
    name: "David Chen",
    role: "Founder, TechStart",
    image: headshot2,
    rating: 5,
    text: "Working with Adarsh was a game-changer for our startup. He built our mobile app from scratch and delivered it ahead of schedule. His communication skills and problem-solving abilities made the entire process smooth and efficient."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Director, EduLearn",
    image: headshot3,
    rating: 4.5,
    text: "Adarsh redesigned our educational platform with a focus on user experience, and the results have been incredible. Student engagement has increased by 60%, and the interface is now much more intuitive and accessible."
  },
  {
    id: 4,
    name: "Michael Thompson",
    role: "COO, GrowthMark",
    image: headshot4,
    rating: 5,
    text: "We hired Adarsh to develop a custom CRM solution for our business, and the result has transformed our operations. His technical expertise and business understanding helped create a system that perfectly fits our workflow."
  }
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMobile = useMobile();
  const slidesToShow = isMobile ? 1 : window.innerWidth < 1024 ? 2 : 3;
  const maxSlides = testimonials.length - slidesToShow;
  
  const handlePrev = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev < maxSlides ? prev + 1 : maxSlides));
  };

  // For responsive handling
  useEffect(() => {
    if (currentSlide > maxSlides) {
      setCurrentSlide(Math.max(0, maxSlides));
    }
  }, [isMobile, maxSlides]);

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half-star" className="relative">
          <Star className="w-4 h-4 text-yellow-400" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      );
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-star-${i}`} className="w-4 h-4 text-yellow-400" />);
    }

    return stars;
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client <span className="text-primary">Testimonials</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            What my clients say about working with me and the solutions I've delivered.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500"
              style={{ 
                transform: `translateX(-${(currentSlide * 100) / slidesToShow}%)`,
                width: `${(testimonials.length * 100) / slidesToShow}%`
              }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="px-4"
                  style={{ width: `${100 / testimonials.length}%` }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="h-full">
                      <CardContent className="p-8">
                        <div className="flex items-center mb-6">
                          <div className="flex text-yellow-400">
                            {renderStars(testimonial.rating)}
                          </div>
                          <span className="ml-2 text-gray-600 dark:text-gray-300 text-sm">
                            {testimonial.rating.toFixed(1)}
                          </span>
                        </div>
                        <blockquote className="text-gray-600 dark:text-gray-300 mb-6 italic">
                          "{testimonial.text}"
                        </blockquote>
                        <div className="flex items-center">
                          <Avatar className="h-12 w-12 mr-4">
                            <AvatarImage
                              src={testimonial.image}
                              alt={testimonial.name}
                            />
                            <AvatarFallback>
                              {testimonial.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-bold">{testimonial.name}</h4>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.role}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="secondary"
            size="icon"
            className="absolute top-1/2 left-0 transform -translate-y-1/2 rounded-full shadow-lg z-10"
            onClick={handlePrev}
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="absolute top-1/2 right-0 transform -translate-y-1/2 rounded-full shadow-lg z-10"
            onClick={handleNext}
            disabled={currentSlide >= maxSlides}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
        
        {/* Dots indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: maxSlides + 1 }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? "bg-primary" : "bg-gray-300 dark:bg-gray-600 hover:bg-primary/70"
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
