import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

// Dummy data
export const user = [
  {
    data: [
      {
        id: "1",
        type: "user",
        attributes: {
          name: "Hassan",
          topic: "Web 3.0",
          img: "/web3.0.jpg",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem debitis cum, laborum iusto hic magnam elgendi quidem natus aut, ullam corporis repudiandae deleniti animi ratione! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima alias adipisci expedita quidem, amet dolore tenetur dolor? Numquam maiores rerum reprehenderit velit sapiente. Delectus voluptatem, ducimus a iusto officiis, voluptatibus qui reiciendis odit odio incidunt veritatis totam. Unde aperiam asperiores temporibus neque quos accusamus fugit dignissimos impedit dolor quidem voluptas expedita repudiandae ipsam aspernatur, nihil incidunt odit eveniet debitis maxime placeat! Eveniet adipisci quidem alias est! Earum suscipit necessitatibus minima quae? Hic assumenda, vel optio adipisci eligendi porro nisi, cumque esse magnam accusamus fuga natus nobis, et excepturi ex. Cupiditate consequuntur id quo natus ipsum error delectus odit itaque sapiente.",
        },
      },
      {
        id: "2",
        type: "user",
        attributes: {
          name: "Dr. Abdul Matloob",
          topic: "UX/UI",
          img: "/UIUX.jpg",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem debitis cum, laborum iusto hic magnam eligendi quidem natus aut, ullam corporis repudiandae deleniti animi ratione! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima alias adipisci expedita quidem, amet dolore tenetur dolor? Numquam maiores rerum reprehenderit velit sapiente. Delectus voluptatem, ducimus a iusto officiis, voluptatibus qui reiciendis odit odio incidunt veritatis totam. Unde aperiam asperiores temporibus neque quos accusamus fugit dignissimos impedit dolor quidem voluptas expedita repudiandae ipsam aspernatur, nihil incidunt odit eveniet debitis maxime placeat! Eveniet adipisci quidem alias est! Earum suscipit necessitatibus minima quae? Hic assumenda, vel optio adipisci eligendi porro nisi, cumque esse magnam accusamus fuga natus nobis, et excepturi ex. Cupiditate consequuntur id quo natus ipsum error delectus odit itaque sapiente.",
        },
      },
      {
        id: "3",
        type: "user",
        attributes: {
          name: "Zohaib",
          topic: "Node.Js",
          img: "/node-js.jpg",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem debitis cum, laborum iusto hic magnam eligendi quidem natus aut, ullam corporis repudiandae deleniti animi ratione! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima alias adipisci expedita quidem, amet dolore tenetur dolor? Numquam maiores rerum reprehenderit velit sapiente. Delectus voluptatem, ducimus a iusto officiis, voluptatibus qui reiciendis odit odio incidunt veritatis totam. Unde aperiam asperiores temporibus neque quos accusamus fugit dignissimos impedit dolor quidem voluptas expedita repudiandae ipsam aspernatur, nihil incidunt odit eveniet debitis maxime placeat! Eveniet adipisci quidem alias est! Earum suscipit necessitatibus minima quae? Hic assumenda, vel optio adipisci eligendi porro nisi, cumque esse magnam accusamus fuga natus nobis, et excepturi ex. Cupiditate consequuntur id quo natus ipsum error delectus odit itaque sapiente.",
        },
      },
      {
        id: "4",
        type: "user",
        attributes: {
          name: "Sir Ali Jawaid",
          topic: "Next.Js",
          img: "/nextjs.jpeg",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem debitis cum, laborum iusto hic magnam eligendi quidem natus aut, ullam corporis repudiandae deleniti animi ratione! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima alias adipisci expedita quidem, amet dolore tenetur dolor? Numquam maiores rerum reprehenderit velit sapiente. Delectus voluptatem, ducimus a iusto officiis, voluptatibus qui reiciendis odit odio incidunt veritatis totam. Unde aperiam asperiores temporibus neque quos accusamus fugit dignissimos impedit dolor quidem voluptas expedita repudiandae ipsam aspernatur, nihil incidunt odit eveniet debitis maxime placeat! Eveniet adipisci quidem alias est! Earum suscipit necessitatibus minima quae? Hic assumenda, vel optio adipisci eligendi porro nisi, cumque esse magnam accusamus fuga natus nobis, et excepturi ex. Cupiditate consequuntur id quo natus ipsum error delectus odit itaque sapiente.",
        },
      },
      {
        id: "5",
        type: "user",
        attributes: {
          name: "Ameen Alam",
          topic: "React.Js",
          img: "/react js.jpg",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem debitis cum, laborum iusto hic magnam eligendi quidem natus aut, ullam corporis repudiandae deleniti animi ratione! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima alias adipisci expedita quidem, amet dolore tenetur dolor? Numquam maiores rerum reprehenderit velit sapiente. Delectus voluptatem, ducimus a iusto officiis, voluptatibus qui reiciendis odit odio incidunt veritatis totam. Unde aperiam asperiores temporibus neque quos accusamus fugit dignissimos impedit dolor quidem voluptas expedita repudiandae ipsam aspernatur, nihil incidunt odit eveniet debitis maxime placeat! Eveniet adipisci quidem alias est! Earum suscipit necessitatibus minima quae? Hic assumenda, vel optio adipisci eligendi porro nisi, cumque esse magnam accusamus fuga natus nobis, et excepturi ex. Cupiditate consequuntur id quo natus ipsum error delectus odit itaque sapiente.",
        },
      },
      {
        id: "6",
        type: "user",
        attributes: {
          name: "Sir Okasha",
          topic: "Front End Development",
          img: "/frontend.jpg",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem debitis cum, laborum iusto hic magnam eligendi quidem natus aut, ullam corporis repudiandae deleniti animi ratione! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima alias adipisci expedita quidem, amet dolore tenetur dolor? Numquam maiores rerum reprehenderit velit sapiente. Delectus voluptatem, ducimus a iusto officiis, voluptatibus qui reiciendis odit odio incidunt veritatis totam. Unde aperiam asperiores temporibus neque quos accusamus fugit dignissimos impedit dolor quidem voluptas expedita repudiandae ipsam aspernatur, nihil incidunt odit eveniet debitis maxime placeat! Eveniet adipisci quidem alias est! Earum suscipit necessitatibus minima quae? Hic assumenda, vel optio adipisci eligendi porro nisi, cumque esse magnam accusamus fuga natus nobis, et excepturi ex. Cupiditate consequuntur id quo natus ipsum error delectus odit itaque sapiente.",
        },
      },
    ],
  },
];

export default function Page() {
  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>
      <div className="flex justify-center py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Corrected to use user.data instead of posts */}
          {user[0].data.map((post) => (
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
