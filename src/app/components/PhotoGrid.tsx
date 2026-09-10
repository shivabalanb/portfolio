"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export const CENTER_IMAGES = [
  "/splash/hackathon.jpg",
  "/splash/hiking2.jpg",
  "/splash/running.jpg",
];

export const POOL_IMAGES = [
  "/splash/balcony.jpg",
  "/splash/bouldering.jpg",
  "/splash/city.jpg",
  "/splash/hiking.jpg",
  "/splash/profile2.jpg",
  "/splash/profile3.jpg",
  "/splash/skyline.jpg",
  "/splash/soccer.jpg",
  "/splash/study.jpg",
  "/splash/swoosh.jpg",
  "/splash/union.jpg",
  "/splash/work.jpg",
];

interface PhotoCardProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

const CORNER_STYLES = [
  "top-1.5 left-1.5 border-t border-l",
  "top-1.5 right-1.5 border-t border-r",
  "bottom-1.5 left-1.5 border-b border-l",
  "bottom-1.5 right-1.5 border-b border-r",
];

const PhotoCard = ({
  src,
  alt,
  className = "",
  priority = false,
}: PhotoCardProps) => {
  const [layerA, setLayerA] = useState(src);
  const [layerB, setLayerB] = useState(src);
  const [activeLayer, setActiveLayer] = useState<"A" | "B">("A");

  useEffect(() => {
    if (activeLayer === "A") {
      if (src !== layerA) {
        setLayerB(src);
        setActiveLayer("B");
      }
    } else {
      if (src !== layerB) {
        setLayerA(src);
        setActiveLayer("A");
      }
    }
  }, [src, activeLayer, layerA, layerB]);

  return (
    <div className={`relative w-full h-full overflow-hidden bg-neutral-900 ${className}`}>
      <Image
        src={layerA}
        alt={alt}
        fill
        priority={priority}
        className={`object-cover transition-opacity duration-1000 ease-in-out ${
          activeLayer === "A"
            ? "opacity-100 z-10"
            : "opacity-0 z-0 pointer-events-none"
        }`}
        sizes="(max-width: 768px) 50vw, 350px"
      />
      <Image
        src={layerB}
        alt={alt}
        fill
        className={`object-cover transition-opacity duration-1000 ease-in-out ${
          activeLayer === "B"
            ? "opacity-100 z-10"
            : "opacity-0 z-0 pointer-events-none"
        }`}
        sizes="(max-width: 768px) 50vw, 350px"
      />

      {CORNER_STYLES.map((pos) => (
        <div key={pos} className={`absolute w-2 h-2 border-white/60 pointer-events-none z-20 ${pos}`} />
      ))}
    </div>
  );
};

const CENTER_ROTATION_INTERVAL_MS = 8000;
const OUTER_ROTATION_INTERVAL_MS = 4500;

const OuterColumn = ({ photos, altPrefix }: { photos: [string, string]; altPrefix: string }) => (
  <div className="col-span-1 sm:col-span-3 flex flex-col gap-0">
    {photos.map((src, idx) => (
      <div key={idx} className="h-[120px] sm:h-[210px]">
        <PhotoCard
          src={src}
          alt={`${altPrefix} ${idx === 0 ? "top" : "bottom"} photo`}
          className="h-full"
        />
      </div>
    ))}
  </div>
);

const PhotoGrid = ({ className = "" }: { className?: string }) => {
  const [centerIdx, setCenterIdx] = useState(0);
  const [outerPhotos, setOuterPhotos] = useState<[string, string, string, string]>([
    POOL_IMAGES[0],
    POOL_IMAGES[1],
    POOL_IMAGES[2],
    POOL_IMAGES[3],
  ]);

  useEffect(() => {
    if (CENTER_IMAGES.length <= 1) return;
    const timer = setInterval(() => {
      setCenterIdx((prev) => (prev + 1) % CENTER_IMAGES.length);
    }, CENTER_ROTATION_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setOuterPhotos((current) => {
        const slotIndex = Math.floor(Math.random() * current.length);
        const available = POOL_IMAGES.filter((img) => !current.includes(img));
        if (available.length === 0) return current;

        const nextPhoto = available[Math.floor(Math.random() * available.length)];
        const updated = [...current] as [string, string, string, string];
        updated[slotIndex] = nextPhoto;
        return updated;
      });
    }, OUTER_ROTATION_INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`w-full mx-auto ${className}`}>
      <div className="grid grid-cols-2 sm:grid-cols-12 gap-0 items-stretch justify-center overflow-hidden shadow-md rounded-lg">
        <OuterColumn photos={[outerPhotos[0], outerPhotos[1]]} altPrefix="Left" />

        <div className="col-span-2 sm:col-span-6 order-first sm:order-none">
          <div className="h-[240px] sm:h-[420px] w-full">
            <PhotoCard
              src={CENTER_IMAGES[centerIdx]}
              alt="Shiva Balathandayuthapani"
              priority
              className="h-full"
            />
          </div>
        </div>

        <OuterColumn photos={[outerPhotos[2], outerPhotos[3]]} altPrefix="Right" />
      </div>
    </div>
  );
};

export default PhotoGrid;
