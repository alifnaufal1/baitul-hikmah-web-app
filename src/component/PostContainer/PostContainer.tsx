import { Post } from "../../types/postType";
import { ProfileIcon } from "../ProfileIcon/ProfileIcon";

export const PostContainer = ({
  post,
  onClick,
}: {
  post: Post;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <div className="w-80 rounded-md cursor-pointer" key={post.id} onClick={onClick}>
      <img
        src={post.post_img || "abstract.jpg"}
        alt=""
        className="rounded-t-md w-full h-60 object-cover"
      />
      <div className="p-2">
        <h2 className="text-2xl font-bold">{post.title}</h2>
        <p className="p-1.5 font-light">{post.description}</p>
        <div className="flex justify-between items-center">
          <ProfileIcon
            imageProfileURL={post.author_img}
            profileName={post.author}
          />
          <p>{post.created_at}</p>
        </div>
      </div>
    </div>
  );
};
