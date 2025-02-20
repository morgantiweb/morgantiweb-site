import { useEffect, useRef } from "react";
import './ParticlesNetwork.css';

const TAU = 2 * Math.PI;
const MAIN_COLOR = "#666666";
const SEC_COLOR = "#3187d0";
const NUM_BALLS = 0;
const CONNECTION_DIST = 100;
const MOUSE_DIST = 150;
const ALPHA = 0.2;
const MOUSE_ALPHA = 0.4;

function distMouse(ball, mouseX, mouseY) {
  return Math.hypot(ball.x - mouseX, ball.y - mouseY);
}

class Ball {
  constructor(startX, startY, canvas) {
    this.x = startX || Math.random() * canvas.width;
    this.y = startY || Math.random() * canvas.height;
    this.vel = {
      x: Math.random() * 2 - 1,
      y: Math.random() * 2 - 1,
    };

    this.update = (canvas) => {
      if (this.x > canvas.width + 50 || this.x < -50) {
        this.vel.x = -this.vel.x;
      }
      if (this.y > canvas.height + 50 || this.y < -50) {
        this.vel.y = -this.vel.y;
      }
      this.x += this.vel.x / 5;
      this.y += this.vel.y / 5;
    };
    this.draw = function (ctx, can) {
      ctx.beginPath();
      var distM = distMouse(this, 0, 0);
      if (distM > 150) {
        ctx.fillStyle = SEC_COLOR;
        ctx.globalAlpha = 0.2;
      } else {
        ctx.fillStyle = MAIN_COLOR;
        ctx.globalAlpha = 1 - distM / 240;
      }
      ctx.arc((0.5 + this.x) | 0, (0.5 + this.y) | 0, 3, 0, TAU, false);
      ctx.fill();
    };
  }
}

export default function ParticleNetwork() {
  const canvas = useRef(null);

  let resizeTimeout;
  let currentGlobalID = -1;

  useEffect(() => {
    if (canvas && canvas.current) {
      startAnimation();
    }

    window.onresize = function () {
      startAnimation();
    };
  }, [canvas, canvas.current]);

  const startAnimation = () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(runNetworkAnim, 1500);
  };

  const runNetworkAnim = () => {
    const currentScopeID = ++currentGlobalID;

    canvas.current.width = canvas.current.clientWidth;
    canvas.current.height = window.visualViewport.height;

    const ctx = canvas.current.getContext("2d");

    const loop = () => {
      if (currentGlobalID === currentScopeID) {
        ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
        update();
        draw();
        requestAnimationFrame(loop);
      }
    };

    const balls = [];
    const numberBalls =
      NUM_BALLS || (canvas.current.width * canvas.current.height) / (65 * 65);
    for (let i = 0; i < numberBalls; i++) {
      balls.push(
        new Ball(
          Math.random() * canvas.current.width,
          Math.random() * canvas.current.height,
          canvas.current
        )
      );
    }

    let lastTime = Date.now();
    const update = () => {
      const diff = Date.now() - lastTime;
      for (let frame = 0; frame * 16.6667 < diff; frame++) {
        for (let index = 0; index < balls.length; index++) {
          balls[index].update(canvas.current);
        }
      }
      lastTime = Date.now();
    };
    let mouseX = -1e9,
      mouseY = -1e9;
    document.addEventListener("mousemove", (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    });

    const draw = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      for (let index = 0; index < balls.length; index++) {
        const ball = balls[index];
        ctx.beginPath();
        for (let index2 = balls.length - 1; index2 > index; index2 += -1) {
          const ball2 = balls[index2];
          const dist = Math.hypot(ball.x - ball2.x, ball.y - ball2.y);
          if (dist < CONNECTION_DIST) {
            var distM = distMouse(ball2, mouseX, mouseY);
            if (distM > MOUSE_DIST) {
              ctx.strokeStyle = SEC_COLOR;
              ctx.globalAlpha = ALPHA;
            } else {
              ctx.globalAlpha = MOUSE_ALPHA;
            }
            ctx.moveTo((0.5 + ball.x) | 0, (0.5 + ball.y) | 0);
            ctx.lineTo((0.5 + ball2.x) | 0, (0.5 + ball2.y) | 0);
          }
        }
        ctx.stroke();
        ball.draw(ctx, canvas.current);
      }
    };
    // Start
    loop();
  };

  return <canvas id="particles-network" ref={canvas} height="380" className="w-[100%]"></canvas>;
}
