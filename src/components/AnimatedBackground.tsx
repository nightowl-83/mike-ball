import { useState, useEffect, useRef } from 'react';

type BackgroundState = 'floating' | 'vertices' | 'grid' | 'cube' | 'wave';

interface AnimatedBackgroundProps {
  initialState?: BackgroundState;
  enableScrollTrigger?: boolean;
  scrollThresholds?: {
    floating: number;
    vertices: number;
    grid: number;
    cube: number;
  };
  onStateChange?: (newState: BackgroundState) => void;
  showControls?: boolean;
}

interface Particle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  baseTargetX: number;
  baseTargetY: number;
  floatOffsetX: number;
  floatOffsetY: number;
  floatSpeedX: number;
  floatSpeedY: number;
  floatRangeX: number;
  floatRangeY: number;
  glowIntensity: number;
  glowSpeed: number;
  shouldGlow: boolean;
  glowCooldown: number;
  size: number;
  z?: number;
}

export default function AnimatedBackground({ 
  initialState = 'floating',
  enableScrollTrigger = false,
  scrollThresholds = { floating: 0, vertices: 25, grid: 50, cube: 75 },
  onStateChange = undefined,
  showControls = false
}: AnimatedBackgroundProps) {
  const [state, setState] = useState<BackgroundState>(initialState);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const rotationRef = useRef({ x: 0.3, y: 0.4 });
  const waveTimeRef = useRef(0);

  // Update state when initialState prop changes
  useEffect(() => {
    setState(initialState);
  }, [initialState]);

  // Scroll-based state management
  useEffect(() => {
    if (!enableScrollTrigger) return;

    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      let newState: BackgroundState = 'floating';
      if (scrollPercent >= scrollThresholds.cube) {
        newState = 'cube';
      } else if (scrollPercent >= scrollThresholds.grid) {
        newState = 'grid';
      } else if (scrollPercent >= scrollThresholds.vertices) {
        newState = 'vertices';
      }
      
      if (newState !== state) {
        setState(newState);
        if (onStateChange) onStateChange(newState);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [enableScrollTrigger, scrollThresholds, state, onStateChange]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    const particleCount = 100;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    if (particlesRef.current.length === 0) {
      particlesRef.current = Array.from({ length: particleCount }, () => {
        // Create a more cloud-like distribution using gaussian/normal distribution
        const randomGaussian = () => {
          let u = 0, v = 0;
          while(u === 0) u = Math.random();
          while(v === 0) v = Math.random();
          return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
        };
        
        const spreadX = 40;
        const spreadY = 40;
        const x = centerX + randomGaussian() * spreadX;
        const y = centerY + randomGaussian() * spreadY;
        
        return {
          x: x,
          y: y,
          targetX: x,
          targetY: y,
          baseTargetX: x,
          baseTargetY: y,
          floatOffsetX: Math.random() * Math.PI * 2,
          floatOffsetY: Math.random() * Math.PI * 2,
          floatSpeedX: 0.075 + Math.random() * 0.125,
          floatSpeedY: 0.075 + Math.random() * 0.125,
          floatRangeX: 5 + Math.random() * 7.5,
          floatRangeY: 5 + Math.random() * 7.5,
          glowIntensity: Math.random(),
          glowSpeed: 0.01 + Math.random() * 0.02,
          shouldGlow: Math.random() > 0.95,
          glowCooldown: 0,
          size: 0.8 + Math.random() * 0.8
        };
      });
    }

    // Calculate grid positions
    const calculateGridPositions = () => {
      const cols = 12;
      const rows = 8;
      const totalCells = cols * rows;
      const paddingX = 100;
      const paddingY = 80;
      const availableWidth = canvas.width - paddingX * 2;
      const availableHeight = canvas.height - paddingY * 2;
      const spacingX = availableWidth / (cols - 1);
      const spacingY = availableHeight / (rows - 1);
      const startX = paddingX;
      const startY = paddingY;
      
      return particlesRef.current.map((_, i) => {
        if (i >= totalCells) {
          return {
            x: startX + (cols - 1) * spacingX,
            y: startY + (rows - 1) * spacingY
          };
        }
        const col = i % cols;
        const row = Math.floor(i / cols);
        return {
          x: startX + col * spacingX,
          y: startY + row * spacingY
        };
      });
    };

    // Calculate vertices grid positions (just dots, no lines) - perfect squares
    const calculateVerticesPositions = () => {
      const cols = 12;
      const rows = 8;
      const totalCells = cols * rows;
      const paddingX = 100;
      const paddingY = 80;
      
      const availableWidth = canvas.width - paddingX * 2;
      const availableHeight = canvas.height - paddingY * 2;
      
      const squareSpacing = Math.min(
        availableWidth / (cols - 1),
        availableHeight / (rows - 1)
      );
      
      const gridWidth = squareSpacing * (cols - 1);
      const gridHeight = squareSpacing * (rows - 1);
      const startX = (canvas.width - gridWidth) / 2;
      const startY = (canvas.height - gridHeight) / 2;
      
      return particlesRef.current.map((_, i) => {
        if (i >= totalCells) {
          return {
            x: startX + (cols - 1) * squareSpacing,
            y: startY + (rows - 1) * squareSpacing
          };
        }
        const col = i % cols;
        const row = Math.floor(i / cols);
        return {
          x: startX + col * squareSpacing,
          y: startY + row * squareSpacing
        };
      });
    };

    // 3D rotation function
    const rotate3D = (x: number, y: number, z: number, rotX: number, rotY: number): [number, number, number] => {
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const y1 = y * cosX - z * sinX;
      const z1 = y * sinX + z * cosX;
      
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const x1 = x * cosY + z1 * sinY;
      const z2 = -x * sinY + z1 * cosY;
      
      return [x1, y1, z2];
    };

    // Calculate 3D cube positions
    const calculateCubePositions = (rotX: number, rotY: number) => {
      const cubeSize = Math.min(canvas.width, canvas.height) * 0.125;
      const cX = canvas.width / 2;
      const cY = canvas.height / 2;
      
      const vertices: [number, number, number][] = [
        [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
        [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]
      ].map(([x, y, z]) => [x * cubeSize, y * cubeSize, z * cubeSize]);

      const edges: [number, number][] = [
        [0, 1], [1, 2], [2, 3], [3, 0],
        [4, 5], [5, 6], [6, 7], [7, 4],
        [0, 4], [1, 5], [2, 6], [3, 7]
      ];

      const pointsPerEdge = Math.floor(particlesRef.current.length / edges.length);
      const positions: { x: number; y: number; z: number }[] = [];

      edges.forEach(([startIdx, endIdx], edgeIdx) => {
        const start = vertices[startIdx];
        const end = vertices[endIdx];
        
        const numPoints = edgeIdx < edges.length - 1 ? pointsPerEdge : 
          particlesRef.current.length - positions.length;

        for (let i = 0; i < numPoints; i++) {
          const t = i / (numPoints - 1 || 1);
          const x = start[0] + (end[0] - start[0]) * t;
          const y = start[1] + (end[1] - start[1]) * t;
          const z = start[2] + (end[2] - start[2]) * t;
          
          const rotatedPoint = rotate3D(x, y, z, rotX, rotY);
          const perspective = 600;
          const scale = perspective / (perspective + rotatedPoint[2]);
          positions.push({
            x: cX + rotatedPoint[0] * scale,
            y: cY + rotatedPoint[1] * scale,
            z: rotatedPoint[2]
          });
        }
      });

      return positions;
    };

    // Calculate wave positions
    const calculateWavePositions = (time: number) => {
      const cY = canvas.height / 2;
      const waveLength = canvas.width;
      const amplitude = 60;
      const frequency = 0.003;
      const speed = 0.5;
      
      return particlesRef.current.map((_, i) => {
        const x = (i / particlesRef.current.length) * waveLength;
        const offset = Math.sin(x * frequency + time * speed) * amplitude;
        const offset2 = Math.sin(x * frequency * 0.5 + time * speed * 0.7) * (amplitude * 0.5);
        
        return {
          x: x,
          y: cY + offset + offset2
        };
      });
    };

    // Animation loop
    const animate = () => {
      waveTimeRef.current += 0.016;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update rotation for cube state
      if (state === 'cube') {
        rotationRef.current.y += 0.001;
        rotationRef.current.x += 0.00067;
      }
      
      const gridPositions = state === 'grid' ? calculateGridPositions() : null;
      const verticesPositions = state === 'vertices' ? calculateVerticesPositions() : null;
      const cubePositions = state === 'cube' ? calculateCubePositions(rotationRef.current.x, rotationRef.current.y) : null;
      const wavePositions = state === 'wave' ? calculateWavePositions(waveTimeRef.current) : null;

      // Draw connecting lines in grid state
      if (state === 'grid') {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = 0.5;
        
        const cols = 12;
        particlesRef.current.forEach((particle, i) => {
          if (i >= 96) return;
          
          const col = i % cols;
          
          if (col < cols - 1) {
            const nextParticle = particlesRef.current[i + 1];
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(nextParticle.x, nextParticle.y);
            ctx.stroke();
          }
          
          if (i + cols < particlesRef.current.length) {
            const belowParticle = particlesRef.current[i + cols];
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(belowParticle.x, belowParticle.y);
            ctx.stroke();
          }
        });
      }

      // Draw connecting lines in cube state
      if (state === 'cube') {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.lineWidth = 0.5;
        
        for (let i = 0; i < particlesRef.current.length - 1; i++) {
          const particle = particlesRef.current[i];
          const nextParticle = particlesRef.current[i + 1];
          
          const edgeSize = Math.floor(particlesRef.current.length / 12);
          if ((i + 1) % edgeSize !== 0 || i === particlesRef.current.length - 2) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(nextParticle.x, nextParticle.y);
            ctx.stroke();
          }
        }
      }

      // Draw connecting line in wave state
      if (state === 'wave') {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.lineWidth = 1;
        
        ctx.beginPath();
        particlesRef.current.forEach((particle, i) => {
          if (i === 0) {
            ctx.moveTo(particle.x, particle.y);
          } else {
            ctx.lineTo(particle.x, particle.y);
          }
        });
        ctx.stroke();
      }

      // Update and draw particles
      particlesRef.current.forEach((particle, i) => {
        if (state === 'floating') {
          particle.targetX = particle.baseTargetX;
          particle.targetY = particle.baseTargetY;
        } else if (state === 'vertices' && verticesPositions) {
          particle.targetX = verticesPositions[i].x;
          particle.targetY = verticesPositions[i].y;
        } else if (state === 'grid' && gridPositions) {
          particle.targetX = gridPositions[i].x;
          particle.targetY = gridPositions[i].y;
        } else if (state === 'cube' && cubePositions && cubePositions[i]) {
          particle.targetX = cubePositions[i].x;
          particle.targetY = cubePositions[i].y;
          particle.z = cubePositions[i].z;
        } else if (state === 'wave' && wavePositions && wavePositions[i]) {
          particle.targetX = wavePositions[i].x;
          particle.targetY = wavePositions[i].y;
        }

        // Smooth transition to target (2.5s timing = ~0.016 easing per frame)
        const easing = 0.02;
        particle.x += (particle.targetX - particle.x) * easing;
        particle.y += (particle.targetY - particle.y) * easing;

        let displayX = particle.x;
        let displayY = particle.y;
        
        if (state === 'floating') {
          particle.floatOffsetX += particle.floatSpeedX * 0.016;
          particle.floatOffsetY += particle.floatSpeedY * 0.016;
          
          displayX += Math.sin(particle.floatOffsetX) * particle.floatRangeX;
          displayY += Math.cos(particle.floatOffsetY) * particle.floatRangeY;
        }

        // Manage glow cooldown and randomization
        if (particle.glowCooldown > 0) {
          particle.glowCooldown -= 0.016;
        }
        
        if (!particle.shouldGlow && particle.glowCooldown <= 0 && Math.random() < 0.0001) {
          particle.shouldGlow = true;
          particle.glowIntensity = 0;
          particle.glowSpeed = Math.abs(particle.glowSpeed);
        }

        if (particle.shouldGlow) {
          particle.glowIntensity += particle.glowSpeed;
          if (particle.glowIntensity >= 1) {
            particle.glowSpeed *= -1;
          }
          if (particle.glowIntensity <= 0 && particle.glowSpeed < 0) {
            particle.shouldGlow = false;
            particle.glowCooldown = 10 + Math.random() * 20;
            particle.glowIntensity = 0;
          }
        }

        const baseAlpha = 0.6;
        const glowAlpha = particle.shouldGlow ? particle.glowIntensity * 0.4 : 0;
        
        // Draw glow
        if (particle.shouldGlow && particle.glowIntensity > 0.3) {
          const gradient = ctx.createRadialGradient(
            displayX, displayY, 0,
            displayX, displayY, particle.size * 4
          );
          gradient.addColorStop(0, `rgba(255, 255, 255, ${glowAlpha})`);
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(displayX, displayY, particle.size * 4, 0, Math.PI * 2);
          ctx.fill();
        }

        // Draw particle core
        ctx.fillStyle = `rgba(255, 255, 255, ${baseAlpha + glowAlpha})`;
        ctx.beginPath();
        ctx.arc(displayX, displayY, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [state]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
      />
      
      {/* Control buttons - for testing */}
      {showControls && (
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10 flex gap-4">
          <button
            onClick={() => setState('floating')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              state === 'floating'
                ? 'bg-primary text-primary-foreground shadow-lg'
                : 'bg-secondary/50 text-secondary-foreground hover:bg-secondary'
            }`}
          >
            Floating
          </button>
          <button
            onClick={() => setState('vertices')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              state === 'vertices'
                ? 'bg-primary text-primary-foreground shadow-lg'
                : 'bg-secondary/50 text-secondary-foreground hover:bg-secondary'
            }`}
          >
            Vertices
          </button>
          <button
            onClick={() => setState('grid')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              state === 'grid'
                ? 'bg-primary text-primary-foreground shadow-lg'
                : 'bg-secondary/50 text-secondary-foreground hover:bg-secondary'
            }`}
          >
            Grid
          </button>
          <button
            onClick={() => setState('cube')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              state === 'cube'
                ? 'bg-primary text-primary-foreground shadow-lg'
                : 'bg-secondary/50 text-secondary-foreground hover:bg-secondary'
            }`}
          >
            Cube
          </button>
          <button
            onClick={() => setState('wave')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              state === 'wave'
                ? 'bg-primary text-primary-foreground shadow-lg'
                : 'bg-secondary/50 text-secondary-foreground hover:bg-secondary'
            }`}
          >
            Wave
          </button>
        </div>
      )}
    </div>
  );
}
