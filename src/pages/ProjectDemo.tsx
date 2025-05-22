import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectDemo = () => {
  const { projectName } = useParams();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <h1 className="text-4xl font-bold">Coming Soon!</h1>
        <p className="text-xl text-muted-foreground">
          The live demo for {projectName?.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join(' ')} is under development.
        </p>
        <p className="text-muted-foreground">
          We're working hard to bring you an interactive demo. Please check back soon!
        </p>
        <Button asChild className="mt-4">
          <Link to="/projects" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ProjectDemo; 