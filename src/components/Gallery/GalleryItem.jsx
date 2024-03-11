import { useState } from "react";
import PropTypes from "prop-types";

const GalleryItem = ({ data }) => {
  const { file, word, optimized_letter, caption } = data;
  const [random, setRandom] = useState(0);

  const togglePlay = () => {
    setRandom(Math.random());
  };

  return (
    <div style={{ position: "relative" }} className="gallery-item">
      <div className="item-word">
        {word.split("").map((letter, idx) => {
          if (letter === optimized_letter) {
            return (
              <span style={{ fontWeight: "bold"  }} key={idx}>
                {letter}
              </span>
            );
          } else {
            return <span key={idx}>{letter}</span>;
          }
        })}
      </div>
      <img
        src={`${import.meta.env.BASE_URL}gallery/${file}?${random}`}
        alt={word}
        onClick={togglePlay}
        autoPlay={true}
        className="item-image"
      />
      <div className="caption">{caption}</div>
    </div>
  );
};

GalleryItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default GalleryItem;
