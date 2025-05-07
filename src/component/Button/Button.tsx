import { ButtonProps } from "../../types/componentType";

export const Button = ({ name, onClick, type = "button" }: ButtonProps) => {
  return (
    <button
      type={type}
      title="button"
      onClick={onClick}
      className="bg-neutral-500 rounded-md px-3 py-1 min-w-20 cursor-pointer hover:bg-neutral-400 active:bg-neutral-200"
    >
      {name}
    </button>
  );
};
