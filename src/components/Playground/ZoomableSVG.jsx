import { useRef, useEffect } from "react";
import * as d3 from "d3";
import PropTypes from "prop-types";

const ZoomableSVG = ({ width, height }) => {
  const ref = useRef(null);

  useEffect(() => {
    const svg = d3.select(ref.current);
    const zoom = d3.zoom().on("zoom", (event) => {
      svg.selectAll("g").attr("transform", event.transform);
    });

    svg.call(zoom);
  }, []);

  return (
    <svg
      ref={ref}
      width={width}
      height={height}
      style={{ border: "1px solid black" }}
    >
      <g>
        <image
          href={`${import.meta.env.BASE_URL}images/camel.svg`}
          width={width}
          height={height}
        />
      </g>
    </svg>
  );
};

ZoomableSVG.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default ZoomableSVG;
