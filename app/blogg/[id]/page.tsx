import posts from "../../posts/posts.json";
import { notFound } from "next/navigation";

export default function BloggPost({ params }: { params: { id: string } }) {
  const post = posts.find((p) => p.id.toString() === params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
      <p className="mb-4">{post.date}</p>
      <p>{post.content}</p>
    </div>
  );
}
