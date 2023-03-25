window.onload = function() {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ日¦｜:・."=*+-<>'; // Your chosen characters
  const duration = 10000; // Duration of the matrix effect in milliseconds

  // Create canvas element
  const canvas = document.createElement('canvas');
  canvas.id = 'canv';
  canvas.width = 5000;
  canvas.height = 2000;

  // Create style element
  const style = document.createElement('style');
  style.innerHTML = `
    body {
      margin: 0;
      height: 100vh;
      width: 100vw;
    }
  `;

  // Append canvas and style elements to the body
  document.body.appendChild(canvas);
  document.head.appendChild(style);

  // Get canvas context and set canvas size
  const ctx = canvas.getContext('2d');
  const w = canvas.width = document.body.offsetWidth;
  const h = canvas.height = document.body.offsetHeight;

  // Calculate number of columns and initialize y positions
  const cols = Math.floor(w / 20) + 1;
  const ypos = Array(cols).fill(0);

  // Fill canvas with black color
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, w, h);

  // Create matrix effect function
  const matrix = () => {
    ctx.fillStyle = '#0001';
    ctx.fillRect(0, 0, w, h);

    ctx.fillStyle = '#0f0';
    ctx.font = '15pt monospace';

    ypos.forEach((y, ind) => {
      const text = chars[Math.floor(Math.random() * chars.length)];
      const x = ind * 20;
      ctx.fillText(text, x, y);
      if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
      else ypos[ind] = y + 20;
    });
  };

  // Call matrix effect function every 50 milliseconds
  const matrixInterval = setInterval(matrix, 50);

  // Stop matrix effect after duration and remove dynamically created elements
  setTimeout(() => {
    clearInterval(matrixInterval);
    document.body.removeChild(canvas);
    document.head.removeChild(style);
  }, duration);
};
