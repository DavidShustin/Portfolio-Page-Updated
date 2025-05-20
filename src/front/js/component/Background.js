import React, { useEffect, useRef } from "react";
import "../../styles/Background.css";

const Background = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const resize = () => {
      if (containerRef.current) {
        containerRef.current.style.height = `${document.body.scrollHeight}px`;
      }
    };

    resize(); // Initial run
    window.addEventListener("resize", resize);
    // window.addEventListener("scroll", resize);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", resize);
    };
  }, []);

  return (
    <div className="background-blobs" ref={containerRef}>
      <div className="blob"></div>
      <div className="blob"></div>
      <div className="blob"></div>
      <div className="blob"></div>
      <div className="blob"></div>
      <div className="blob"></div>
    </div>
  );
};

export default Background;
