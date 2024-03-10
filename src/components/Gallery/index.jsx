import GalleryItem from "./GalleryItem";

import galleryList from "./collected_info.json";
import "./index.css";

const Gallery = () => {
  return (
    <div>
      <h2 style={{textAlign: "center"}}>Gallery</h2>
      <div style={{textAlign: "left", marginBottom: "1rem", fontStyle: "italic"}}>* Click to play the gif</div>
      <div className="gallery-container">
        {galleryList.map((item, idx) => (
          <GalleryItem data={item} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
