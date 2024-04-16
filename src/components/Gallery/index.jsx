import GalleryItem from "./GalleryItem";

import galleryList from "./collected_info.json";
import "./index.css";
import PropTypes from "prop-types";

const Gallery = ({ onSelectItem }) => {
  return (
    <div>
      <h2 className="title">Gallery</h2>
      <div
        style={{ textAlign: "left", marginBottom: "1rem", fontStyle: "italic" }}
      >
        * Click to play the gif
      </div>
      <div className="gallery-container">
        {galleryList.map((item, idx) => (
          <GalleryItem data={item} key={idx} onSelectItem={onSelectItem} />
        ))}
      </div>
    </div>
  );
};

Gallery.propTypes = {
  onSelectItem: PropTypes.func.isRequired,
};

export default Gallery;
