import { useEffect } from "react";

const Socials = () => {
  useEffect(() => {
    // Redirect to external socials site
    window.location.href = "https://bento.me/harshit782";
  }, []);

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Redirecting to Socials...</h1>
        <p>If you are not redirected automatically, click <a href="https://bento.me/harshit782" className="text-blue-500 hover:underline">here</a>.</p>
      </div>
    </div>
  );
};

export default Socials; 