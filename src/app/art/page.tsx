import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Section,
  Text,
} from "@radix-ui/themes";

import Image from "next/image";
import { Metadata } from "next";
import NextLink from "next/link";
import PageTitleBanner from "@/components/page-title-banner";
import WButton from "@/components/button";

export const metadata: Metadata = {
  title: "Tour Dates",
};

export default function ArtPage() {
  return (
    <main>
      <PageTitleBanner pageTitle="Art" />
      <Container size="2">
        <Image
          src="/images/art-love-drug.jpeg"
          width="800"
          height="600"
          alt="Love Drug painting"
        />
        <Box py={"7"}>
          <Text as="p" align={"center"}>
            Kory Clarke is a multi-talented artist, musician, and performer who
            has made a name for himself in the art world. He is known for his
            unique style, which blends elements of abstract expressionism, Dada,
            Bauhaus, and graffiti.
          </Text>
        </Box>
        {data.map((item) => (
          <Box key={item.title} pb={"7"}>
            <Heading
              size={"6"}
              as="h2"
              align={"center"}
              className="uppercase"
              style={{
                paddingBottom: "var(--space-4)",
              }}
            >
              {item.title}
            </Heading>
            <Text as="p" align={"center"}>
              {item.content}
            </Text>
          </Box>
        ))}
        <Flex justify={"center"}>
          <Button asChild size="4">
            <a
              href="https://www.facebook.com/profile.php?id=100010550329219"
              target="_blank"
              className="uppercase"
            >
              Learn More
            </a>
          </Button>
        </Flex>
      </Container>
    </main>
  );
}

const data = [
  {
    title: "Artistic Background",
    content:
      "Clarke’s artistic journey began with a solo performance art show called “Kory Clarke/Warrior Soul” in New York City. This show caught the attention of a promoter, who challenged Clarke to form a band, which he named Warrior Soul. The band went on to sign with Geffen Records and release several albums.",
  },
  {
    title: "Artistic Style",
    content:
      "Clarke’s art is characterized by its bold, aggressive, and thought-provoking style. He uses a variety of mediums, including paint, ink, and mixed media, to create striking and often provocative pieces. His work is influenced by his experiences as a musician and his observations of the world around him.",
  },
  {
    title: "Exhibitions and Sales",
    content:
      "Clarke has exhibited his art in several shows, including exhibitions in Edinburgh, Sweden, the USA, and Italy. His work is highly sought after, and he has sold many pieces to collectors and fans around the world.",
  },
  {
    title: "Other Creative Pursuits",
    content:
      "In addition to his art, Clarke is also a musician and has been involved in several bands, including L-Seven and Raging Slab. He has also written poetry and spoken word diatribes, and has been known to incorporate his art and music into his performances.",
  },
  {
    title: "Kory Clarke Art on Kickstarter",
    content:
      "Clarke has used Kickstarter to fund some of his art projects, including a campaign for his book of poetry and art, “Kory Rox Art”. This campaign was successful, and the book is now available to fans and collectors.",
  },
  {
    title: "Next...",
    content:
      "Kory Clarke is a talented and innovative artist who has made a significant impact on the art world. His unique style and bold approach have earned him a loyal following, and his work continues to be sought after by collectors and fans around the world.",
  },
];
