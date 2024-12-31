import CommentSection from "@/app/components/CommentSection";
import Image from "next/image";

// Define the User type based on your API response structure
type User = {
  id: number; // Unique identifier for the user
  name: string; // Name of the user
  topic: string; // Topic of the blog or article
  description: string; // Description or content about the topic
  img: string; // URL of the user's image
};

// Fetch user details from the API
async function getUsers(id: string): Promise<User> {
  const response = await fetch(`http://localhost:3000/api/users/${id}`);
  if (!response.ok) {
    // Handle API response errors
    throw new Error("Failed to fetch user details");
  }
  const data = await response.json();
  return data.result; // Assuming the API returns user data in `data.result`
}

// Define the props type for the Page component
type PageProps = {
  params: { id: string }; // Dynamic route parameter passed to the component
};

export default async function Page({ params }: PageProps) {
  try {
    const user = await getUsers(params.id); // Fetch user data dynamically

    return (
      <div className="container mx-auto p-4 lg:p-10 ">
        {/* Header Section */}
        <div className="text-center mb-8">
          {/* Title of the topic */}
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {user.topic}
          </h1>
          {/* Display the author's name */}
          <p className="text-lg text-gray-600">Written by {user.name}</p>
        </div>

        {/* Content Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            {/* User's Image */}
            <Image
              className="h-96 w-full mb-5"
              src={user.img}
              width={200}
              height={500}
              alt={user.name}
            />
            About This Topic
          </h2>
          {/* Detailed description of the topic */}
          <p className="text-gray-800 leading-relaxed text-justify">
            {user.description}
          </p>
        </div>
        <CommentSection />
        {/* Back Button */}
        <div className="mt-6 flex justify-center">
          <a
            href="http://localhost:3000/blogs"
            className="bg-black text-white px-6 py-2 rounded-lg shadow hover:bg-gray-600 transition"
          >
            Go Back to Blogs
          </a>
        </div>
      </div>
    );
  } catch (error) {
    // Handle errors during data fetching or rendering
    console.error(error);
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        {/* Error Message */}
        <h1 className="text-red-500 font-bold text-xl">Error</h1>
        <p>Failed to load user details. Please try again later.</p>
      </div>
    );
  }
}
