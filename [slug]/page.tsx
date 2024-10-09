import posts from "../../../posts/posts.json";
import { notFound } from "next/navigation";

export default function BloggPost({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
      <p className="text-gray-500 mb-2">{post.date}</p>
      <p className="mb-4">{post.content}</p>
      {/* Här kan du lägga till bilder */}
      <img
        src="/path/to/image.jpg"
        alt="Bildbeskrivning"
        className="w-full h-auto mt-4"
      />
    </div>
  );
}
