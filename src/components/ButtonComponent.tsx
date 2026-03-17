import type { ButtonPropsType } from "../types/formTypes";

const ButtonComponent = (props: ButtonPropsType) => {
  const { type, buttonText, children, buttonStyle } = props;
  return (
    <button type={type} className={buttonStyle}>
      {buttonText}
      <span>{children}</span>
    </button>
  );
};

export default ButtonComponent;
