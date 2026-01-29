import ImageFallback from "@/helpers/ImageFallback";
import { Post } from "@/types";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const BlogCardSecondary = ({ post }: { post: Post }) => {
  return (
    <div className="card gradient-border bg-secondary/50">
      <ImageFallback
        src={post.frontmatter.image}
        alt={post.frontmatter.title}
        width={500}
        height={880}
        className="rounded-xl w-full h-72 object-cover"
      />
      <div className="mt-6">
        <div className="mb-4 flex gap-x-5 justify-between">
          <h3 className="text-xl">
            {post.frontmatter.title?.length > 40
              ? post.frontmatter.title?.slice(0, 40) + " ..."
              : post.frontmatter.title}
          </h3>
          <Link
            href={`/blog/${post.slug}`}
            className="size-12 rounded-full gradient-border flex items-center justify-center cursor-pointer flex-shrink-0 group hover:bg-primary transition"
            aria-label={`Read more about ${post.frontmatter.title}`}
          >
            <MdArrowOutward className="w-5 h-5 group-hover:text-text-dark transition" />
          </Link>
        </div>
        <p>
          {(post?.frontmatter?.description?.length ?? 0) > 72
            ? post?.frontmatter?.description?.slice(0, 72) + " ..."
            : post.frontmatter?.description}
        </p>
      </div>
    </div>
  );
};

export default BlogCardSecondary;
