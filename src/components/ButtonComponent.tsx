const ButtonComponent = (props: any) => {
  const { type, buttonText, children } = props;
  return (
    <div className="hover:bg-(--color-secondary) hover:text-(--color-primarybg) transition rounded-2xl">
      <button
        type={type}
        className="flex justify-around border rounded-2xl p-1 text-lg w-30 "
      >
        {buttonText}
        {children}
      </button>
    </div>
  );
};

export default ButtonComponent;
