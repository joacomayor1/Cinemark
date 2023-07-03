import 'bootstrap/dist/css/bootstrap.css';

const Card = ({ image, h5, txt, setSelectedMovie, movie }) => {
  const handlePlayClick = () => {
    setSelectedMovie(movie);
  };

  return (
    <div className="col-md-4">
      <div className="card" style={{ width: '18rem' }}>
        <img src={image} className="card-img-top" alt="IMG NOT FOUND" />
        <div className="card-body">
          <h5 className="card-title">{h5}</h5>
          <p className="card-text">{txt}</p>
          <button onClick={handlePlayClick} className="btn btn-primary">
            PLAY
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
