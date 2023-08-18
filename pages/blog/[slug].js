import { useState,createContext, useContext, } from "react";
import { useDarkMode } from '../../context/DarkModeContext';
import { getPostBySlug, getPosts } from '../../lib/mdx';

import MarkdownRenderer from './MarkdownRenderer';
 import Footer from '../../components/Footer'; 


export async function getStaticPaths() {
  const posts = getPosts();

  const paths = posts.map((post) => ({
    params: { slug: post.frontmatter.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);

  const serializedPost = {
    ...post,
    frontmatter: {
      ...post.frontmatter,
      date: post.frontmatter.date.toISOString(),
    },
  };

  return {
    props: {
      post: serializedPost,
    },
  };
}

export default function BlogPost({ post }) {
  const { darkMode, setDarkMode } = useDarkMode();
  return (
    <div className={darkMode ? "dark" : ""}> 
    <div className="flex flex-col min-h-screen bg-white text-gray-500 dark:bg-gray-800">
      <div className="flex-grow">
        <div className="flex flex-col items-center justify-center h-full px-10 md:px-20 lg:px-40 py-10 md:py-20 lg:py-32">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-teal-600 dark:mb-10">
            {post.frontmatter.title}
          </h1>
          <div className="bg-gray-100 dark:text-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-6 rounded-md shadow-md max-w-5xl w-full">
            <MarkdownRenderer content={post.compiledSource} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
    </div>
  );
}
