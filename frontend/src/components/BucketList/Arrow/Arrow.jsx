const Arrow = ({
  children,
  disabled,
  onClick,
}) => (
    <button
      disabled={disabled}
      onClick={onClick}
      className="pointer flex flex-col justify-center"
      style={{
        right: "1%",
        userSelect: "none",
        opacity: disabled ? "0" : '1',
      }}
    >
      {children}
    </button>
);

export default Arrow;
