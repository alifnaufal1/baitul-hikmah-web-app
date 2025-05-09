import { InputTextAreaProps } from "../../types/componentType";

export const InputTextArea = ({
  name,
  value,
  placeholder,
  required = false,
  className,
  onChange,
}: InputTextAreaProps) => {
  return (
    <textarea
      title={name}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      className={`p-3 w-full rounded-md border min-h-24 border-neutral-500 ${className}`}
      placeholder={placeholder}
      required={required}
    />
  );
};
