import BlogCardSecondary from "@/components/BlogCardSecondary";
import Share from "@/components/Share";
import config from "@/config/config.json";
import ImageFallback from "@/helpers/ImageFallback";
import MDXContent from "@/helpers/MDXContent";
import { getSinglePage } from "@/lib/contentParser";
import dateFormat from "@/lib/utils/dateFormat";
import readingTime from "@/lib/utils/readingTime";
import similarItems from "@/lib/utils/similarItems";
import { markdownify } from "@/lib/utils/textConverter";
import SeoMeta from "@/partials/SeoMeta";
import { Post } from "@/types";
import { FaCalendarAlt } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";

const { blog_folder } = config.settings;

// remove dynamicParams
export const dynamicParams = false;

// generate static params
export const generateStaticParams: () => { single: string }[] = () => {
  const posts: Post[] = getSinglePage(blog_folder);

  const paths = posts.map((post) => ({
    single: post.slug!,
  }));

  return paths;
};

const PostSingle = async (props: { params: Promise<{ single: string }> }) => {
  const params = await props.params;
  const posts: Post[] = getSinglePage(blog_folder);
  const post = posts.filter((page) => page.slug === params.single)[0];

  const { frontmatter, content } = post;
  const { title, meta_title, description, image, date } =
    frontmatter;
  const similarPosts = similarItems(post, posts, post.slug!)?.slice(0, 3);

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <section className="section pt-60 bg-dark">
        <div className="container">
          <div>
            <h1 className="gradient-text font-semibold mb-4">{title}</h1>
            <ul className="flex items-center gap-x-8 mb-8">
              <li className="text-text flex items-center gap-x-2">
                <FaCalendarAlt className="text-xl" />
                {dateFormat(date)}
              </li>
              <li className="text-text flex items-center gap-x-2">
                <FaClockRotateLeft className="text-xl" />
                {readingTime(content || "")} 
              </li>
            </ul>
            <ImageFallback
              src={image}
              alt={title}
              className="mb-8 rounded-lg w-full h-[600px] object-cover"
              width={1800}
              height={800}
            />
          </div>
        </div>
      </section>
      <section className="section grid-line">
        <div className="container">
          <div className="content">
            <MDXContent content={content} />
          </div>

          <div className="mt-20 flex gap-x-4 items-center">
            <h5 className="mr-3">Share Articles:</h5>
            <Share
              className="social-icons"
              title={title}
              description={description}
              slug={post.slug!}
            />
          </div>
        </div>
      </section>

      <section className="bg-dark section">
        <div className="container">
          {similarPosts.length > 0 && (
            <div className="mb-20">
              <h2
                className="gradient-text mb-12"
                dangerouslySetInnerHTML={markdownify("**Similar** _Posts_")}
              />
              <div className="grid md:grid-cols-3 gap-6">
                {similarPosts.map((post: Post, index: number) => (
                  <BlogCardSecondary key={index} post={post} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PostSingle;
