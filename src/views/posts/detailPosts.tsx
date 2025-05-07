import { useParams } from "react-router-dom";
import { ProfileIcon } from "../../component/ProfileIcon/ProfileIcon";
import { DetailPost } from "../../types/postType";
import { useEffect, useState } from "react";
import { getDetailPost } from "../../services/postService";
import { Loader } from "../../component/Loader/Loader";

export const DetailPostPage = () => {
  const { postID } = useParams();
  const [post, setPost] = useState<DetailPost | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const fetchPosts = async () => {
      if (!postID) return <p>Cannot Show Detail Post</p>;
      const data = await getDetailPost(parseInt(postID));
      setPost(data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  if (!post || loading == true) return <Loader />;

  return (
    <div key={post.id}>
      <h1 className="font-bold text-4xl text-center my-4">{post.title}</h1>
      <img
        src={post.post_img}
        alt={post.title}
        className="rounded-t-md w-full h-96 object-cover"
      />
      <div className="p-5">
        <div className="flex flex-col gap-1 items-start xs:flex-row xs:gap-40 xs:items-center">
          <ProfileIcon
            imageProfileURL={post.author_img}
            profileName={post.author}
          />
          <p>{post.created_at}</p>
        </div>
        <hr className="my-2 bg-neutral-500 border-none h-[0.05rem]" />
        <span className="font-semibold">{post.category}</span>
        <hr className="my-2 bg-neutral-500 border-none h-[0.05rem]" />
        <p className="text-justify">{post.content}</p>
      </div>
    </div>
  );
};
