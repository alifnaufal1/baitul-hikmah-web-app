import { Post } from "../../types/postType";
import "./postContainer.css";

export const PostContainer = ({ post }: { post: Post }) => {
  return (
    <div className="container">
      <img src="public/working-space.jpg" alt="" />
      <div className="detail">
        <h2>{post.title}</h2>
        <p>{post.created_at}</p>
      </div>
    </div>
  );
};
