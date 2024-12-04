"use client";

import React, { useEffect, useRef } from "react";
import initializeScene  from "./WavyImage";
import "./WavyImage.css";

export default function WavyImage() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            // Correctly passing the container and image source
            initializeScene(containerRef.current, "../images/Hero.jpg");
        }
    }, []);

    return <div id="wavy-image-container" ref={containerRef}></div>;
}
