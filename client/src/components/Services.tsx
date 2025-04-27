import { motion } from "framer-motion";
import { 
  Laptop, 
  Smartphone, 
  Paintbrush, 
  ShoppingCart, 
  Code, 
  BookOpen, 
  ArrowRight, 
  Check 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Web Development",
    icon: <Laptop className="w-6 h-6" />,
    color: "bg-blue-100 text-primary",
    hoverColor: "group-hover:bg-primary group-hover:text-white",
    description: "Custom web applications and websites that are responsive, performant, and tailored to your specific business needs.",
    features: [
      "Custom Web Applications",
      "E-commerce Solutions",
      "Progressive Web Apps",
      "CMS Development"
    ],
    checkColor: "text-primary"
  },
  {
    title: "Mobile Development",
    icon: <Smartphone className="w-6 h-6" />,
    color: "bg-green-100 text-secondary",
    hoverColor: "group-hover:bg-secondary group-hover:text-white",
    description: "Native and cross-platform mobile applications with intuitive interfaces and seamless performance.",
    features: [
      "iOS & Android Apps",
      "Cross-Platform Solutions",
      "App Redesign & Optimization",
      "App Store Deployment"
    ],
    checkColor: "text-secondary"
  },
  {
    title: "UI/UX Design",
    icon: <Paintbrush className="w-6 h-6" />,
    color: "bg-purple-100 text-accent",
    hoverColor: "group-hover:bg-accent group-hover:text-white",
    description: "User-centered design solutions that enhance user experience and increase engagement and conversion rates.",
    features: [
      "User Interface Design",
      "User Experience Research",
      "Wireframing & Prototyping",
      "Design Systems"
    ],
    checkColor: "text-accent"
  },
  {
    title: "E-commerce Solutions",
    icon: <ShoppingCart className="w-6 h-6" />,
    color: "bg-red-100 text-red-500",
    hoverColor: "group-hover:bg-red-500 group-hover:text-white",
    description: "End-to-end e-commerce platforms with secure payment processing, inventory management, and analytics.",
    features: [
      "Custom E-commerce Platforms",
      "Shopping Cart Development",
      "Payment Gateway Integration",
      "Inventory Management Systems"
    ],
    checkColor: "text-red-500"
  },
  {
    title: "API Development",
    icon: <Code className="w-6 h-6" />,
    color: "bg-yellow-100 text-yellow-600",
    hoverColor: "group-hover:bg-yellow-600 group-hover:text-white",
    description: "Robust and secure APIs that enable seamless integration between different systems and services.",
    features: [
      "RESTful API Development",
      "GraphQL API Development",
      "API Documentation",
      "Third-party API Integration"
    ],
    checkColor: "text-yellow-600"
  },
  {
    title: "Consulting & Training",
    icon: <BookOpen className="w-6 h-6" />,
    color: "bg-cyan-100 text-cyan-600",
    hoverColor: "group-hover:bg-cyan-600 group-hover:text-white",
    description: "Technical consultation and team training to help your organization build technical capabilities.",
    features: [
      "Technical Consultation",
      "Code Reviews & Audits",
      "Team Training Workshops",
      "Technical Documentation"
    ],
    checkColor: "text-cyan-600"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I offer a range of services to help businesses and individuals achieve their digital goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow group">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-lg ${service.color} ${service.hoverColor} flex items-center justify-center text-3xl mb-6 transition-colors duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className={`w-4 h-4 mr-2 ${service.checkColor}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className={`${service.checkColor} font-medium hover:text-primary transition-colors inline-flex items-center`}
                  >
                    Get Started <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
