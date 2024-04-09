"use client";
import { SimplePost } from "@/model/post";
import useSWR from "swr";
import PostListCard from "./PostListCard";
import GridSpinner from "./ui/GridSpinner";

type Props = {
  post: SimplePost;
};

const PostList = () => {
  const { data: posts, isLoading: loading } =
    useSWR<SimplePost[]>("/api/posts");

  return (
    <section>
      {loading && (
        <div className="text-center mt-32">
          <GridSpinner color="red" />
        </div>
      )}
      {posts && (
        <ul className="gap-2">
          {posts.map((post, index) => (
            <li key={post.id} className="mb-4">
              <PostListCard post={post} priority={index > 2} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default PostList;
