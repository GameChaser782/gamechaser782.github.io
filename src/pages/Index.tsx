import SocialLinks from "@/components/SocialLinks";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Index = () => {
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const techStack = [
    "Python", "C++", "Databases", "Cloud", "AI/ML", "Kubernetes", "Docker"
  ];

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background relative">
      <div className="max-w-5xl mx-auto px-4 py-8 sm:py-12 md:py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Photo and Contact */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-8 space-y-6">
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src="/lovable-uploads/IMG-20220409-WA0027.jpg"
                  alt="Harshit Upadhyay"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-4">
                <SocialLinks />
                <div className="text-sm text-muted-foreground space-y-1">
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Based in Rajkot, India
                  </p>
                </div>
                <Button variant="outline" className="w-full group" asChild>
                  <a 
                    href="https://docs.google.com/document/d/10s5NFW7kPeAuZvxi0IewBiswfqY68Hn0IqbaXVipkGY/edit?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <FileText className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    View Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-2 space-y-8 md:space-y-12">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Harshit Upadhyay</h1>
              <p className="text-lg sm:text-xl text-primary dark:text-blue-400">🏦 AI Engineer</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span 
                    key={tech} 
                    className="bg-accent/80 dark:bg-accent/20 px-3 py-1 rounded-full text-sm
                             text-foreground dark:text-blue-300 hover:bg-accent dark:hover:bg-accent/30 
                             transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold border-b pb-2">About Me</h2>
              <div className="space-y-6 text-muted-foreground">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <p className="flex items-center gap-2">
                    <span className="text-primary dark:text-blue-400">🏫</span>
                    IIT Bombay (2024)
                  </p>
                </div>
                
                <div className="space-y-4">
                  <p className="flex items-center gap-2">
                    <span className="text-primary dark:text-blue-400">💬</span>
                    Talk to me about cricket, python, silicon valley & startups
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-primary dark:text-blue-400">👯</span>
                    We can connect to play some games of Chess ♟ or Valorant
                  </p>
                </div>
                
                <div className="space-y-3">
                  <p className="font-medium text-foreground flex items-center gap-2">
                    <span className="text-primary dark:text-blue-400">🎯</span>
                    You would normally find me:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {["Learning Coding", "Listening to Lofi songs", "Playing Valorant, cricket or snooker", "Scrolling through Instagram"].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary dark:bg-blue-400 rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <p className="font-medium text-foreground flex items-center gap-2">
                    <span className="text-primary dark:text-blue-400">✨</span>
                    Fun Facts:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      "Grew up in Rajkot, India",
                      "Huge fan of Harry Potter (watched whole series like >30 times)",
                      "Went to IIT Bombay to interact with better minds than me",
                      "I am also highly enthusiast in finance. I do part time stock market also."
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary dark:bg-blue-400 rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
