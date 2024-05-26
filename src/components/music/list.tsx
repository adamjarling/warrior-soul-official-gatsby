"use client";

import { Button, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

import Image from "next/image";
import { Metadata } from "next";
import { albums } from "@/app/music/discography";
import { shuffle } from "@/lib/shuffle";

export const metadata: Metadata = {
  title: "Music",
};

const MotionFlex = motion(Flex);

//const shuffled = shuffle(albums);

export default function MusicList() {
  return (
    <Grid columns={{ initial: "1", md: "2" }} gapY={"9"} gapX={"4"}>
      {albums.map((album) => (
        <MotionFlex
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          direction={"column"}
          gapY={"4"}
          align={"center"}
          key={album.albumTitle}
        >
          <Image
            src={`/images/${album.albumImg}`}
            alt={album.albumTitle}
            className="aspect-square"
            width={1000}
            height={1000}
          />
          <Heading
            align={"center"}
            as="h3"
            size={{
              initial: "7",
              md: "8",
            }}
            className="uppercase"
          >
            {album.albumTitle}
          </Heading>
          <Text as="p" size="3" color={"gray"}>
            {album.recordLabel} <Text size={"2"}>({album.released})</Text>
          </Text>
          {album.producers && (
            <Text as="p" size="2" color="gray">
              Produced by: {album.producers}
            </Text>
          )}
          <Flex justify={"center"} gap={"2"}>
            {album.url && (
              <Button asChild variant="solid">
                <a
                  href={album.iTunes}
                  target="_blank"
                  rel="noreferrer"
                  className="uppercase tracking-wide"
                >
                  Buy
                </a>
              </Button>
            )}
            {album.iTunes && (
              <Button asChild variant="outline">
                <a
                  href={album.iTunes}
                  target="_blank"
                  rel="noreferrer"
                  className="uppercase tracking-wide"
                >
                  Apple Music
                </a>
              </Button>
            )}
            {album.spotify && (
              <Button asChild variant="outline">
                <a
                  href={album.spotify}
                  target="_blank"
                  rel="noreferrer"
                  className="uppercase tracking-wide"
                >
                  Spotify
                </a>
              </Button>
            )}
            {album.amazon && (
              <Button asChild variant="outline">
                <a
                  href={album.amazon}
                  target="_blank"
                  rel="noreferrer"
                  className="uppercase tracking-wide"
                >
                  Amazon
                </a>
              </Button>
            )}
          </Flex>
        </MotionFlex>
      ))}
    </Grid>
  );
}
