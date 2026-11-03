import { useEffect, useRef, useState, type ReactElement } from "react";

export interface CardPropType {
  title: string;
  description: string;
  icon: ReactElement;
  ref: React.RefObject<HTMLDivElement>;
  // position: { x: number; y: number };
}

const Card = ({ title, description, icon, ref }: CardPropType) => {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: -200,
    y: -200,
  });
  const containerRef = useRef<HTMLDivElement | null>(null);

  const spotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handlCoordinates = (e: MouseEvent) => {
      const parrentRect = ref.current?.getBoundingClientRect();
      const innerRect = containerRef.current?.getBoundingClientRect();

      if (!parrentRect || !innerRect) return;

      const mouseX = e.clientX - parrentRect.left;
      const mouseY = e.clientY - parrentRect.top;

      const innerX = innerRect.left - parrentRect.left;
      const innerY = innerRect.top - parrentRect.top;

      console.log(innerRect.left, parrentRect.left);

      setPosition({
        x: mouseX - innerX,
        y: mouseY - innerY,
      });
    };
    const container = ref.current;

    if (!container) return;

    container.addEventListener("mousemove", handlCoordinates);

    return () => container.removeEventListener("mousemove", handlCoordinates);
  }, [position]);

  return (
    <div
      ref={containerRef}
      className="p-4 relative text-neutral-200 overflow-hidden rounded-md  border-neutral-700   bg-neutral-800/50"
    >
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          // opacity: hovered ? 1 : 0,
          background: `radial-gradient(
            140px circle at ${position.x}px ${position.y}px,
            #6c34ed,
            #ec4899,
            #ec4899,
            #6c34ed,
            #a78bfa,
            
            transparent 100%
          )`,
        }}
      />

      {/* Card background */}
      <div className="absolute inset-px rounded-[5px] bg-neutral-900" />
      <div
        ref={spotRef}
        style={{
          position: "absolute",
          top: position.y,
          left: position.x,
          transform: "translate(-50%, -50%)",
        }}
        className="size-44 blur-2xl   absolute  rounded-full bg-neutral-700"
      />
      <span className="size-6  relative z-10  ">{icon}</span>
      <h3 className="text-xl  relative z-10font-semibold mt-4 font-mono text- wrap-break-word">
        {title}
      </h3>
      <p className="text-sm  relative z-10 font-mono text- wrap-break-word">
        {description}
      </p>
    </div>
  );
};

export default Card;
