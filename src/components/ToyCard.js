import React, {useState} from "react";

function ToyCard({toy}) {
  const [currentLikes, setCurrentLikes] = useState(toy.likes)

  const handleLikes =() => {
    setCurrentLikes((currentLikes) => currentLikes + 1)
  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{currentLikes} Likes </p>
      <button className="like-btn" onClick={handleLikes}>Like {"<3"}</button>
      <button className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
