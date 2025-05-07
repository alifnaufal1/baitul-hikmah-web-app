import { InputTextProps } from "../../types/componentType";

export const InputText = ({
  name,
  type = "text",
  value,
  placeholder,
  required = false,
  onChange,
}: InputTextProps) => {
  return (
    <input
      title={name}
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      className="p-3 w-full rounded-md border"
      placeholder={placeholder}
      required={required}
    />
  );
};
