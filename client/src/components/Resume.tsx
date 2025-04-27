
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Resume</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My educational and professional journey that shaped my expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Experience Section */}
          <div>
            <div className="flex items-center mb-8">
              <Briefcase className="w-6 h-6 text-primary mr-2" />
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>
            
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
              >
                <h4 className="font-bold text-lg mb-2">Full Stack Developer</h4>
                <p className="text-primary mb-2">Company Name • 2022 - Present</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Developed and maintained web applications using React, Node.js, and MongoDB.
                  Implemented new features and optimized application performance.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
              >
                <h4 className="font-bold text-lg mb-2">Frontend Developer</h4>
                <p className="text-primary mb-2">Previous Company • 2021 - 2022</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Built responsive user interfaces using React and TypeScript.
                  Collaborated with designers to implement pixel-perfect designs.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Education Section */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="w-6 h-6 text-primary mr-2" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
              >
                <h4 className="font-bold text-lg mb-2">Bachelor's in Computer Science</h4>
                <p className="text-primary mb-2">University Name • 2018 - 2022</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Specialized in software engineering and web development.
                  Graduated with First Class Honours.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
              >
                <h4 className="font-bold text-lg mb-2">Web Development Certification</h4>
                <p className="text-primary mb-2">Online Platform • 2021</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Completed advanced web development course covering modern frameworks and best practices.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
