// // Define the User type based on your API response structure
// type User = {
//   id: number;
//   name: string;
//   topic: string;
//   description: string;
// };

// // Fetch user details from the API
// async function getUsers(id: string): Promise<User> {
//   const response = await fetch(`http://localhost:3000/api/users/${id}`);
//   if (!response.ok) {
//     throw new Error("Failed to fetch user details");
//   }
//   const data = await response.json();
//   return data.result; // Assuming the API returns user data in `data.result`
// }

// // Define the props type for the Page component
// type PageProps = {
//   params: { userid: string }; // Dynamic route parameter
// };

// export default async function Page({ params }: PageProps) {
//   try {
//     const user = await getUsers(params.userid); // Fetch user data dynamically
//     return (
//       <div className="flex flex-col   h-[400px] space-y-5 mt-10 ml-44 mr-44">
//         <p className="text-2xl flex justify-start">
//           <strong>Topic:</strong> {user.topic}
//         </p>
//         <p className="text-sm">
//           <strong>Name:</strong> {user.name}
//         </p>

//         <p className="text-xs">
//           <strong>Description:</strong> {user.description}
//         </p>
//       </div>
//     );
//   } catch (error) {
//     console.error(error);
//     return (
//       <div className="flex flex-col items-center justify-center h-screen">
//         <h1 className="text-red-500 font-bold text-xl">Error</h1>
//         <p>Failed to load user details. Please try again later.</p>
//       </div>
//     );
//   }
// }
