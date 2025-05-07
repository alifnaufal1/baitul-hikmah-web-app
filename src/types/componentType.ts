export type ButtonProps = {
  name: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "submit" | "reset" | "button";
};

export type InputTextProps = {
  name: string;
  type?: React.HTMLInputTypeAttribute;
  value: string | number | readonly string[];
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  required?: boolean;
};
