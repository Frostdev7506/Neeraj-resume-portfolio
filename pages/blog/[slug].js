
import { useDarkMode } from "../../context/DarkModeContext";
import { getPostBySlug, getPosts } from "../../lib/mdx";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsBookmarkPlusFill } from "react-icons/bs";

import Link from "next/link";
import ArticlePosts from "../../components/ArticlePosts";

import MarkdownRenderer from "./MarkdownRenderer";
import { useRouter } from 'next/router';
import ShareArticle from '../../components/ShareArticle';
import Footer from "../../components/Footer";

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
  const post = await getPostBySlug(params.slug);
  const aposts = await getPosts().map((post) => ({
    ...post,
    frontmatter: {
      ...post.frontmatter,
      date: post.frontmatter.date.toISOString(),
    },
  }));
  const limitedPosts = aposts.slice(0, 2);

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
      aposts: limitedPosts
    },
  };
}

export default function BlogPost({ post, aposts }) {
  const { darkMode, setDarkMode } = useDarkMode();
  // Inside your component
  const router = useRouter();
  const url = `${'https://neerajbutola.netlify.app'}${router.asPath}`

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex flex-col min-h-screen bg-white text-gray-500 dark:bg-gray-800">
        <nav className="  flex justify-between  mt-7 md:px-10  lg:px-10 sm:px-5 ">
          <div className="flex items-center">
            <Link href="/blog">
              <p className="text-3xl md:text-4xl lg:text-5xl text-gray-800 dark:text-white">
                <MdOutlineArrowBackIos />
              </p>
            </Link>
          </div>

          <div className="flex items-center">
            <h1 className=" font-burtons text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white "></h1>
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
          <div className="flex flex-col items-center  h-full sm:px-8 md:px-10 lg:px-20 ">
            <div className="flex  justify-start max-w-5xl ">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-teal-600">
                {post.frontmatter.title}
              </h2>
            </div>

            <div className="flex  justify-center self-center py-2">
              <p className=" mt-2 px-2   text-xs md:text-s lg:text-m font-bold text-gray-800 dark:text-white ">
                {post.frontmatter.date.slice(0, 10)}
              </p>

              <p className=" mt-2 px-2 self-end  text-xs md:text-s lg:text-m font-bold text-gray-800 dark:text-white ">
                {post.frontmatter.readtime + " read"}
              </p>
            </div>

            <div className="bg-slate-10 dark:text-white dark:bg-gray-700 border  border-gray-300 dark:border-gray-600 p-10 rounded-md shadow-md max-w-5xl w-full ">
              <MarkdownRenderer content={post.compiledSource} />
            </div>


            <p className="text-xl font-bold py-2 px-2 my-2 mx-2">Share This Article</p>
            <ShareArticle title={post.frontmatter.title} url={url} />
            <hr className="my-6 bg-black border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

           
          <div className="bg-gray-100 dark:bg-slate-700 rounded-lg flex flex-col items-center justify-center pb-5 mx-2 h-full px-2 py-2 md:px-10 lg:px-20 xl:px-32">
  <p className="text-2xl md:text-4xl text-teal-600 font-bold py-2 px-2 my-2 mx-2">Recent Articles</p>
  <ArticlePosts posts={aposts} />
</div>


          </div>
        </div>
        <div className="px-10">
          <Footer />
        </div>
      </div>
    </div>
  );
}
