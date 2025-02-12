import { useEffect, useState } from "react";

export default function CoffeeCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className="fixed pointer-events-none w-10 h-10"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
          zIndex: 1000,
        }}
      >
        <img src="/coffee-cup.png" alt="Coffee Cursor" className="w-full h-full" />
      </div>
    </>
  );
}
