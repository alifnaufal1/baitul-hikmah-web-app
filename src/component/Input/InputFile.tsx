import { InputFileProps } from "../../types/componentType";
import "./InputFile.css";

export const InputFile = ({
  name,
  placeholder,
  required = false,
  selectedFile,
  element,
}: InputFileProps) => {
  return (
    <>
      <input
        id={name}
        title={name}
        name={name}
        {...element}
        type={"file"}
        className="p-3 w-full rounded-md border border-neutral-500 "
        placeholder={placeholder}
        required={required}
      />
      {selectedFile && (
        <img src={selectedFile} alt="Selected File" width={100} />
      )}
    </>
  );
};
