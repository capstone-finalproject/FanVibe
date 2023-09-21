const Arrow = ({
  children,
  onClick,
}) => (
    <button
      onClick={onClick}
      className={`pointer flex flex-col justify-center`}
      style={{
        right: "1%",
        userSelect: "none",
      }}
    >
      {children}
    </button>
);

export default Arrow;
