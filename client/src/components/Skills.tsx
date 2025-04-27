import { motion } from "framer-motion";
import { 
  Code, 
  Server, 
  Paintbrush, 
  Smartphone, 
  Cloud, 
  Wrench 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Code className="w-8 h-8" />,
    iconColor: "text-primary",
    bgColor: "bg-blue-100 dark:bg-blue-950",
    skills: [
      { name: "React.js", percentage: 92 },
      { name: "JavaScript", percentage: 95 },
      { name: "HTML/CSS", percentage: 90 }
    ]
  },
  {
    title: "Backend Development",
    icon: <Server className="w-8 h-8" />,
    iconColor: "text-secondary",
    bgColor: "bg-green-100 dark:bg-green-950",
    skills: [
      { name: "Node.js", percentage: 88 },
      { name: "Express", percentage: 85 },
      { name: "MongoDB", percentage: 80 }
    ]
  },
  {
    title: "UI/UX Design",
    icon: <Paintbrush className="w-8 h-8" />,
    iconColor: "text-accent",
    bgColor: "bg-purple-100 dark:bg-purple-950",
    skills: [
      { name: "Figma", percentage: 90 },
      { name: "Adobe XD", percentage: 85 },
      { name: "Responsive Design", percentage: 95 }
    ]
  },
  {
    title: "Mobile Development",
    icon: <Smartphone className="w-8 h-8" />,
    iconColor: "text-orange-500",
    bgColor: "bg-orange-100 dark:bg-orange-950",
    skills: [
      { name: "React Native", percentage: 85 },
      { name: "Flutter", percentage: 75 },
      { name: "App Design", percentage: 80 }
    ]
  },
  {
    title: "DevOps",
    icon: <Cloud className="w-8 h-8" />,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-100 dark:bg-blue-950",
    skills: [
      { name: "Docker", percentage: 82 },
      { name: "AWS", percentage: 78 },
      { name: "CI/CD", percentage: 75 }
    ]
  },
  {
    title: "Tools & Others",
    icon: <Wrench className="w-8 h-8" />,
    iconColor: "text-gray-700 dark:text-gray-300",
    bgColor: "bg-gray-100 dark:bg-gray-800",
    skills: [
      { name: "Git", percentage: 95 },
      { name: "Webpack/Babel", percentage: 85 },
      { name: "Testing (Jest)", percentage: 80 }
    ]
  }
];

const SkillBar = ({ name, percentage, color }: { name: string; percentage: number; color: string }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-gray-500 dark:text-gray-400">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <motion.div
          className={`${color} rounded-full h-2`}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I've worked with a variety of technologies to deliver exceptional products. Here's a snapshot of my technical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className={`inline-flex items-center justify-center p-4 rounded-lg ${category.bgColor} ${category.iconColor} mb-6`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        percentage={skill.percentage}
                        color={
                          category.iconColor === "text-primary" ? "bg-primary" :
                          category.iconColor === "text-secondary" ? "bg-secondary" :
                          category.iconColor === "text-accent" ? "bg-accent" :
                          category.iconColor === "text-orange-500" ? "bg-orange-500" :
                          category.iconColor === "text-blue-600" ? "bg-blue-600" :
                          "bg-gray-700"
                        }
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
