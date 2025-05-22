import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "./ui/card";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  projectName: string;
  demoLink?: string;
}

const ProjectCard = ({ title, description, technologies, githubLink, projectName, demoLink }: ProjectCardProps) => {
  const cardContent = (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Card className="hover:shadow-lg transition-all duration-300 h-full flex flex-col">
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
        <CardContent className="flex-grow">
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
        <CardFooter className="flex gap-3 pt-4">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 gap-2 group"
            asChild
          >
            <a 
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
              GitHub
            </a>
          </Button>
          <Button 
            variant="default" 
            size="sm" 
            className="flex-1 gap-2 group"
            asChild
          >
            {demoLink ? (
              <a 
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Live Demo
              </a>
            ) : (
              <Link 
                to={`/projects/${projectName}`}
                className="flex items-center justify-center"
              >
                <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Live Demo
              </Link>
            )}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );

  return cardContent;
};

export default ProjectCard;