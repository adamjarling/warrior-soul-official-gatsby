import {
  Blockquote,
  Container,
  Flex,
  Grid,
  Section,
  Text,
} from "@radix-ui/themes";
import MasonryGallery, { MasonryImage } from "@/components/masonry";

import Image from "next/image";
import { Metadata } from "next";
import NextLink from "next/link";
import PageTitleBanner from "@/components/page-title-banner";
import { promises as fs } from "fs";
import path from "path";
import { shuffle } from "@/lib/shuffle";

export const metadata: Metadata = {
  title: "Photos",
};

const sizeOf = require("image-size");

const folder = "photos";

export default async function PhotosPage() {
  // Get filenames from a directory
  const imageDirectory = path.join(process.cwd(), `/public/${folder}`);
  const imageFilenames = (await fs.readdir(imageDirectory)).filter(
    (f) => f !== ".DS_Store"
  );
  const shuffled = shuffle(imageFilenames);

  const images = shuffled.map((ifn): MasonryImage => {
    const dimensions = sizeOf(`${imageDirectory}/${ifn}`);
    return {
      filename: `/${folder}/${ifn}`,
      ...dimensions,
    };
  });

  return (
    <main>
      <PageTitleBanner pageTitle="Photos" />
      <Container>
        {images && <MasonryGallery dir={folder} images={images} />}
      </Container>
    </main>
  );
}
