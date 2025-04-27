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
    title: "Health & Fitness App",
    category: "Mobile App",
    categoryColor: "bg-green-100 text-secondary",
    description: "Mobile app for tracking workouts, nutrition, and health metrics with personalized recommendations.",
    image: project2Image,
    technologies: ["React Native", "Firebase", "GraphQL", "TensorFlow"],
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
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I've worked on a variety of projects from web applications to mobile apps. Here are some of my recent works.
          </p>
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
              <Card className="overflow-hidden h-full hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <Badge variant="outline" className={project.categoryColor}>
                      {project.category}
                    </Badge>
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
                  <div className="flex justify-between pt-2 border-t border-gray-100 dark:border-gray-700">
                    <a 
                      href={project.liveLink} 
                      className="text-primary hover:text-primary-dark font-medium transition-colors flex items-center gap-1"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live
                    </a>
                    <a 
                      href={project.codeLink} 
                      className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors flex items-center gap-1"
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
