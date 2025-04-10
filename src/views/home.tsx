import { useEffect, useState } from "react";
import { Post } from "../types/postType";
import { getAllPost } from "../services/postService";
import { PostContainer } from "../component/PostContainer/PostContainer";
import "./home.css";

export const HomePage = () => {
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
      <h1>Personal Blog App</h1>
      <main>
        {posts.map((post: Post) => (
          <PostContainer post={post} />
        ))}
      </main>
    </>
  );
};
