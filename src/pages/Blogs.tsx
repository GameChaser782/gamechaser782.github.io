
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Blogs = () => {
  const blogs = [
    {
      title: "Getting Started with Python",
      date: "April 10, 2024",
      snippet: "Learn the basics of Python programming and set up your development environment."
    },
    {
      title: "Kubernetes Fundamentals",
      date: "March 25, 2024",
      snippet: "Understanding containers and orchestration with Kubernetes."
    }
  ];

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Blogs</h1>
        <div className="grid gap-6">
          {blogs.map((blog) => (
            <Card key={blog.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{blog.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{blog.date}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{blog.snippet}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
