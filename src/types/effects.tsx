export interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  pulsePhase: number;
}

export interface FlowParticle {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  progress: number;
  speed: number;
  life: number;
}
