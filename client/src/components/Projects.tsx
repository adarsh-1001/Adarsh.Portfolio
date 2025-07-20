import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import project1Image from "@/assets/project1.svg";
import project2Image from "@/assets/project2.svg";
import project3Image from "@/assets/project3.svg";
import project4Image from "@/assets/project4.svg";
import project5Image from "@/assets/project5.svg";
import project6Image from "@/assets/project6.svg";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "Web App",
    categoryColor: "bg-blue-100 text-primary",
    description: "A full-featured e-commerce platform with payment processing, inventory management, and analytics dashboard.",
    image: project1Image,
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveLink: "#",
    codeLink: "#"
  },
  {
    id: 2,
    title: "Skin Disease Prediction System",
    category: "AI/ML",
    categoryColor: "bg-green-100 text-secondary",
    description: "AI-powered system that analyzes skin images to detect and classify various skin conditions using deep learning.",
    image: project2Image,
    technologies: ["Python", "TensorFlow", "OpenCV", "Flask"],
    liveLink: "#",
    codeLink: "#"
  },
  {
    id: 3,
    title: "Financial Dashboard",
    category: "Web App",
    categoryColor: "bg-purple-100 text-accent",
    description: "Interactive dashboard for financial analytics with real-time data visualization and reporting tools.",
    image: project3Image,
    technologies: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
    liveLink: "#",
    codeLink: "#"
  },
  {
    id: 4,
    title: "AI Content Generator",
    category: "Web App",
    categoryColor: "bg-blue-100 text-primary",
    description: "AI-powered platform for generating marketing content, blog posts, and social media updates.",
    image: project4Image,
    technologies: ["React", "Python", "TensorFlow", "FastAPI"],
    liveLink: "#",
    codeLink: "#"
  },
  {
    id: 5,
    title: "Educational Platform",
    category: "Web App",
    categoryColor: "bg-green-100 text-secondary",
    description: "Online learning platform with courses, assessments, live sessions, and student progress tracking.",
    image: project5Image,
    technologies: ["Next.js", "Node.js", "MongoDB", "WebRTC"],
    liveLink: "#",
    codeLink: "#"
  },
  {
    id: 6,
    title: "Business Management",
    category: "Web App",
    categoryColor: "bg-purple-100 text-accent",
    description: "Comprehensive business management tool for invoicing, inventory, CRM, and team collaboration.",
    image: project6Image,
    technologies: ["Angular", "Java", "Spring Boot", "MySQL"],
    liveLink: "#",
    codeLink: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-800 dark:via-blue-900/20 dark:to-purple-900/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            My <span className="text-primary bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            I've worked on a variety of projects from web applications to AI solutions. Here are some of my recent works showcasing different technologies and approaches.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group">
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Floating action buttons */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a 
                      href={project.liveLink}
                      className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg"
                    >
                      <ExternalLink className="w-4 h-4 text-gray-700" />
                    </a>
                    <a 
                      href={project.codeLink}
                      className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg"
                    >
                      <Github className="w-4 h-4 text-gray-700" />
                    </a>
                  </div>
                  
                  {/* Category badge floating */}
                  <div className="absolute top-4 left-4">
                    <Badge variant="outline" className={`${project.categoryColor} backdrop-blur-sm bg-white/90`}>
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-100 dark:border-gray-700 group-hover:border-gray-200 dark:group-hover:border-gray-600 transition-colors">
                    <a 
                      href={project.liveLink} 
                      className="text-primary hover:text-primary-dark font-medium transition-colors flex items-center gap-1 opacity-70 group-hover:opacity-100"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live
                    </a>
                    <a 
                      href={project.codeLink} 
                      className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors flex items-center gap-1 opacity-70 group-hover:opacity-100"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" size="lg">
            View All Projects <ExternalLink className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
