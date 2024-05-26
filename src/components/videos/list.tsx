"use client";

import { Grid } from "@radix-ui/themes";
import { Metadata } from "next";
import { motion } from "framer-motion";

export const metadata: Metadata = {
  title: "Videos",
};

const videos = [
  {
    src: "https://www.youtube.com/embed/3wpXpg3IPkc",
    title: "Punk And Belligerent (live on Mad TV Greece)",
  },
  {
    src: "https://www.youtube.com/embed/_IPUaeXJifY",
    title: "Lets Get Wasted",
  },
  {
    src: "https://www.youtube.com/embed/iT1muWE8RzA",
    title: "Love Destruction",
  },
  {
    src: "https://www.youtube.com/embed/QbIYaFvId5Q",
    title: "The Drug",
  },
  {
    src: "https://www.youtube.com/embed/zT-DBDhEBCE",
    title: "We Cry Out",
  },
  {
    src: "https://www.youtube.com/embed/3apLLIaULD8",
    title: "I Wanna Get Some",
  },
  {
    src: "https://www.youtube.com/embed/i10laVcSuAg",
    title: "Rotten Soul Live - Dynamo '95",
  },
  {
    src: "https://www.youtube.com/embed/4nurQy-oyZg",
    title: "Downtown",
  },
  {
    src: "https://www.youtube.com/embed/kM9WusAG854",
    title: "Lullaby",
  },
  {
    src: "https://www.youtube.com/embed/hdhZdO8rt5Y",
    title: "The Wasteland (with intro)",
  },

  {
    src: "https://www.youtube.com/embed/GaDsh0IZ020",
    title: "Losers",
  },
];

export default function VideosList() {
  return (
    <Grid columns={"1"} gap={"4"}>
      {videos.map((video) => (
        <motion.iframe
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          key={video.title}
          className="aspect-video w-full"
          src={video.src}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></motion.iframe>
      ))}
    </Grid>
  );
}
