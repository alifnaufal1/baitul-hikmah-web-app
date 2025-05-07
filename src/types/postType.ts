export type Post = {
  id: number;
  title: string;
  description: string;
  post_img: string | null;
  author: string;
  author_img: string;
  category: string;
  created_at: string;
};

export type DetailPost = {
  id: number;
  title: string;
  content: string;
  post_img: string;
  category: string;
  author: string;
  author_img: string;
  created_at: string;
};
