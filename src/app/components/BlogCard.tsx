import Link from "next/link";
import Image from "next/image";

interface BlogCardProps {
  id: number;
  img: string;
  name: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ id, img, name }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 hover:bg-gray-100 transition-transform duration-300 transform hover:scale-110">
      <Link href={`blogs/${id}`}>
        <div className="cursor-pointer">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            <div className="relative">
              <Image
                className="h-56 w-full object-cover transition-transform duration-300 transform"
                src={img}
                width={200}
                height={500}
                alt={name}
              />
            </div>
            {name}
          </h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor...
          </p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
