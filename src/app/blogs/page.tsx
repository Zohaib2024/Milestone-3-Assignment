"use client";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useEffect, useState } from "react";

// Define types for the posts
interface Post {
  id: number;
  attributes: {
    name: string;
    topic: string;
    img: string;
    description: string;
  };
}

export default function Page() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=6")
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.map((item: any) => ({
          id: item.id,
          attributes: {
            name: `Photo ${item.id}`,
            topic: `Topic ${item.albumId}`,
            img: item.url,
            description: item.title,
          },
        }));
        setPosts(formattedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>
      <div className="flex justify-center py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-lg rounded-lg p-4 hover:bg-gray-100 transition-transform duration-300 transform hover:scale-110"
            >
              <Link href={`blogs/${post.id}`}>
                <div className="cursor-pointer">
                  <div className="relative">
                    <Image
                      className="h-56 w-full object-cover transition-transform duration-300 transform"
                      src={post.attributes.img}
                      width={200}
                      height={500}
                      alt={post.attributes.name}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {post.attributes.name}
                  </h3>
                  <p className="text-gray-600">{post.attributes.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
