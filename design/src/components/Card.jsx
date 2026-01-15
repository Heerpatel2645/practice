import Button from "./Button";

function Card({ title = "Default", buttonText = "check it out", imageurl }) {
  return (
    <div className="card">
      {imageurl && (
        <img
          src={imageurl}
          alt={title}
        />
      )}
      <div className="card-content">
        <h2>{title}</h2>
        <Button />
      </div>
    </div>
  );
}

export default Card;
