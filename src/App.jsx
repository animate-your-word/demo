import { useState } from "react";
import Gallery from "./components/Gallery";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{ width: "80%", margin: "auto" }}>
        
        <Gallery />
      </div>
    </>
  );
}

export default App;
