import Gallery from "./components/Gallery";
import Playground from "./components/Playground";
import ZoomableSVG from "./components/Playground/ZoomableSVG";
import Comparison from "./components/Comparison";
import { useState, useRef, useEffect } from "react";
import { Button, Row, Col } from "antd";
import { FilePdfOutlined, GithubOutlined } from "@ant-design/icons";

import "./App.css";

function App() {
  const navList = [
    "Abstract",
    "Gallery",
    "How does it work?",
    "Why SVG?",
    "Comparison",
  ];
  const [selectedGalleryItem, setSelectedGalleryItem] = useState(null);
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.currentTime = 1;
  }, []);

  return (
    <>
      <div style={{ margin: "auto" }}>
        <div className="content">
          <h1 className="title-primary">
            Dynamic Typography: Bringing Words to Life
          </h1>
          <div className="authors">
            <div>
              <a href="https://zliucz.github.io/">Zichen Liu</a>
              <sup>*,1</sup>
              <span>,</span>
            </div>
            <div>
              <a href="https://yihao-meng.github.io/">Yihao Meng</a>
              <sup>*,1</sup>
              <span>,</span>
            </div>
            <div>
              <a href="https://ken-ouyang.github.io/">Hao Ouyang</a>
              <sup>1</sup>
              <span>,</span>
            </div>
            <div>
              <a href="https://bruceyyu.github.io/">Yue Yu</a>
              <sup>1</sup>
              <span>,</span>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/bolin-zhao-38664b266/">
                Bolin Zhao
              </a>
              <sup>1</sup>
              <span>,</span>
            </div>
            <div>
              <a href="https://danielcohenor.com/">Daniel Cohen-Or</a>
              <sup>2</sup>
              <span>,</span>
            </div>
            <div>
              <a href="https://huamin.org/">Huamin Qu</a>
              <sup>1</sup>
            </div>
          </div>
          <div style={{ textAlign: "center", marginBlock: "1rem" }}>
            <div>
              <sup>1</sup> Hong Kong University of Science and Technology,{" "}
              <sup>2</sup> Tel-Aviv University
            </div>
            <div>
              <sup>*</sup> indicates equal contribution
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              marginBottom: "2rem",
            }}
          >
            <Button
              shape="round"
              size="large"
              icon={<FilePdfOutlined />}
              style={{ marginInline: "0.5rem" }}
            >
              paper
            </Button>
            <Button
              shape="round"
              size="large"
              icon={<GithubOutlined />}
              style={{ marginInline: "0.5rem" }}
              href="https://github.com/zliucz/animate-your-word"
            >
              code
            </Button>
          </div>
          {/* <div className="nav-bar">
            {navList.map((nav, idx) => {
              return <div key={idx} className="nav-item">{nav}</div>;
            })}
          </div> */}
        </div>

        <hr className="divider" />
        <div className="content">
          <video
            src={`${import.meta.env.BASE_URL}dynamic_typography.mp4`}
            ref={vidRef}
            controls
            autoPlay
            style={{ width: "100%" }}
          />
          <div style={{ textAlign: "center", marginBlock: "1rem" }}>
            🎵 We recommend watching the video with sound on 🎵
          </div>
        </div>
        <div className="gray-bg">
          <div className="content">
            <h2 className="title">Abstract</h2>
            <div className="text" style={{ width: "80%", margin: "auto" }}>
              Text animation serves as an expressive medium, transforming static
              communication into dynamic experiences by infusing words with
              motion to evoke emotions, emphasize meanings, and construct
              compelling narratives. Crafting animations that are semantically
              aware poses significant challenges, demanding expertise in graphic
              design and animation. We present an automated text animation
              scheme, termed “Dynamic Typography,” which combines two
              challenging tasks. It deforms letters to convey semantic meaning
              and infuses them with vibrant movements based on user prompts. Our
              technique harnesses vector graphics representations and an
              end-to-end optimization-based framework. This framework employs
              neural displacement fields to convert letters into base shapes and
              applies per-frame motion, encouraging coherence with the intended
              textual concept. Shape preservation techniques and perceptual loss
              regularization are employed to maintain legibility and structural
              integrity throughout the animation process. We demonstrate the
              generalizability of our approach across various text-to-video
              models and highlight the superiority of our end-to-end methodology
              over baseline methods, which might comprise separate tasks.
              Through quantitative and qualitative evaluations, we demonstrate
              the effectiveness of our framework in generating coherent text
              animations that faithfully interpret user prompts while
              maintaining readability.
            </div>
          </div>
        </div>

        <div className="content">
          <Gallery onSelectItem={setSelectedGalleryItem} />
        </div>

        <div className="gray-bg">
          <div className="content">
            <Row gutter={16}>
              <Col lg={11} md={24}>
                <h2 className="title">Why SVG?</h2>
                <div className="text">
                  SVG is resolution-independent, allowing for clear scaling at
                  any resolution. It is easily editable, enabling dynamic
                  changes to graphic attributes like line colors, widths, and
                  styles, enhancing interactivity and personalization.
                </div>
                <div style={{ textAlign: "center", marginTop: "0.5rem" }}>
                  <ZoomableSVG width={130} height={130} />
                  <div className="text">
                    🔍 Get closer - zoom infinitely into this SVG
                  </div>
                </div>
              </Col>
              <Col lg={13} md={24}>
                <div className="text">
                  <Playground selectedItem={selectedGalleryItem} />
                  <div style={{ textAlign: "center" }}>
                    🪄 You can freely adjust the SVG to create your own
                    animation!
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <div className="content-wide">
          <h2 className="title">How does it work?</h2>
          <Row gutter={16}>
            <Col md={24} lg={8}>
              <img
                src={`${import.meta.env.BASE_URL}images/bizier.png`}
                style={{ width: "100%" }}
              />
              <div className="text">
                The original input letter is initialized as a set of connected
                cubic Bézier curves, represented by a set of control points. Our
                method predicts a displacement for each control point at each
                frame.
              </div>
            </Col>
            <Col md={24} lg={16}>
              <img
                src={`${import.meta.env.BASE_URL}images/model.png`}
                style={{ width: "100%" }}
              />
              <div className="text">
                A overview of the model architecture. Given a letter represented
                as a set of control points, the Base Field deforms it to the
                shared base shape, setting the stage to add per-frame
                displacement. Then we duplicate the base shape across 𝑘 frames
                and utilize the Motion Field to predict displacements for each
                control point at each frame, infusing movement to the base
                shape. Every frame is then rendered by the differentiable
                rasterizer 𝑅 and concatenated as the output video. The base and
                motion field are jointly optimized by the video prior (𝐿
                <sub>𝑆𝐷𝑆</sub> ) from frozen pre-trained video foundation model
                using Score Distillation Sampling, under regularization on
                legibility 𝐿<sub>𝑙𝑒𝑔𝑖𝑏𝑖𝑙𝑖𝑡𝑦</sub> and structure preservation 𝐿
                <sub>𝑠𝑡𝑟𝑢𝑐𝑡𝑢𝑟𝑒</sub>.
              </div>
            </Col>
          </Row>
        </div>

        <div className="gray-bg">
          <div className="content">
            <Comparison />
          </div>
        </div>

        <br />
        <br />
        <hr className="divider" />
        <div className="content">
          <div>
            This website is licensed under a{" "}
            <a href="http://creativecommons.org/licenses/by-sa/4.0/">
              Creative Commons Attribution-ShareAlike 4.0 International License
            </a>
            .
          </div>
          <br />
          <div>
            You are welcome to use the{" "}
            <a href="https://github.com/animate-your-word/demo">source code</a>{" "}
            of this website, but we kindly request that you provide a link back
            to this page in the footer. Please remember to remove any analytics
            code from the header that you do not wish to include on your own
            website.
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
