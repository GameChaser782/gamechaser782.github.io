import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
}

const ProjectCard = ({ title, description, technologies }: ProjectCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
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
  );
};

export default ProjectCard;