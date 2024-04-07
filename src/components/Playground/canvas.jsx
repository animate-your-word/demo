import * as d3 from "d3";

export async function svgToPng(
  name = "CAMEL",
  startColor = "#000000",
  endColor = "#000000",
  strokeColor = "#000000",
  strokeWidth = 0,
  strokeDashed = false
) {
  const files = [];
  const numFrames = 24;

  for (let i = 0; i < numFrames; i++) {
    const fileUrl = `${import.meta.env.BASE_URL}svg/${name}/frame${String(
      i
    ).padStart(3, "0")}.svg`; // Make sure to include the .svg extension
    const response = await fetch(fileUrl);
    let svgText = await response.text();

    const fillColor = d3.interpolateHsl(startColor, endColor)(i / numFrames);

    svgText = svgText.replace(/fill="rgb\(0, 0, 0\)"/g, `fill="${fillColor}"`);
    svgText = svgText.replace(
      /stroke="rgb\(0, 0, 0\)"/g,
      `stroke="${strokeColor}"`
    );
    svgText = svgText.replace(
      /stroke-width="0.0"/g,
      strokeDashed
        ? `stroke-width="${strokeWidth}" stroke-dasharray="${strokeWidth} ${
            strokeWidth * 2
          }"`
        : `stroke-width="${strokeWidth}"`
    );
    const modifiedSvgBlob = new Blob([svgText], { type: "image/svg+xml" });

    const url = URL.createObjectURL(modifiedSvgBlob);

    try {
      const image = await loadImage(url);
      const canvas = document.createElement("canvas");
      canvas.width = image.width * 2;
      canvas.height = image.height * 2;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(image, 0, 0, image.width * 2, image.height * 2);

      // Convert the canvas to a PNG blob
      const pngBlob = await new Promise((resolve) =>
        canvas.toBlob(resolve, "image/png")
      );

      const pngArrayBuffer = await pngBlob.arrayBuffer();

      files.push({
        name: `frame${String(i).padStart(6, "0")}.png`,
        content: pngArrayBuffer,
      });
    } finally {
      URL.revokeObjectURL(url);
    }
  }
  return files;
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}
