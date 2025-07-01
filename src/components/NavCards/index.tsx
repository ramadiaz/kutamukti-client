"use client";
import { ScrollShadow } from "@heroui/react";
import { ArrowCircleRightIcon, FolderOpenIcon } from "@phosphor-icons/react";
import { ReactNode, useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  pulsePhase: number;
}

interface FlowParticle {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  progress: number;
  speed: number;
  life: number;
}

const NavCards = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const nodesRef = useRef<Node[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const maxNodes = 30;
    const maxDistance = 120;
    const nodeSpeed = 0.3;

    const resizeCanvas = (): void => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
      }
    };

    const createNodes = (): void => {
      nodesRef.current = [];
      for (let i = 0; i < maxNodes; i++) {
        nodesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * nodeSpeed,
          vy: (Math.random() - 0.5) * nodeSpeed,
          radius: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.4 + 0.2,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    const updateNodes = (): void => {
      nodesRef.current.forEach((node: Node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));

        node.pulsePhase += 0.015;
      });
    };

    const drawNodes = (): void => {
      nodesRef.current.forEach((node: Node) => {
        const pulse = Math.sin(node.pulsePhase) * 0.3 + 0.7;
        const glowRadius = node.radius * (1 + pulse);

        const gradient = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          glowRadius * 2
        );
        gradient.addColorStop(
          0,
          `rgba(255, 255, 255, ${node.opacity * pulse * 1})`
        );
        gradient.addColorStop(
          0.5,
          `rgba(255, 255, 255, ${node.opacity * pulse * 1})`
        );
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, glowRadius * 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(255, 255, 255, ${node.opacity * pulse})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const drawConnections = (): void => {
      for (let i = 0; i < nodesRef.current.length; i++) {
        for (let j = i + 1; j < nodesRef.current.length; j++) {
          const nodeA = nodesRef.current[i];
          const nodeB = nodesRef.current[j];

          const distance = Math.sqrt(
            Math.pow(nodeA.x - nodeB.x, 2) + Math.pow(nodeA.y - nodeB.y, 2)
          );

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 1;

            const gradient = ctx.createLinearGradient(
              nodeA.x,
              nodeA.y,
              nodeB.x,
              nodeB.y
            );
            gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
            gradient.addColorStop(0.5, `rgba(255, 255, 255, ${opacity * 1.2})`);
            gradient.addColorStop(1, `rgba(255, 255, 255, ${opacity})`);

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.stroke();

            if (Math.random() < 0.003) {
              animateDataFlow(nodeA, nodeB);
            }
          }
        }
      }
    };

    const animateDataFlow = (nodeA: Node, nodeB: Node): void => {
      const flowParticle: FlowParticle = {
        startX: nodeA.x,
        startY: nodeA.y,
        endX: nodeB.x,
        endY: nodeB.y,
        progress: 0,
        speed: 0.025,
        life: 40,
      };

      const animateFlow = (): void => {
        if (flowParticle.life <= 0) return;

        flowParticle.progress += flowParticle.speed;
        flowParticle.life--;

        const x =
          flowParticle.startX +
          (flowParticle.endX - flowParticle.startX) * flowParticle.progress;
        const y =
          flowParticle.startY +
          (flowParticle.endY - flowParticle.startY) * flowParticle.progress;

        const alpha =
          (flowParticle.life / 40) *
          (1 - Math.abs(flowParticle.progress - 0.5) * 2) *
          0.8;
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, Math.PI * 2);
        ctx.fill();

        if (flowParticle.progress < 1) {
          requestAnimationFrame(animateFlow);
        }
      };

      animateFlow();
    };

    const animate = (): void => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      updateNodes();
      drawConnections();
      drawNodes();

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createNodes();
    animate();

    const handleResize = (): void => {
      resizeCanvas();
      createNodes();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto rounded-lg text-white bg-gradient-to-b from-emerald-700 from-40% to-emerald-50 p-8 overflow-hidden">
      {/* Network Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Content */}
      <div className="relative z-10 pt-4">
        <h2 className="text-2xl font-semibold pb-10">
          Layanan Berkualitas Untuk Masa Depan Digital
        </h2>
        <ScrollShadow className="w-full pb-4" orientation="horizontal">
          <div className="flex flex-row gap-4 w-max py-4 px-2">
            <Cards
              icon={<FolderOpenIcon size={50} weight="fill" />}
              title={"Sertifikasi"}
              desc={"Pembuatan Sertifikat menjadi lebih mudah dengan digital"}
            />
            <Cards
              icon={<FolderOpenIcon size={50} weight="fill" />}
              title={"Sertifikasi"}
              desc={"Pembuatan Sertifikat menjadi lebih mudah dengan digital"}
            />
            <Cards
              icon={<FolderOpenIcon size={50} weight="fill" />}
              title={"Sertifikasi"}
              desc={"Pembuatan Sertifikat menjadi lebih mudah dengan digital"}
            />
            <Cards
              icon={<FolderOpenIcon size={50} weight="fill" />}
              title={"Sertifikasi"}
              desc={"Pembuatan Sertifikat menjadi lebih mudah dengan digital"}
            />
            <Cards
              icon={<FolderOpenIcon size={50} weight="fill" />}
              title={"Sertifikasi"}
              desc={"Pembuatan Sertifikat menjadi lebih mudah dengan digital"}
            />
          </div>
        </ScrollShadow>
      </div>
    </div>
  );
};

const Cards = ({
  icon,
  title,
  desc,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
}) => {
  return (
    <div className="cursor-pointer px-4 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 w-3xs h-[270px] relative ring-2 ring-white/0 hover:ring-white hover:brightness-125 transition-all duration-300">
      <div className="py-6">
        {icon}
        <h3 className="text-lg font-semibold uppercase pt-10">{title}</h3>
        <p className="text-sm">{desc}</p>
      </div>
      <div className="absolute bottom-0 left-0 pb-6 px-4">
        <ArrowCircleRightIcon size={32} />
      </div>
    </div>
  );
};

export default NavCards;
