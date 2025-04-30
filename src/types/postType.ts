export type Post = {
  id: number;
  title: string;
  content: string;
  description: string;
  post_img: string | null;
  author: string;
  author_img: string;
  tags: string[];
  category: string;
  created_at: string;
};
