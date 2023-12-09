// components/InfiniteScrollImages.tsx

import React from "react";
import Image from "next/image";

const imageList = [
  {
    src: "/images/img1.png",
    alt: "Next",
  },
  {
    src: "/images/img2.png",
    alt: "React",
  },
  {
    src: "/images/img3.png",
    alt: "Prisma",
  },
  {
    src: "/images/img4.png",
    alt: "Tailwind",
  },
  {
    src: "/images/img5.png",
    alt: "JS",
  },
  {
    src: "/images/img6.png",
    alt: "TS",
  },
  {
    src: "/images/img7.png",
    alt: "Node",
  },
  {
    src: "/images/img8.png",
    alt: "Nest",
  },
  {
    src: "/images/img9.png",
    alt: "PSQL",
  },
  {
    src: "/images/img10.png",
    alt: "Docker",
  },
];

const InfiniteScrollImages = () => {
  const combinedImageList = [...imageList, ...imageList];
  return (
    <div className="flex overflow-hidden space-x-16 group">
      <div className="flex space-x-16 animate-loop-scroll group-hover:paused">
        {combinedImageList.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            width={130}
            height={120}
            loading="lazy"
            // layout="fixed"
          />
        ))}
      </div>
      {/* <div
        className="flex space-x-16 animate-loop-scroll group-hover:paused"
        aria-hidden="true"
      >
        {imageList.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            width={130}
            height={120}
            loading="lazy"
            // layout="fixed"
          />
        ))}
      </div> */}
    </div>
  );
};

export default InfiniteScrollImages;
