export type ButtonProps = {
  name: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "submit" | "reset" | "button";
};

type InputTypeWithoutFile = Exclude<React.HTMLInputTypeAttribute, "file">;

export type InputTextProps = {
  name: string;
  type?: InputTypeWithoutFile;
  value: string | number | readonly string[];
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  required?: boolean;
};

export type InputTextAreaProps = {
  name: string;
  value: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
  required?: boolean;
  className?: string;
};

export type InputSelectProps = {
  name: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  required?: boolean;
  options: any[];
  label?: string;
  value?: string | number;
  placeholder?: string;
};

export type InputFileProps = {
  name: string;
  placeholder?: string;
  required?: boolean;
  element?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  selectedFile?: string | null;
};
