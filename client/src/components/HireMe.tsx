import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const HireMe = () => {
  return (
    <section id="hire-me" className="py-20 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 opacity-95"></div>
      
      {/* Animated background elements - subtle circles with glow effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-pink-500/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-400/10 blur-3xl"></div>
        <div className="absolute top-1/2 left-2/3 w-72 h-72 rounded-full bg-pink-400/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 bg-gradient-to-r from-blue-950/60 to-blue-900/60 backdrop-blur-sm p-8 rounded-xl border-t border-b border-blue-700/30 shadow-xl max-w-4xl mx-auto"
        >
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div className="bg-pink-500 text-white font-bold py-2 px-6 rounded-full shadow-lg">
              Hire Me
            </div>
          </div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            Ready to <span className="text-pink-500">Hire Mishra</span>?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-blue-100 max-w-2xl mx-auto"
          >
            Let's bring your ideas to life! I'm available for freelance projects, 
            full-time positions, and consulting opportunities.
          </motion.p>
          
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left column - Contact information card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <Card className="bg-white/10 backdrop-blur-sm border-none shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Contact <span className="text-pink-500">Details</span>
                </h3>
                
                <div className="space-y-5">
                  <div className="flex items-start">
                    <div className="bg-pink-500/20 p-3 rounded-xl mr-4 text-pink-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-100 mb-1">Email</h4>
                      <a 
                        href="mailto:mishraadarsh1001@gmail.com" 
                        className="text-white hover:text-pink-300 transition-colors break-all"
                      >
                        mishraadarsh1001@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-500/20 p-3 rounded-xl mr-4 text-blue-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-100 mb-1">Phone</h4>
                      <a 
                        href="tel:+916307737501" 
                        className="text-white hover:text-pink-300 transition-colors"
                      >
                        +91-6307737501
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-pink-500/20 p-3 rounded-xl mr-4 text-pink-400">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-100 mb-1">GitHub</h4>
                      <a 
                        href="https://github.com/adarsh-1001" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-pink-300 transition-colors"
                      >
                        Mishra (adarsh-1001)
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-500/20 p-3 rounded-xl mr-4 text-blue-400">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-100 mb-1">LinkedIn</h4>
                      <a 
                        href="https://linkedin.com/in/adarsh-mishra-7july2003" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-pink-300 transition-colors"
                      >
                        Mishra (7july2003)
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Right column - Hire Me content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Card className="bg-white/10 backdrop-blur-sm border-none shadow-xl overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Why <span className="text-pink-500">Hire Me</span>?
                </h3>
                
                <ul className="space-y-4 mb-8 text-blue-100">
                  <li className="flex items-start">
                    <div className="bg-pink-500 rounded-full p-1 mr-3 mt-1.5">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                    <span>Proven track record of delivering high-quality, scalable solutions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-pink-500 rounded-full p-1 mr-3 mt-1.5">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                    <span>Strong technical skills with experience in modern web technologies</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-pink-500 rounded-full p-1 mr-3 mt-1.5">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                    <span>Collaborative approach and excellent communication skills</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-pink-500 rounded-full p-1 mr-3 mt-1.5">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                    <span>Commitment to ongoing learning and staying current with industry trends</span>
                  </li>
                </ul>
                
                <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-4">
                  {/* Glowing hire me button with hover effect */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <a href="#contact">
                      <button 
                        className="relative group bg-gradient-to-r from-pink-500 to-pink-600 text-white font-medium py-3 px-6 rounded-full
                        shadow-[0_0_15px_rgba(236,72,153,0.5)] hover:shadow-[0_0_25px_rgba(236,72,153,0.8)]
                        transition-all duration-300 w-full sm:w-auto"
                      >
                        <span className="flex items-center justify-center">
                          Hire Me <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 opacity-0 
                          group-hover:opacity-30 blur-md transition-all duration-300"></span>
                      </button>
                    </a>
                  </motion.div>
                  
                  <a href="#projects" className="block">
                    <Button 
                      variant="outline" 
                      className="border-blue-300 text-blue-100 hover:bg-blue-800/50 hover:text-white w-full sm:w-auto"
                    >
                      View My Work
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
            
            {/* 3D-like testimonial quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 relative"
            >
              <div className="bg-gradient-to-r from-blue-900/60 to-blue-800/60 backdrop-blur-sm p-6 rounded-xl
                border-l-4 border-pink-500 shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                <p className="text-blue-100 italic">
                  "Mishra is a highly skilled developer who consistently delivers exceptional results. 
                  His technical expertise and problem-solving abilities make him an invaluable asset to any project."
                </p>
                <div className="mt-4 flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 flex items-center justify-center text-white font-bold">
                    SM
                  </div>
                  <div className="ml-3">
                    <p className="text-white font-medium">Sarah Miller</p>
                    <p className="text-blue-300 text-sm">CTO, TechInnovate</p>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-2 right-2 text-pink-500/20 text-5xl font-serif">"</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HireMe;