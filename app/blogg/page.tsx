// import posts from "../../posts/posts.json";

// export default function Blogg() {
//   return (
//     <div>
//       {posts.map((post) => (
//         <div key={post.id}>
//           <h2>{post.title}</h2>
//           <p>{post.content}</p>
//           <p>{post.date}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// import posts from "../../posts/posts.json";

// export default function Blogg() {
//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       {posts.map((post) => (
//         <div key={post.id} className="bg-white shadow-md rounded-lg p-6 mb-6">
//           <h2 className="text-2xl font-bold mb-2 text-gray-800">
//             {post.title}
//           </h2>
//           <p className="text-gray-600 mb-4">{post.content}</p>
//           <p className="text-gray-400 text-sm">{post.date}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// import posts from "../../posts/posts.json";

// export default function Blogg() {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto p-6">
//       {posts.map((post) => (
//         <div key={post.id} className="bg-white shadow-md rounded-lg p-6">
//           <h2 className="text-2xl font-bold mb-2 text-gray-800">
//             {post.title}
//           </h2>
//           <p className="text-gray-600 mb-4">{post.content}</p>
//           <p className="text-gray-400 text-sm">{post.date}</p>
//         </div>
//       ))}
//     </div>
//   );
// }
import Link from "next/link";
import posts from "../../posts/posts.json";

export default function Blogg() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto p-6">
      {posts.map((post) => (
        <div key={post.id} className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">
            {post.title}
          </h2>
          <p className="text-gray-600 mb-4">{post.content}</p>

          <Link href={`/${post.slug}`}>
            <span className="text-blue-500 hover:underline">Läs mer</span>
          </Link>
        </div>
      ))}
    </div>
  );
}
