import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const SocialLinks = () => {
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com",
      label: "LinkedIn"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://twitter.com",
      label: "Twitter"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:harshitu782002@gmail.com",
      label: "Email"
    }
  ];

  return (
    <div className="flex gap-4 flex-wrap">
      {socialLinks.map((link) => (
        <Button
          key={link.label}
          variant="outline"
          size="icon"
          className="rounded-full hover:bg-primary hover:text-white transition-colors"
          asChild
        >
          <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
            {link.icon}
          </a>
        </Button>
      ))}
    </div>
  );
};

export default SocialLinks;