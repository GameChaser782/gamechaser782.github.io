
import { useEffect } from "react";

const Blogs = () => {
  useEffect(() => {
    // Redirect to external blog site
    window.location.href = "https://harshitupadhyay.bearblog.dev/blog/";
  }, []);

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Redirecting to Blog...</h1>
        <p>If you are not redirected automatically, click <a href="https://harshitupadhyay.bearblog.dev/blog/" className="text-blue-500 hover:underline">here</a>.</p>
      </div>
    </div>
  );
};

export default Blogs;
