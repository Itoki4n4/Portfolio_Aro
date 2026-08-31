// Futuristic Cyberpunk / Matrix Energy Canvas Cursor Hook

/* eslint-disable */
// @ts-nocheck

import { useEffect } from "react";

const useCanvasCursor = () => {
  function Oscillator(e) {
    this.init(e || {});
  }
  Oscillator.prototype = {
    init: function (e) {
      this.phase = e.phase || 0;
      this.offset = e.offset || 0;
      this.frequency = e.frequency || 0.001;
      this.amplitude = e.amplitude || 1;
    },
    update: function () {
      this.phase += this.frequency;
      return this.offset + Math.sin(this.phase) * this.amplitude;
    },
  };

  function Node() {
    this.x = 0;
    this.y = 0;
    this.vy = 0;
    this.vx = 0;
  }

  function Line(e) {
    this.init(e || {});
  }

  Line.prototype = {
    init: function (e) {
      this.spring = e.spring + 0.1 * Math.random() - 0.02;
      this.friction = E.friction + 0.01 * Math.random() - 0.002;
      this.nodes = [];
      for (var t = 0; t < E.size; t++) {
        var n = new Node();
        n.x = pos.x;
        n.y = pos.y;
        this.nodes.push(n);
      }
    },
    update: function () {
      var e = this.spring,
        t = this.nodes[0];
      t.vx += (pos.x - t.x) * e;
      t.vy += (pos.y - t.y) * e;
      for (var n, i = 0, a = this.nodes.length; i < a; i++) {
        t = this.nodes[i];
        if (i > 0) {
          n = this.nodes[i - 1];
          t.vx += (n.x - t.x) * e;
          t.vy += (n.y - t.y) * e;
          t.vx += n.vx * E.dampening;
          t.vy += n.vy * E.dampening;
        }
        t.vx *= this.friction;
        t.vy *= this.friction;
        t.x += t.vx;
        t.y += t.vy;
        e *= E.tension;
      }
    },
    draw: function () {
      var e,
        t,
        n = this.nodes[0].x,
        i = this.nodes[0].y;
      ctx.beginPath();
      ctx.moveTo(n, i);
      for (var a = 1, o = this.nodes.length - 2; a < o; a++) {
        e = this.nodes[a];
        t = this.nodes[a + 1];
        n = 0.5 * (e.x + t.x);
        i = 0.5 * (e.y + t.y);
        ctx.quadraticCurveTo(e.x, e.y, n, i);
      }
      if (this.nodes.length > 2) {
        e = this.nodes[a];
        t = this.nodes[a + 1];
        ctx.quadraticCurveTo(e.x, e.y, t.x, t.y);
      }
      ctx.stroke();
      ctx.closePath();
    },
  };

  // Futuristic Digital Particle
  function Particle(x, y) {
    this.x = x + (Math.random() - 0.5) * 12;
    this.y = y + (Math.random() - 0.5) * 12;
    this.size = Math.random() * 3 + 1.5;
    this.speedX = (Math.random() - 0.5) * 1.2;
    this.speedY = (Math.random() - 0.5) * 1.2;
    this.life = 1.0;
    this.decay = Math.random() * 0.035 + 0.02;
    this.color = Math.random() > 0.4 ? "57, 211, 83" : "0, 242, 254"; // Matrix Emerald & Cyber Cyan
  }

  Particle.prototype.update = function () {
    this.x += this.speedX;
    this.y += this.speedY;
    this.life -= this.decay;
  };

  Particle.prototype.draw = function (ctx) {
    if (this.life <= 0) return;
    ctx.fillStyle = `rgba(${this.color}, ${this.life * 0.6})`;
    ctx.fillRect(this.x, this.y, this.size, this.size); // Pixel square particle
  };

  var ctx,
    f,
    pos = { x: -100, y: -100 },
    prevPos = { x: -100, y: -100 },
    lines = [],
    particles = [],
    E = {
      friction: 0.55,
      trails: 12,
      size: 40,
      dampening: 0.22,
      tension: 0.98,
    };

  function onPointerMove(e) {
    var clientX, clientY;
    if (e.touches && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    pos.x = clientX;
    pos.y = clientY;

    // Emit cyber particles on movement
    var dist = Math.hypot(pos.x - prevPos.x, pos.y - prevPos.y);
    if (dist > 3) {
      for (var i = 0; i < Math.min(3, Math.floor(dist / 4)); i++) {
        particles.push(new Particle(pos.x, pos.y));
      }
      prevPos.x = pos.x;
      prevPos.y = pos.y;
    }
  }

  function initLines() {
    lines = [];
    for (var i = 0; i < E.trails; i++) {
      lines.push(new Line({ spring: 0.4 + (i / E.trails) * 0.025 }));
    }
  }

  function render() {
    if (ctx && ctx.running) {
      ctx.globalCompositeOperation = "source-over";
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.globalCompositeOperation = "lighter";

      // 1. Draw Cyber Laser Ribbon Trail
      var wave = Math.sin(Date.now() * 0.003);
      var gradientColor = wave > 0 ? "rgba(57, 211, 83, 0.35)" : "rgba(0, 242, 254, 0.35)";
      ctx.strokeStyle = gradientColor;
      ctx.lineWidth = 1.2;

      for (var i = 0; i < E.trails; i++) {
        if (lines[i]) {
          lines[i].update();
          lines[i].draw();
        }
      }

      // 2. Render Cyber Floating Particles
      for (var p = particles.length - 1; p >= 0; p--) {
        particles[p].update();
        particles[p].draw(ctx);
        if (particles[p].life <= 0) {
          particles.splice(p, 1);
        }
      }

      // 3. Draw Laser Reticle at Pointer Position
      if (pos.x > 0 && pos.y > 0) {
        ctx.strokeStyle = "rgba(57, 211, 83, 0.5)";
        ctx.lineWidth = 1;

        // Outer Reticle Circle
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 6, 0, Math.PI * 2);
        ctx.stroke();

        // Inner Glowing Laser Node
        ctx.fillStyle = "rgba(80, 250, 123, 0.9)";
        ctx.fillRect(pos.x - 1.5, pos.y - 1.5, 3, 3);
      }

      window.requestAnimationFrame(render);
    }
  }

  function resizeCanvas() {
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
  }

  function isMobileDevice() {
    return (
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(hover: none)").matches ||
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    );
  }

  const renderCanvas = function () {
    if (isMobileDevice()) return;

    const canvasElem = document.getElementById("canvas");
    if (!canvasElem) return;

    ctx = canvasElem.getContext("2d");
    if (!ctx) return;

    ctx.running = true;

    initLines();

    window.addEventListener("mousemove", onPointerMove);
    window.addEventListener("touchmove", onPointerMove);
    window.addEventListener("resize", resizeCanvas);

    resizeCanvas();
    render();
  };

  useEffect(() => {
    renderCanvas();

    return () => {
      if (ctx) {
        ctx.running = false;
        window.removeEventListener("mousemove", onPointerMove);
        window.removeEventListener("touchmove", onPointerMove);
        window.removeEventListener("resize", resizeCanvas);
      }
    };
  }, []);
};

export default useCanvasCursor;
