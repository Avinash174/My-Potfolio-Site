import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e) => {
      if (e.target.closest("button, a, .card")) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest("button, a, .card")) {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-emerald-500 pointer-events-none z-[9999] hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering
            ? "rgba(16, 185, 129, 0.1)"
            : "transparent",
          transition: {
            scale: { type: "spring", stiffness: 300, damping: 20 },
          },
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-emerald-500 rounded-full pointer-events-none z-[10000] hidden md:block"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 40 }}
      />
    </>
  );
};
