// Custom Cursor Animation - Neon RGB Futuristic Cursor
class CustomCursor {
  constructor() {
    this.cursor = null;
    this.mouseX = 0;
    this.mouseY = 0;
    this.cursorX = 0;
    this.cursorY = 0;
    this.animationId = null;
    this.rgbAngle = 0;
    this.init();
  }

  init() {
    // Hide default cursor on all elements first
    const style = document.createElement('style');
    style.textContent = 'html, body, * { cursor: none !important; }';
    document.head.appendChild(style);

    // Create cursor element
    this.cursor = document.createElement('div');
    this.cursor.className = 'cursor-custom';
    this.cursor.style.width = '20px';
    this.cursor.style.height = '20px';
    this.cursor.style.borderRadius = '50%';
    this.cursor.style.position = 'fixed';
    this.cursor.style.top = '0';
    this.cursor.style.left = '0';
    this.cursor.style.pointerEvents = 'none';
    this.cursor.style.zIndex = '999999';
    this.cursor.style.transform = 'translate(-50%, -50%)';
    this.cursor.style.transition = 'transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94), width 0.2s ease, height 0.2s ease';

    // Create inner circle
    const innerCircle = document.createElement('div');
    innerCircle.style.width = '6px';
    innerCircle.style.height = '6px';
    innerCircle.style.borderRadius = '50%';
    innerCircle.style.position = 'absolute';
    innerCircle.style.top = '50%';
    innerCircle.style.left = '50%';
    innerCircle.style.transform = 'translate(-50%, -50%)';
    innerCircle.style.background = '#ffffff';

    this.cursor.appendChild(innerCircle);
    document.body.appendChild(this.cursor);

    // Set initial position and opacity
    this.mouseX = window.innerWidth / 2;
    this.mouseY = window.innerHeight / 2;
    this.cursorX = this.mouseX;
    this.cursorY = this.mouseY;
    this.cursor.style.left = this.cursorX + "px";
    this.cursor.style.top = this.cursorY + "px";
    this.cursor.style.opacity = "1";

    this.bindEvents();
    this.animate();
    this.animateRGB();
  }

  animate() {
    // Smooth magnetic follow with easing - increased speed for better responsiveness
    this.cursorX += (this.mouseX - this.cursorX) * 0.15;
    this.cursorY += (this.mouseY - this.cursorY) * 0.15;

    this.cursor.style.left = this.cursorX + "px";
    this.cursor.style.top = this.cursorY + "px";

    this.animationId = requestAnimationFrame(() => this.animate());
  }

  animateRGB() {
    // Animate RGB colors
    this.rgbAngle += 2;
    const r = Math.sin(this.rgbAngle * Math.PI / 180) * 127 + 128;
    const g = Math.sin((this.rgbAngle + 120) * Math.PI / 180) * 127 + 128;
    const b = Math.sin((this.rgbAngle + 240) * Math.PI / 180) * 127 + 128;

    this.cursor.style.boxShadow = `0 0 20px rgba(${r}, ${g}, ${b}, 0.8), 0 0 40px rgba(${r}, ${g}, ${b}, 0.4), 0 0 60px rgba(${r}, ${g}, ${b}, 0.2)`;

    requestAnimationFrame(() => this.animateRGB());
  }

  bindEvents() {
    document.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
      this.cursor.style.opacity = "1";
    });

    // Hover effect for interactive elements
    document.querySelectorAll('a, button, [role="button"], input, textarea, [tabindex]:not([tabindex="-1"])').forEach(el => {
      el.addEventListener('mouseenter', () => {
        this.cursor.style.width = "40px";
        this.cursor.style.height = "40px";
        this.cursor.style.boxShadow = this.cursor.style.boxShadow.replace(/rgba\([^)]+\)/g, 'rgba(255, 255, 255, 1)');
      });

      el.addEventListener('mouseleave', () => {
        this.cursor.style.width = "20px";
        this.cursor.style.height = "20px";
      });
    });

    // Click effect
    document.addEventListener('mousedown', () => {
      this.cursor.style.transform = "translate(-50%, -50%) scale(0.8)";
    });

    document.addEventListener('mouseup', () => {
      this.cursor.style.transform = "translate(-50%, -50%) scale(1)";
    });

    // Store cleanup functions
    this.cleanup = () => {
      if (this.animationId) {
        cancelAnimationFrame(this.animationId);
      }
      if (this.cursor && this.cursor.parentNode) {
        this.cursor.parentNode.removeChild(this.cursor);
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
export default CustomCursor;
