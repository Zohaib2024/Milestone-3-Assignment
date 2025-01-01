"use client";
import { useEffect, useState } from "react";
import CommentSection from "@/app/components/CommentSection";
import Image from "next/image";

type Photo = {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

type PageProps = {
  params: { id: string };
};

export default function Page({ params }: PageProps) {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos?_limit=6"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch photos");
        }
        const data = await response.json();
        setPhotos(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-gray-500 font-bold text-xl">Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-red-500 font-bold text-xl">Error</h1>
        <p>Failed to load photos. Please try again later.</p>
      </div>
    );
  }

  const photo = photos.find((photo) => photo.id.toString() === params.id);

  if (!photo) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-red-500 font-bold text-xl">Error</h1>
        <p>Photo not found. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 lg:p-10">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Blog {photo.id}
        </h1>
        <p className="text-lg text-gray-600">{photo.title}</p>
      </div>

      {/* Content Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          <Image
            className="h-auto w-full mb-5"
            src={photo.url}
            width={400}
            height={400}
            alt={photo.title}
          />
          About This Photo
        </h2>
        <p className="text-gray-800 leading-relaxed text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, harum
          dolorem praesentium itaque qui recusandae assumenda, libero veniam
          odit impedit a, et error deleniti quae ullam. Porro ut iste fuga. .
        </p>
      </div>
      <CommentSection />
      <div className="mt-6 flex justify-center">
        <a
          href="/"
          className="bg-black text-white px-6 py-2 rounded-lg shadow hover:bg-gray-600 transition"
        >
          Go Back to Photos
        </a>
      </div>
    </div>
  );
}
