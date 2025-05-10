import { Github, Linkedin, Mail, Twitter, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const SocialLinks = () => {
  const [showEmailOverlay, setShowEmailOverlay] = useState(false);
  
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/GameChaser782",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/harshit-upadhyay-57573a146/",
      label: "LinkedIn"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://twitter.com/GameChaser782",
      label: "Twitter"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      onClick: () => setShowEmailOverlay(true),
      label: "Email"
    }
  ];

  return (
    <>
      <div className="flex gap-4 flex-wrap">
        {socialLinks.map((link) => (
          <Button
            key={link.label}
            variant="outline"
            size="icon"
            className="rounded-full hover:bg-primary hover:text-white transition-colors"
            asChild={!link.onClick}
            onClick={link.onClick}
          >
            {link.onClick ? (
              link.icon
            ) : (
              <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                {link.icon}
              </a>
            )}
          </Button>
        ))}
      </div>

      {showEmailOverlay && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-background rounded-lg p-6 max-w-md w-full mx-4 relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2"
              onClick={() => setShowEmailOverlay(false)}
            >
              <X className="w-4 h-4" />
            </Button>
            <h3 className="text-lg font-semibold mb-2">Email Address</h3>
            <p className="text-muted-foreground">harshitu782002@gmail.com</p>
          </div>
        </div>
      )}
    </>
  );
};

export default SocialLinks;