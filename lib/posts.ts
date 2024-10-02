import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

// Definiera sökvägen till 'posts' mappen
const postsDirectory = path.join(process.cwd(), "posts");

// Funktion för att hämta sorterade bloggposter
export function getSortedPostsData() {
  // Läs alla filnamn i posts-mappen
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Hämta fullständiga sökvägen till filen
    const fullPath = path.join(postsDirectory, fileName);
    // Läs in innehållet i filen
    const fileContents = fs.readFileSync(fullPath, "utf8");
    // Använd gray-matter för att parsa postmetadata
    const matterResult = matter(fileContents);

    return {
      slug: fileName.replace(/\.md$/, ""), // Ta bort ".md" från filnamnet
      ...matterResult.data, // Lägg till metadata från markdown
    };
  });
  // Sortera bloggposter efter datum
  return allPostsData.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

// Funktion för att hämta en specifik bloggpost baserat på slug
export async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Använd gray-matter för att parsa metadata och innehåll
  const matterResult = matter(fileContents);

  // Använd remark för att konvertera markdown till HTML
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Returnera slug, HTML-innehåll och metadata
  return {
    slug,
    contentHtml,
    ...matterResult.data,
  };
}
