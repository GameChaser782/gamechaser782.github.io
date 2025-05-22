import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string; // Optional link to project deployment
}

const ProjectCard = ({ title, description, technologies, link }: ProjectCardProps) => {
  const cardContent = (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
        <CardHeader>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription className="flex gap-2 flex-wrap">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="bg-accent px-2 py-1 rounded-full text-xs"
              >
                {tech}
              </span>
            ))}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );

  if (link) {
    return (
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block h-full"
      >
        {cardContent}
      </a>
    );
  }

  return cardContent;
};

export default ProjectCard;