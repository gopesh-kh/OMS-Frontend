import type { FormInputPropsType } from "../types/formTypes";

const FormInputComponent = (props: FormInputPropsType) => {
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
    labelStyle,
    inputFieldStyle,
    inputDivStyle,
  } = props;

  return (
    <div>
      <label className={labelStyle}>
        {label} {required && <span className="text-(--color-danger)">*</span>}
      </label>
      <div className={inputDivStyle}>
        <input
          name={name}
          type={type}
          className={inputFieldStyle}
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
