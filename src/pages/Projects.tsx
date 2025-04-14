
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of your first project and its impact.",
      technologies: ["Python", "Docker", "AWS"]
    },
    {
      title: "Project 2",
      description: "Description of your second project highlighting key features.",
      technologies: ["Python", "Kubernetes", "MySQL"]
    }
  ];

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Projects</h1>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
