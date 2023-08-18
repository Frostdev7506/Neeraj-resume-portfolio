import Link from 'next/link';
import { getPosts } from '../lib/mdx';
import Footer from '../components/Footer'; 
import { useState,createContext, useContext, } from "react";
import { useDarkMode } from '../context/DarkModeContext';

export async function getStaticProps() {
  const posts = getPosts().map((post) => ({
    ...post,
    frontmatter: {
      ...post.frontmatter,
      date: post.frontmatter.date.toISOString(),
    },
  }));

  console.log("blog.js", posts);
  return {
    props: {
      posts,
    },
  };
}

export default function Blog({ posts }) {
  const { darkMode, setDarkMode } = useDarkMode();
  return (
    <div className={`flex flex-col min-h-screen ${darkMode ? 'dark' : ''} dark:bg-gray-800`}>
      <div className="bg-white flex-grow dark:bg-gray-800">
        <div className="flex flex-col items-center justify-center h-full px-10 md:px-20 lg:px-40 py-10 md:py-20 lg:py-32">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-10">
            My Blogs
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-white  p-6 rounded-md shadow-md dark:bg-gray-800"
              >
                <Link href={`/blog/${post.frontmatter.slug}`}>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-teal-500 dark:text-teal-300 cursor-pointer hover:underline">
                    {post.frontmatter.title}
                  </h2>
                </Link>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
<div className=' bg-white dark:bg-gray-800'>
<Footer />
</div>
 
    </div>
  );
}

