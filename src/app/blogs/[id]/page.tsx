import CommentSection from "@/app/components/CommentSection";
import Image from "next/image";

// Dummy data
const dummyData = [
  {
    id: "1",
    name: "Hassan",
    topic: "Web 3.0",
    img: "/web3.0.jpg",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem debitis cum, laborum iusto hic magnam eligendi quidem natus aut, ullam corporis repudiandae deleniti animi ratione!",
  },
  {
    id: "2",
    name: "Dr. Abdul Matloob",
    topic: "UX/UI",
    img: "/UIUX.jpg",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem debitis cum, laborum iusto hic magnam eligendi quidem natus aut, ullam corporis repudiandae deleniti animi ratione!",
  },
  {
    id: "3",
    name: "Zohaib",
    topic: "Node.Js",
    img: "/node-js.jpg",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem debitis cum, laborum iusto hic magnam eligendi quidem natus aut, ullam corporis repudiandae deleniti animi ratione!",
  },
  {
    id: "4",
    name: "Sir Ali Jawaid",
    topic: "Next.Js",
    img: "/nextjs.jpeg",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem debitis cum, laborum iusto hic magnam eligendi quidem natus aut, ullam corporis repudiandae deleniti animi ratione!",
  },
  {
    id: "5",
    name: "Ameen Alam",
    topic: "React.Js",
    img: "/react js.jpg",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem debitis cum, laborum iusto hic magnam eligendi quidem natus aut, ullam corporis repudiandae deleniti animi ratione!",
  },
  {
    id: "6",
    name: "Sir Okasha",
    topic: "Front End Development",
    img: "/frontend.jpg",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem debitis cum, laborum iusto hic magnam eligendi quidem natus aut, ullam corporis repudiandae deleniti animi ratione!",
  },
];

// Find user by ID
const getUserById = (id: string) => dummyData.find((user) => user.id === id);

type PageProps = {
  params: { id: string };
};

export default function Page({ params }: PageProps) {
  const user = getUserById(params.id);

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-red-500 font-bold text-xl">Error</h1>
        <p>User not found. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 lg:p-10">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{user.topic}</h1>
        <p className="text-lg text-gray-600">Written by {user.name}</p>
      </div>

      {/* Content Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          <Image
            className="h-auto w-full mb-5"
            src={user.img}
            width={200}
            height={100}
            alt={user.name}
          />
          About This Topic
        </h2>
        <p className="text-gray-800 leading-relaxed text-justify">
          {user.description}
        </p>
      </div>
      <CommentSection />
      <div className="mt-6 flex justify-center">
        <a
          href="/"
          className="bg-black text-white px-6 py-2 rounded-lg shadow hover:bg-gray-600 transition"
        >
          Go Back to Blogs
        </a>
      </div>
    </div>
  );
}
