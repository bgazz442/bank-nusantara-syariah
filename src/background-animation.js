// Background Particle Animation - Cloud-like effect
class ParticleBackground {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) {
      this.canvas = document.createElement('canvas');
      this.canvas.id = canvasId;
      this.canvas.style.position = 'fixed';
      this.canvas.style.top = '0';
      this.canvas.style.left = '0';
      this.canvas.style.width = '100%';
      this.canvas.style.height = '100%';
      this.canvas.style.pointerEvents = 'none';
      this.canvas.style.zIndex = '-1';
      document.body.appendChild(this.canvas);
    }

    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.mouse = { x: null, y: null };
    this.animationId = null;

    this.init();
    this.animate();
    this.bindEvents();
  }

  init() {
    this.resizeCanvas();
    this.createParticles();
  }

  resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  createParticles() {
    this.particles = [];
    const particleCount = Math.floor((this.canvas.width * this.canvas.height) / 50000) + 50; // Further reduced count

    for (let i = 0; i < particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.2, // Even slower speed
        vy: (Math.random() - 0.5) * 0.2,
        radius: Math.random() * 1.5 + 0.5, // Smaller radius
        opacity: Math.random() * 0.1 + 0.03, // Lower opacity
        baseOpacity: Math.random() * 0.1 + 0.03,
        glow: Math.random() * 0.2 + 0.05, // Reduced glow
        depth: Math.random() // For depth effect
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.particles.forEach(particle => {
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Respawn when exiting canvas
      if (particle.x < -particle.radius) particle.x = this.canvas.width + particle.radius;
      if (particle.x > this.canvas.width + particle.radius) particle.x = -particle.radius;
      if (particle.y < -particle.radius) particle.y = this.canvas.height + particle.radius;
      if (particle.y > this.canvas.height + particle.radius) particle.y = -particle.radius;

      // Mouse interaction - subtle avoidance
      if (this.mouse.x !== null && this.mouse.y !== null) {
        const dx = particle.x - this.mouse.x;
        const dy = particle.y - this.mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 50) { // Small radius
          const force = (50 - distance) / 50;
          particle.x += (dx / distance) * force * 0.1;
          particle.y += (dy / distance) * force * 0.1;
        }
      }

      // Depth effect: adjust opacity and size
      const depthOpacity = particle.opacity * (0.5 + particle.depth * 0.5);
      const depthRadius = particle.radius * (0.8 + particle.depth * 0.4);

      // Draw particle with glow
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, depthRadius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(59, 130, 246, ${depthOpacity})`;
      this.ctx.shadowBlur = particle.glow * 15;
      this.ctx.shadowColor = 'rgba(59, 130, 246, 0.3)';
      this.ctx.fill();
    });

    this.animationId = requestAnimationFrame(() => this.animate());
  }

  bindEvents() {
    const handleMouseMove = (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    };

    const handleResize = () => {
      this.resizeCanvas();
      this.createParticles();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Store cleanup functions
    this.cleanup = () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (this.animationId) {
        cancelAnimationFrame(this.animationId);
      }
      if (this.canvas && this.canvas.parentNode) {
        this.canvas.parentNode.removeChild(this.canvas);
      }
    };
  }

  destroy() {
    if (this.cleanup) {
      this.cleanup();
    }
  }
}

// Export for use in React component
export default ParticleBackground;
