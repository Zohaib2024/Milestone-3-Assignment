import Link from "next/link";
import Image from "next/image";

export default async function Page() {
  let data = await fetch(`http://localhost:3000/api/users`);
  let posts = await data.json();

  return (
    <>
      <head>
        <title>Blogs</title>
      </head>
      <div className="flex justify-center py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post: any) => (
            <div
              key={post.id}
              className="bg-white shadow-lg rounded-lg p-4 hover:bg-gray-100  transition-transform duration-300 transform hover:scale-110"
            >
              <Link href={`blogs/${post.id}`}>
                <div className="cursor-pointer">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    <div className="relative">
                      <Image
                        className="h-56 w-full object-cover transition-transform duration-300 transform "
                        src={post.img}
                        width={200}
                        height={500}
                        alt={post.name}
                      />
                    </div>
                    {post.name}
                  </h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor...
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
