
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap, Download, X } from "lucide-react";
import { useState } from "react";

const Resume = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            My <span className="text-primary">Resume</span>
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            My educational and professional journey that shaped my expertise.
          </p>
          <motion.button 
            onClick={() => setShowPopup(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Download className="w-5 h-5 mr-2" />
            Download CV
          </motion.button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-8">
              <Briefcase className="w-6 h-6 text-primary mr-2" />
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>
            
            <div className="space-y-6">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg cursor-pointer"
              >
                <h4 className="font-bold text-lg mb-2">Full Stack Developer</h4>
                <p className="text-primary mb-2">Company Name • 2022 - Present</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Developed and maintained web applications using React, Node.js, and MongoDB.
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg cursor-pointer"
              >
                <h4 className="font-bold text-lg mb-2">Frontend Developer</h4>
                <p className="text-primary mb-2">Previous Company • 2021 - 2022</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Built responsive user interfaces using React and TypeScript.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-8">
              <GraduationCap className="w-6 h-6 text-primary mr-2" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            
            <div className="space-y-6">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg cursor-pointer"
              >
                <h4 className="font-bold text-lg mb-2">Bachelor's in Computer Science</h4>
                <p className="text-primary mb-2">University Name • 2018 - 2022</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Specialized in software engineering and web development.
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg cursor-pointer"
              >
                <h4 className="font-bold text-lg mb-2">Web Development Certification</h4>
                <p className="text-primary mb-2">Online Platform • 2021</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Completed advanced web development course.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* CV Download Popup */}
        <AnimatePresence>
          {showPopup && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
              onClick={() => setShowPopup(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-xl max-w-md w-full mx-4 relative"
                onClick={e => e.stopPropagation()}
              >
                <button
                  onClick={() => setShowPopup(false)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X className="w-6 h-6" />
                </button>
                <h3 className="text-2xl font-bold mb-4">Download CV</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Get a detailed overview of my professional experience, skills, and achievements.
                </p>
                <div className="space-y-4">
                  <motion.a
                    href="https://drive.google.com/file/d/16ROZri1wgMYxfmWouYRdujEdRMqr45_c/view?usp=drivesdk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download CV
                  </motion.a>
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    PDF format • Last updated 2024
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Resume;
