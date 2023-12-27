import { useRef, useEffect } from "react";

export default function Canvas() {
  const canvasRef = useRef();
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // ctx.fillRect(10, 10, 50, 50);

    // //strokes
    // ctx.lineWidth = 2;
    // ctx.strokeRect(10, 80, 30, 30);

    // //clear
    // ctx.clearRect(10, 10, 30, 30);

    // //text
    // ctx.fillText("Sai", 100, 30);

    //Blurriness is due to screen pixel ratio
    const dpi = window.devicePixelRatio;
    canvas.width = 600 * dpi;
    canvas.height = 600 * dpi;
    canvas.style.width = "600px";
    canvas.style.height = "600px";
    ctx.scale(dpi, dpi); // so we are scaling correctly

    //triangle
    // ctx.beginPath();
    // ctx.moveTo(20, 20);
    // ctx.lineTo(120, 20);
    // ctx.lineTo(70, 90);
    // ctx.lineTo(20, 20); //ctx.closePath();
    // ctx.stroke();
    // ctx.fill();

    //circle
    // ctx.beginPath();
    // ctx.arc(300, 300, 200, 0, Math.PI * 2, true);
    // ctx.stroke();

    //heart
    // ctx.beginPath();
    // ctx.moveTo(75, 40);
    // ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
    // ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    // ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
    // ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    // ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    // ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
    // ctx.fill();

    // Animation

    const circle = {
      x: 200,
      y: 200,
      size: 30,
      dx: 5,
      dy: 4,
    };

    function drawCircle() {
      ctx.beginPath();
      ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
      ctx.fillStyle = "purple";
      ctx.fill();
    }

    function update() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawCircle();

      // change position
      circle.x += circle.dx;
      circle.y += circle.dy;

      // Detect side walls
      if (circle.x + circle.size > 600 || circle.x - circle.size < 0) {
        circle.dx = circle.dx * -1;
      }

      // Detect top and bottom walls
      if (circle.y + circle.size > 600 || circle.y - circle.size < 0) {
        circle.dy = circle.dy * -1;
      }

      window.requestAnimationFrame(update);
    }

    update();

    //ctx.drawImage() allows to bind svg or img into canvas
  });

  return (
    <div>
      <canvas id="canvas" ref={canvasRef}></canvas>
    </div>
  );
}

// #canvas {
//   border: 2px solid #33e;
//   margin: 15px;
//   background-color: #fff;
// }
