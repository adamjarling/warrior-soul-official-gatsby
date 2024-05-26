"use client";

import { Box } from "@radix-ui/themes";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BannerImage() {
  const MotionBox = motion(Box);

  return (
    <MotionBox
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 0.75,
      }}
      className="relative h-[58vh] md:h-[75vh]"
    >
      <Image
        src="/images/warrior-soul-promo-photo.jpeg"
        alt="Warrior Soul splash image"
        objectFit="cover"
        layout="fill"
        objectPosition="top"
      />
    </MotionBox>
  );
}
