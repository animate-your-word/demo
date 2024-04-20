import GalleryItem from "./GalleryItem";

import galleryList from "./collected_info.json";
import "./index.css";

const Gallery = () => {
  return (
    <div>
      <h2 className="title">Gallery</h2>
      <div className="gallery-container">
        {galleryList.map((item, idx) => (
          <GalleryItem data={item} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
