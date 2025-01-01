"use client";
import { useEffect, useState } from "react";
import BlogCard from "./components/BlogCard";
import Hero from "./components/Hero";
import Head from "next/head"; // Import Head for setting the title

interface Post {
  id: number;
  title: string;
  thumbnailUrl: string;
}

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const data = await response.json();
      setPosts(data.slice(0, 6)); // Slice the first 6 posts for display (optional)
    };

    fetchData();
  }, []); // Empty dependency array to fetch data once on component mount

  return (
    <div>
      <Head>
        <title>Blogs</title>
      </Head>

      <Hero />

      <h1 className="text-center font-extrabold mt-5 text-3xl">Latest Blogs</h1>
      <div className="flex justify-center py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Map through the fetched posts */}
          {posts.map((post) => (
            <BlogCard
              key={post.id}
              id={post.id}
              img={post.thumbnailUrl}
              name={post.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
