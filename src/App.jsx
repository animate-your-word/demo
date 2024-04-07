import Gallery from "./components/Gallery";
import Playground from "./components/Playground";
import { useState } from "react";
import "./App.css";

function App() {
  const [selectedGalleryItem, setSelectedGalleryItem] = useState(null);

  return (
    <>
      <div style={{ width: "80%", margin: "auto" }}>
        <Gallery onSelectItem={setSelectedGalleryItem} />
        <Playground selectedItem={selectedGalleryItem} />
      </div>
    </>
  );
}

export default App;
