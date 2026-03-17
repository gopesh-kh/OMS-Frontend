import type { ButtonPropsType } from "../types/formTypes";

const ButtonComponent = (props: ButtonPropsType) => {
  const { type, buttonText, children, css } = props;
  return (
    <button type={type} className={css}>
      {buttonText}
      <span>{children}</span>
    </button>
  );
};

export default ButtonComponent;
