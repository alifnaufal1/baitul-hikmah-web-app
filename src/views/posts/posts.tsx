import { useEffect, useState } from "react";
import { Post } from "../../types/postType";
import { getAllPost } from "../../services/postService";
import { PostContainer } from "../../component/PostContainer/PostContainer";

export const PostPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getAllPost();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <h1 className="font-bold text-4xl text-center my-4">Personal Blog App</h1>
      <main className="flex flex-col items-start justify-end px-8 md:flex-row md:flex-wrap md:justify-center md:px-4 gap-4">
        {posts.map((post: Post) => (
          <PostContainer post={post} />
        ))}
      </main>
    </>
  );
};
