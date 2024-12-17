import SocialLinks from "@/components/SocialLinks";
import ProjectCard from "@/components/ProjectCard";

const Index = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of your first project and its impact.",
      technologies: ["React", "TypeScript", "Node.js"]
    },
    {
      title: "Project 2",
      description: "Description of your second project highlighting key features.",
      technologies: ["Python", "Django", "PostgreSQL"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Photo and Contact */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="aspect-square rounded-xl overflow-hidden mb-6 shadow-paper">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <SocialLinks />
                <div className="text-sm text-muted-foreground">
                  <p>Based in New York, NY</p>
                  <p>Available for opportunities</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-foreground">John Doe</h1>
              <p className="text-xl text-primary">Full Stack Developer</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">About Me</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>Passionate developer with 5+ years of experience in building web applications.</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Specialized in React and TypeScript development</li>
                  <li>Experience with cloud platforms (AWS, GCP)</li>
                  <li>Open source contributor</li>
                  <li>Tech community speaker</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Projects</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {projects.map((project) => (
                  <ProjectCard key={project.title} {...project} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;