import PropTypes from "prop-types";

const GalleryItem = ({ data }) => {
  const { file, word, optimized_letter, caption } = data;

  return (
    <div style={{ position: "relative" }} className="gallery-item">
      <div className="item-word">
        {word.split("").map((letter, idx) => {
          if (letter === optimized_letter) {
            return (
              <span style={{ fontWeight: 600, fontSize: "1.2rem" }} key={idx}>
                {letter}
              </span>
            );
          } else {
            return <span  style={{ fontSize: "1rem" }} key={idx}>{letter}</span>;
          }
        })}
      </div>
      <img
        src={`${import.meta.env.BASE_URL}gallery/loop_${file}`}
        alt={word}
        autoPlay={true}
        className="item-image"
      />
      <div className="caption">{caption}</div>
    </div>
  );
};

GalleryItem.propTypes = {
  data: PropTypes.object.isRequired
};

export default GalleryItem;
