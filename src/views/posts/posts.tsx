import { useEffect, useState } from "react";
import { Post } from "../../types/postType";
import { getAllPost } from "../../services/postService";
import { PostContainer } from "../../component/PostContainer/PostContainer";
import { useNavigate } from "react-router-dom";

export const PostPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const navigate = useNavigate();

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
      <main className="flex flex-col items-center justify-center px-8 md:flex-row md:flex-wrap md:items-start md:justify-center md:px-4 gap-4">
        {posts.map((post: Post) => (
          <PostContainer
            post={post}
            key={post.id}
            onClick={() => navigate(`/posts/${post.id}`)}
          />
        ))}
      </main>
    </>
  );
};
