import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import "../../styles/tiltedCard.css";

const springValues = {
    damping: 30,
    stiffness: 100,
    mass: 2,
};

export default function TiltedCard({
    imageSrc,
    altText = "Tilted card image",
    captionText = "",
    containerHeight = "300px",
    containerWidth = "100%",
    imageHeight = "300px",
    imageWidth = "300px",
    scaleOnHover = 1.2,
    rotateAmplitude = 20,
    showMobileWarning = true,
    showTooltip = true,
    overlayContent = null,
    displayOverlayContent = false,
}) {
    const ref = useRef(null);

    const rotateX = useSpring(useMotionValue(0), springValues);
    const rotateY = useSpring(useMotionValue(0), springValues);
    const scale = useSpring(1, springValues);
    const rawOpacity = useMotionValue(0);
    const opacity = useSpring(rawOpacity, springValues);

    const x = useMotionValue(0); // ✅ declared
    const y = useMotionValue(0); // ✅ declared
    const rotateCaption = useSpring(0, springValues); // ✅ replaced rotateFigcaption

    const [lastY, setLastY] = useState(0);

    function handleMouse(e) {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;

        const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
        const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

        rotateX.set(rotationX);
        rotateY.set(rotationY);

        x.set(e.clientX - rect.left);
        y.set(e.clientY - rect.top);

        const velocityY = offsetY - lastY;
        rotateCaption.set(-velocityY * 0.6);
        setLastY(offsetY);
    }

    function handleMouseEnter() {
        scale.set(scaleOnHover);
        opacity.set(1);
    }

    function handleMouseLeave() {
        opacity.set(0);
        scale.set(1);
        rotateX.set(0);
        rotateY.set(0);
        rotateCaption.set(0);
    }

    return (
        <figure
            ref={ref}
            className="tilted-card-figure"
            style={{
                height: containerHeight,
                width: containerWidth,
            }}
            onMouseMove={handleMouse}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            

            <motion.div
                className="tilted-card-inner"
                style={{
                    width: imageWidth,
                    height: imageHeight,
                    rotateX,
                    rotateY,
                    scale,
                }}
            >
                <motion.img
                    src={imageSrc}
                    alt={altText}
                    className="tilted-card-img"
                    style={{
                        width: imageWidth,
                        height: imageHeight,
                    }}
                />

                {displayOverlayContent && overlayContent && (
                    <motion.div className="tilted-card-overlay">
                        {overlayContent}
                    </motion.div>
                )}

                {showTooltip && (
                    <motion.figcaption
                        className="tilted-card-caption"
                        style={{ rotate: rotateCaption }}
                    >
                        {captionText}
                    </motion.figcaption>
                )}
            </motion.div>
        </figure>
    );
}