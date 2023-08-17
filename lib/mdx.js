import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export function getPosts() {
  const filenames = fs.readdirSync(contentDirectory);
  const posts = filenames.map((filename) => {
    const filePath = path.join(contentDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    return { frontmatter: data, content };
  });
  console.log("posts",posts);
  return posts;
}


export function getPostBySlug(slug) {
  const fullPath = path.join(contentDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    frontmatter: data,
    compiledSource: content,
  };
}
