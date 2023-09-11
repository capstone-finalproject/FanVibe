import './styles.css';

const StandardCard = ({ data }) => {
  const { name, thumbnail } = data;

  return (
    <div className="relative cardContainer mx-4" tabIndex={0}>
      <div className="contentWrapper relative">
        <div className="imgContainer relative">
          <div className="absolute inset-0">
            <img src={thumbnail} alt="name" className="img absolute" />
          </div>
        </div>
        <div className="contentContainer w-full pl-4 pb-4">
          <div className="titleContainer">
            <h1>{name}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StandardCard;
