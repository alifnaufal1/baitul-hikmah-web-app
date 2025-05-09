import { InputSelectProps } from "../../types/componentType";

export const InputSelect = ({
  name,
  required = false,
  options,
  label,
  value,
  placeholder,
  onChange,
}: InputSelectProps) => {
  return (
    <select
      title={name}
      name={name}
      id={name}
      onChange={onChange}
      className="p-3 w-full rounded-md border border-neutral-500"
      required={required}
    >
      <option value="" disabled hidden>
        {placeholder || "Select an option"}
      </option>
      {options.map((option: any, index: number) => (
        <option
          key={index}
          value={value ? option[value] : option}
          className="bg-[#242424]"
        >
          {label ? option[label] : option}
        </option>
      ))}
    </select>
  );
};
