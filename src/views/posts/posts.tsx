import { useEffect, useState } from "react";
import { Post } from "../../types/postType";
import { getAllPost } from "../../services/postService";
import { PostContainer } from "../../component/PostContainer/PostContainer";
import { useNavigate } from "react-router-dom";
import { IoCreateOutline } from "react-icons/io5";

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
      <header className="flex justify-between items-center px-8">
        <h1 className="font-bold text-4xl my-4 ">Personal Blog App</h1>
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate(`/new-post`)}>
          <IoCreateOutline size={"2em"} />
          <span className="font-semibold">Write</span>
        </div>
      </header>
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
