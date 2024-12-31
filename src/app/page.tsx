import BlogCard from "./components/BlogCard";
import Hero from "./components/Hero";

export default async function Home() {
  // Use environment variable for API URL
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
  const data = await fetch(`${API_URL}/api/users`);
  const posts = await data.json();

  return (
    <div>
      <title>Blogs</title>

      <Hero />

      <h1 className="text-center font-extrabold mt-5 text-3xl">latest blogs</h1>
      <div className="flex justify-center py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post: any) => (
            <BlogCard
              key={post.id}
              id={post.id}
              img={post.img}
              name={post.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
