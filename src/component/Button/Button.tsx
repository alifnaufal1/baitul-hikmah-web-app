import { ButtonProps } from "../../types/componentType";

export const Button = ({ name, onClick }: ButtonProps) => {
  return (
    <button type="button" title="button" onClick={onClick}>
      {name}
    </button>
  );
};
