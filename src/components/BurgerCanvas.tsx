"use client";

import React, { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 240;

export default function BurgerCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Preload images
    const loadImages = async () => {
      const imgArray: HTMLImageElement[] = new Array(FRAME_COUNT);
      let loadedCount = 0;

      for (let i = 1; i <= FRAME_COUNT; i++) {
        const img = new Image();
        const frameNumber = i.toString().padStart(3, "0");
        img.src = `/sequence/ezgif-frame-${frameNumber}.jpg`;

        await new Promise((resolve) => {
          img.onload = () => {
            loadedCount++;
            imgArray[i - 1] = img;
            if (loadedCount === FRAME_COUNT) {
              setImages(imgArray);
              setLoaded(true);
            }
            resolve(true);
          };
          img.onerror = () => {
            resolve(true);
          };
        });
      }
    };

    loadImages();
  }, []);

  useEffect(() => {
    if (!loaded || !canvasRef.current || images.length === 0) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    const render = (frameIndex: number) => {
      const img = images[frameIndex];
      if (!img) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const imgAspect = img.width / img.height;
      const canvasAspect = canvas.width / canvas.height;

      let drawWidth, drawHeight, offsetX, offsetY;

      // Scale to fill the right 60% of the canvas
      const targetWidth = canvas.width * 0.65;
      const targetHeight = canvas.height;
      const targetAspect = targetWidth / targetHeight;

      if (targetAspect > imgAspect) {
        drawWidth = targetWidth;
        drawHeight = targetWidth / imgAspect;
        offsetX = canvas.width - drawWidth;
        offsetY = (canvas.height - drawHeight) / 2;
      } else {
        drawHeight = targetHeight;
        drawWidth = targetHeight * imgAspect;
        // Right-align: push to the right edge
        offsetX = canvas.width - drawWidth + (drawWidth - targetWidth) * 0.3;
        offsetY = 0;
      }

      context.fillStyle = "#060709";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    // Render initial frame
    render(0);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

      if (maxScroll <= 0) return;

      const scrollFraction = Math.max(0, Math.min(1, scrollTop / maxScroll));

      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.floor(scrollFraction * FRAME_COUNT)
      );

      requestAnimationFrame(() => render(frameIndex));
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", () => {
      handleScroll();
      // force re-render of current frame on resize
      const scrollTop = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        const scrollFraction = Math.max(0, Math.min(1, scrollTop / maxScroll));
        const frameIndex = Math.min(FRAME_COUNT - 1, Math.floor(scrollFraction * FRAME_COUNT));
        render(frameIndex);
      } else {
        render(0);
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [loaded, images]);

  return (
    <div className="fixed top-0 left-0 z-[-1] flex h-screen w-screen items-center justify-center bg-bg-primary">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(5,5,5,0.92) 0%, rgba(5,5,5,0.70) 30%, rgba(5,5,5,0.15) 55%, rgba(5,5,5,0) 70%)",
        }}
        aria-hidden="true"
      />
      {!loaded && (
        <div className="absolute animate-pulse text-sm tracking-[0.1em] text-text-secondary">
          Loading Experience...
        </div>
      )}
      <canvas ref={canvasRef} className="block h-full w-full object-cover" />
    </div>
  );
}
