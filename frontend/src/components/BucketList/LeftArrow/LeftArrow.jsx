import Arrow from "../Arrow";

const LeftArrow = ({ onClick }) => (
    <Arrow onClick={onClick}>
      <svg
        width="45"
        height="45"
        viewBox="0 0 45 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="rotate-180 embla__prev"
      >
        <circle cx="22.5" cy="22.5" r="22.5" fillOpacity="0.95" />
        <path d="M18 13L27.5 22.5L18 32" strokeWidth="2" fill="none" stroke="white" />
      </svg>
    </Arrow>
);

export default LeftArrow;
