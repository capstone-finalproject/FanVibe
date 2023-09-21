import "./styles.css";

const StandardCard = ({ data, onClick }) => {
  const { name, thumbnail, eventCount } = data;

  const eventCountText = eventCount ? `- ${eventCount} events` : "";

  return (
    <div
      className="group cardContainer relative overflow-hidden block"
      tabIndex={0}
      onClick={() => onClick(data.id)}
    >
      <div className="imageContainer relative">
        <div className="imageWrapper overflow-hidden border-box absolute inset-0">
          <img
            src={thumbnail}
            alt="name"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-70 bg-black w-full h-full" />
        <div className="iconContainer w-full flex justify-center align-center item-center invisible group-hover:visible">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              viewBox="0 0 42 42"
              className="justify-self-center"
            >
              <g data-name="92-Arrow Right">
                <path
                  d="M16 32a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm0-30a14 14 0 1 0 14 14A14 14 0 0 0 16 2z"
                  stroke="white"
                  fill="white"
                />
                <path
                  d="M13.71 24.71 12.3 23.3l7.29-7.3-7.3-7.29L13.7 7.3l8 8a1 1 0 0 1 0 1.41z"
                  stroke="white"
                  fill="white"
                />
              </g>
            </svg>
          </div>
      </div>
      <div className="contentContainer py-4 w-full flex relative">
        <h1 className="font-bold text-lg">{`${name} ${eventCountText}`}</h1>
      </div>
    </div>
  );
};

export default StandardCard;
