// app/blogg/page.tsx
import { getSortedPostsData } from "@lib/posts";

export const revalidate = 60;

export default function BloggPage() {
  const allPostsData = getSortedPostsData();

  return (
    <section className="bg-lightGray py-16">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Blogg</h1>
        <ul className="space-y-8">
          {allPostsData.map(({ slug, title, date }) => (
            <li
              key={slug}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <a href={`/blogg/${slug}`} className="block">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {title}
                </h2>
                <p className="text-gray-500">{date}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
