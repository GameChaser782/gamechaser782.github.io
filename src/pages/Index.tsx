import SocialLinks from "@/components/SocialLinks";
import ProjectCard from "@/components/ProjectCard";
import { FileText, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Index = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);
  
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

  const techStack = [
    "Python", "Git", "Kubernetes", "Elastic", "Docker", "MySQL", "AWS"
  ];

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background relative">
      <Button 
        variant="outline" 
        size="icon" 
        className="fixed top-4 right-4 z-50"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>

      <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Photo and Contact */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="aspect-square rounded-xl overflow-hidden mb-6 shadow-paper">
                <img
                  src="/lovable-uploads/ebbd7122-75bd-45f8-9e4a-821fb867107e.png"
                  alt="Harshit Upadhyay"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <SocialLinks />
                <div className="text-sm text-muted-foreground">
                  <p>Based in Rajkot, India</p>
                  <p>Available for opportunities</p>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <a 
                    href="https://docs.google.com/document/d/1j_K-Vj3oy82hYN9aO1069h7P4hs8S7Nnkvtb4JrqvX0/edit?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <FileText className="w-4 h-4" />
                    View Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-foreground">Harshit Upadhyay</h1>
              <p className="text-xl text-primary">🏦 AI Engineer</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span key={tech} className="bg-accent px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">About Me</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>💻 I use daily: .py, .sql, .cpp</p>
                <p>🏫 I went to Indian Institute of Technology, Bombay for my B.Tech (2024)</p>
                <p>💬 Talk to me about cricket, python (both of these are not any kind of insect or animals), silicon valley & startups</p>
                <p>👯 We can connect to play some games of Chess ♟ or Valorant</p>
                
                <div className="space-y-2">
                  <p className="font-medium text-foreground">You would normally find me:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Learning Coding</li>
                    <li>Listening to Lofi songs</li>
                    <li>Playing Valorant, cricket or snooker</li>
                    <li>Scrolling through Instagram (I mean, who doesn't)</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <p className="font-medium text-foreground">Fun Facts:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Grew up in Rajkot, India</li>
                    <li>Huge fan of Harry Potter (watched whole series like &gt;30 times)</li>
                    <li>Went to IIT Bombay to interact with better minds than me</li>
                    <li>I am also highly enthusiast in finance. I do part time stock market also.</li>
                  </ul>
                </div>
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