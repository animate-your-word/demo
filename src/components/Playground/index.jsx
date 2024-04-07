import { useEffect, useState } from "react";
import "./index.css";
import { svgToPng } from "./canvas";
import { Col, Row, ColorPicker, Slider, Switch, Spin } from "antd";
import PropTypes from "prop-types";

const Generator = ({ selectedItem }) => {
  const [generatedImage, setGeneratedImage] = useState(null);

  async function generateGif(
    name,
    fillStartColor,
    fillEndColor,
    strokeColor,
    strokeWidth,
    strokeDashed,
    delay = 0
  ) {
    setGeneratedImage(null);
    const files = await svgToPng(
      name,
      fillStartColor,
      fillEndColor,
      strokeColor,
      strokeWidth,
      strokeDashed
    );
    const commands = `convert -delay ${delay} -loop 0 -dispose Background frame*.png out.gif`;
    const { outputFiles } = await Magick.execute({
      inputFiles: files,
      commands,
    });
    const outBlob = new Blob([outputFiles[0].buffer], { type: "image/gif" });
    const outSrc = URL.createObjectURL(outBlob);
    setGeneratedImage(outSrc);
  }

  const [fillStartColor, setFillStartColor] = useState("#000000");
  const [fillEndColor, setFillEndColor] = useState("#000000");
  const [strokeColor, setStrokeColor] = useState("#000000");
  const [strokeWidth, setStrokeWidth] = useState(0);
  const [strokeDashed, setStrokeDashed] = useState(false);

  useEffect(() => {
    let name;
    if (
      !selectedItem ||
      !["CAMEL", "KNIGHT", "HARMONY", "JAZZ"].includes(selectedItem)
    ) {
      name = "CAMEL";
    } else {
      name = selectedItem;
    }
    generateGif(
      name,
      fillStartColor,
      fillEndColor,
      strokeColor,
      strokeWidth,
      strokeDashed
    );
  }, [
    selectedItem,
    fillStartColor,
    fillEndColor,
    strokeColor,
    strokeWidth,
    strokeDashed,
  ]);

  return (
    <div style={{ marginBlock: "1rem" }}>
      <h2 style={{ textAlign: "center" }}>Playground</h2>
      <Row
        align="middle"
        style={{
          width: "70%",
          margin: "auto",
          padding: "1rem 2rem",
          background: "#F3F3F3",
          borderRadius: "1rem",
        }}
      >
        <Col lg={16} md={24}>
          <div>
            <b>Fill</b>
          </div>
          <Row align="middle">
            <Col lg={12} md={24}>
              <span>Fill Color - start</span>
            </Col>
            <Col lg={12} md={24}>
              <ColorPicker
                disabledAlpha
                showText
                defaultValue="#000000"
                onChangeComplete={(color) =>
                  setFillStartColor(color.toHexString())
                }
              />
            </Col>
          </Row>
          <Row align="middle">
            <Col lg={12} md={24}>
              <div>Fill Color - end</div>
            </Col>
            <Col lg={12} md={24}>
              <ColorPicker
                disabledAlpha
                showText
                defaultValue="#000000"
                onChangeComplete={(color) =>
                  setFillEndColor(color.toHexString())
                }
              />
            </Col>
          </Row>
          <div>
            <b>Stroke</b>
          </div>
          <Row align="middle">
            <Col lg={12} md={24}>
              <div>Stroke Color</div>
            </Col>
            <Col lg={12} md={24}>
              <ColorPicker
                disabledAlpha
                showText
                defaultValue="#000000"
                onChangeComplete={(color) =>
                  setStrokeColor(color.toHexString())
                }
              />
            </Col>
          </Row>
          <Row align="middle">
            <Col lg={12} md={24}>
              <div>Stroke Width</div>
            </Col>
            <Col xl={12} md={24}>
              <div>
                <Slider
                  style={{ width: "8rem" }}
                  min={0}
                  max={30}
                  onChangeComplete={(e) => setStrokeWidth(e)}
                />
              </div>
            </Col>
          </Row>
          <Row align="middle">
            <Col lg={12} md={24}>
              <div>Stroke Dashed</div>
            </Col>
            <Col xl={12} md={24}>
              <div>
                <Switch
                  size="small"
                  defaultChecked={false}
                  onChange={(checked) => setStrokeDashed(checked)}
                />
              </div>
            </Col>
          </Row>
        </Col>
        <Col lg={8} md={24}>
          <Spin spinning={!generatedImage}>
            <div style={{ width: "80%", height: "100%", margin: "auto" }}>
              {generatedImage && (
                <img
                  src={generatedImage}
                  alt="Generated GIF"
                  style={{ width: "100%", height: "100%" }}
                />
              )}
            </div>
          </Spin>
        </Col>
      </Row>
    </div>
  );
};

Generator.propTypes = {
  selectedItem: PropTypes.string,
};

export default Generator;
