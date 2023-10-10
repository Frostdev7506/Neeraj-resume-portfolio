import Link from 'next/link';
import TechnologyTags from './TechnologyTags';


export default function ArticlePosts({ posts }){
  console.log("posts/",posts);
   
return (

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
    {posts.map((post, index) => (
      <div
        key={index}
        className="flex flex-col items-center justify-center bg-white  p-6 rounded-md shadow-md dark:bg-gray-700  w-85 text-ellipsis"
      >
        <Link href={`/blog/${post.frontmatter.slug}`}>
          <h2 className="p-2 text-xl md:text-2xl lg:text-3xl font-semibold text-teal-500 dark:text-teal-300 cursor-pointer text-ellipsis  hover:underline">
            {post.frontmatter.title}
          </h2>
        </Link>
        <div > { <TechnologyTags technologies={post.frontmatter.tags.split(",")} colors1={["cyan", "cyan", "cyan", "cyan"]}
                colors2={["teal", "teal", "teal", "teal"]}/> } </div>
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
)


}




