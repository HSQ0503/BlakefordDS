import BlogCard from "@/components/BlogCard";
import BlogCardSecondary from "@/components/BlogCardSecondary";
import Pagination from "@/components/Pagination";
import config from "@/config/config.json";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import { sortByDate } from "@/lib/utils/sortFunctions";
import { markdownify } from "@/lib/utils/textConverter";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import { Post, RegularPage } from "@/types";
const { blog_folder, pagination } = config.settings;

// for all regular pages
const Posts = () => {
  const postIndex: RegularPage = getListPage(`${blog_folder}/_index.md`);
  const { title, meta_title, description, image } = postIndex.frontmatter;
  const posts: Post[] = getSinglePage(blog_folder);

  const sortedPosts = sortByDate(posts);
  const totalPages = Math.ceil(posts.length / pagination);
  const currentPosts = sortedPosts.slice(0, pagination);

  // all featured blog
  const featuredPosts = sortedPosts.filter((post) => post.frontmatter.featured);
  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <PageHeader data={postIndex.frontmatter} isPageHeader={false} />
      <section className="section pt-0 bg-dark">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            {featuredPosts.map((post: Post, index: number) => (
              <BlogCard key={index} data={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="section grid-line">
        <div className="container">
          <h2
            className="mt-4 gradient-text text-center mb-12"
            dangerouslySetInnerHTML={markdownify("**Latest** _Posts_")}
          />
          <div className="row">
            {currentPosts.map((post: Post, index: number) => (
              <div className="mb-14 md:col-6 lg:col-4" key={index}>
                <BlogCardSecondary  post={post} />
              </div>
            ))}
          </div>
          <Pagination
            section={blog_folder}
            currentPage={1}
            totalPages={totalPages}
          />
        </div>
      </section>
    </>
  );
};

export default Posts;
