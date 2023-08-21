import { useState,createContext, useContext, } from "react";
import { useDarkMode } from '../../context/DarkModeContext';
import { getPostBySlug, getPosts } from '../../lib/mdx';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { BsFillMoonStarsFill } from "react-icons/bs";

import Link from 'next/link';

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
    <div className={darkMode ? 'dark' : ''}>
      <div className="flex flex-col min-h-screen bg-white text-gray-500 dark:bg-gray-800">
      <nav className="  flex justify-between  mt-10 px-10  ">

<div className="flex items-center">
  <Link href="/blog">


    <p className='text-3xl md:text-4xl lg:text-5xl text-gray-800 dark:text-white'>
      <MdOutlineArrowBackIos />

    </p>

  </Link>
</div>


<div className="flex items-center">
  <h1 className=" font-burtons text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white ">
    
  </h1>
</div>

<div className="flex items-center">
  <li className=" ">

    <BsFillMoonStarsFill
      onClick={() => setDarkMode(!darkMode)}
      className=" cursor-pointer mb-5 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white"
    />

  </li>
</div>


</nav>
        <div className="flex-grow">
          <div className="flex flex-col items-center  h-full px-10 md:px-20 lg:px-40 ">
            
          <div className="flex  justify-start max-w-5xl ">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-teal-600">
                {post.frontmatter.title} hey there hww are toiy what up?
              </h2>



</div>
       

<div className="flex  justify-center self-center py-2">

<p className=" mt-2 px-2   text-xs md:text-s lg:text-m font-bold text-gray-800 dark:text-white ">
  {post.frontmatter.date.slice(0,10)}
  </p>   

  <p className=" mt-2 px-2 self-end  text-xs md:text-s lg:text-m font-bold text-gray-800 dark:text-white ">{post.frontmatter.readtime}</p>   

    </div> 
            
           
          
            <div className="bg-slate-10 dark:text-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-6 rounded-md shadow-md max-w-5xl w-full">
              <MarkdownRenderer content={post.compiledSource} />
            </div>
          </div>
        </div>
        <div className="px-5">
        <Footer />
        </div>
        
      </div>
      
    </div>
  );
}
