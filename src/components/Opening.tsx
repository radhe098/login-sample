import { useEffect } from "react";

const Opening: React.FC = () => {
  useEffect(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement | null;

    const ctx = canvas!.getContext('2d')!;
    
    if (!ctx) {
      console.error('2D context not found');
      return; 
    }

    const sun = new Image();
    const moon = new Image();
    const earth = new Image();

    sun.src = './path/to/sun.jpg';
    moon.src = './path/to/moon.jpg';
    earth.src = './path/to/earth.jpg';

    function draw() {
      ctx.globalCompositeOperation = 'destination-over';
      ctx.clearRect(0, 0, 300, 300); // Clear canvas

      ctx.fillStyle = 'rgb(0 0 0 / 40%)';
      ctx.strokeStyle = 'rgb(0 153 255 / 40%)';
      ctx.save();
      ctx.translate(150, 150);

      const time = new Date();
      
      // Rotate and translate for Earth's movement
      ctx.rotate(
        ((2 * Math.PI) / 60) * time.getSeconds() +
        ((2 * Math.PI) / 60000) * time.getMilliseconds()
      );
      ctx.translate(105, 0);
      ctx.fillRect(0, -12, 40, 24); // Shadow
      
      // Draw Earth
      ctx.drawImage(earth, -12, -12, 24, 24); 

      // Moon's orbit
      ctx.save();
      ctx.rotate(
        ((2 * Math.PI) / 6) * time.getSeconds() +
        ((2 * Math.PI) / 6000) * time.getMilliseconds()
      );
      ctx.translate(0, 28.5);
      ctx.drawImage(moon, -3.5, -3.5, 7, 7); // Draw Moon
      ctx.restore();

      ctx.restore();

      // Earth's orbit circle
      ctx.beginPath();
      ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth's orbit
      ctx.stroke();

      // Draw the Sun at the center
      ctx.drawImage(sun, 0, 0, 50, 50);

      window.requestAnimationFrame(draw);
    }

    function init() {
      window.requestAnimationFrame(draw);
    }

    init();
  }, []);

  return (
    <>
      <canvas id="canvas" width="300" height="300"></canvas>
      <h1>Sun</h1>
      <h1>Earth</h1>
      <h1>Moon</h1>
    </>
  );
};

export default Opening;