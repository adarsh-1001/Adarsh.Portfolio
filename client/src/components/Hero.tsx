import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Github, Linkedin, Twitter, Dribbble } from "lucide-react";

import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-6 py-10 md:py-20">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 md:pr-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4">
              <span className="text-primary font-medium">Hello, I'm</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Adarsh <span className="text-primary">Kumar</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-6">
              Full Stack Developer & UI/UX Designer
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
              I create elegant, efficient, and user-friendly digital solutions that help businesses thrive in the digital world.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href="#contact">Hire Me</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#projects">View My Work</a>
              </Button>
            </div>
            <div className="mt-10 flex space-x-6">
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                <Twitter className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                <Dribbble className="w-6 h-6" />
                <span className="sr-only">Dribbble</span>
              </a>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-purple-500 opacity-70 blur"></div>
              <img 
                src={profileImage} 
                alt="Adarsh Kumar" 
                className="relative z-10 rounded-full border-4 border-white dark:border-gray-800 w-72 h-72 object-cover" 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
