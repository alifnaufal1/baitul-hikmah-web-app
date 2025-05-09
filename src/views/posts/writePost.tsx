import { FormEvent, useEffect, useState } from "react";
import { InputText } from "../../component/Input/InputText";
import { InputTextArea } from "../../component/Input/InputTextArea";
import { InputSelect } from "../../component/Input/InputSelect";
import { getAllCategory } from "../../services/categoryService";
import { Category } from "../../types/categoryType";
import { Button } from "../../component/Button/Button";
import { InputFile } from "../../component/Input/InputFile";
import { createPost } from "../../services/postService";
import { useNavigate } from "react-router-dom";
import { Error } from "../../component/Error/Error";

export const WritePostPage = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [postImage, setPostImage] = useState<FileList>();
  const [categoryList, setCategoryList] = useState<Category[]>();
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getAllCategory();
      setCategoryList(data);
    };
    fetchCategories();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("category_id", category);
    formData.append("description", description);

    if (postImage) formData.append("post-image", postImage[0]);

    try {
      await createPost(formData);
      navigate("/posts", { replace: true });
    } catch (error: any) {
      setError(error.toString());
    }
  };

  return (
    <div className="w-full">
      {error && <Error error={error} />}
      <h1 className="font-bold text-4xl my-4 text-center">Create New Post</h1>
      <form
        className="flex flex-col gap-3 px-10 mb-10"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2">
          <label className="">Title: </label>
          <InputText
            name={"title"}
            value={title}
            placeholder="Enter title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="">Category: </label>
          <InputSelect
            name={"category"}
            options={categoryList || []}
            label={"name"}
            value={"ID"}
            required
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="">Description: </label>
          <InputTextArea
            name={"description"}
            value={description}
            placeholder="Enter description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="">Post Image: </label>
          <InputFile
            name={"postImage"}
            placeholder="Insert post image"
            element={{
              onChange: (e) => {
                const fileList = e.target.files;
                console.log(e.target.files);
                if (fileList) setPostImage(e.target.files!);
              },
            }}
          />
        </div>

        <div className="flex flex-col gap-2 mb-5">
          <label className="">Content: </label>
          <InputTextArea
            name={"content"}
            value={content}
            placeholder="Enter content"
            required
            className="min-h-96"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <Button name={"Post"} type="submit" />
      </form>
    </div>
  );
};
