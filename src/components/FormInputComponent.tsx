import type { FormInputProps } from "../types/formTypes";

const FormInputComponent = (props: FormInputProps) => {
  const {
    label,
    name,
    type,
    placeholder,
    value,
    onchange,
    children,
    errorMessage,
    required,
  } = props;

  return (
    <div>
      <label className="mt-2 text-md items-center gap-1">
        {label} {required && <span className="text-(--color-danger)">*</span>}
      </label>
      <div className="flex gap-2 border rounded p-1">
        <input
          name={name}
          type={type}
          className="border-r w-80 outline-none"
          placeholder={placeholder}
          value={value}
          onChange={onchange}
        />
        {children}
      </div>
      <p className="text-(--color-danger) text-sm mt-1 w-full h-4">
        {errorMessage && errorMessage}
      </p>
    </div>
  );
};

export default FormInputComponent;
