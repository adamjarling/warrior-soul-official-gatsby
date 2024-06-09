import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Section,
  Text,
} from "@radix-ui/themes";

import BannerImage from "@/components/home/banner-image";
import Image from "next/image";
import NextLink from "next/link";
import TourDateList from "@/components/tour-date-list";
import WButton from "@/components/button";
import { tourDates } from "@/app/tour/tourdates";

export default function Home() {
  return (
    <main className="">
      <Section size={"1"}>
        <BannerImage />
      </Section>
      <Section size={"2"}>
        <Container>
          <Flex direction={"column"} align={"center"} gapY={"7"}>
            <Heading
              as="h2"
              align="center"
              size={{
                initial: "9",
                sm: "9",
              }}
              weight={"bold"}
              style={{
                textTransform: "uppercase",
              }}
            >
              Space Age Playboys
              <br />
              UK Tour 2024
            </Heading>
            <video autoPlay loop muted playsInline>
              <source src="/video/sap-uk-vid-promo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <WButton>
              <NextLink href="/tour">View Full Schedule</NextLink>
            </WButton>
          </Flex>
        </Container>
      </Section>
      <Section>
        <Container>
          <Flex direction={"column"} align={"center"} gapY={"6"}>
            <TourDateList tourDates={tourDates.slice(0, 4)} />
            <Box>
              <WButton>
                <NextLink href="/tour">See all Tour Dates</NextLink>
              </WButton>
            </Box>
          </Flex>
        </Container>
      </Section>
      <Section>
        <Container>
          <Flex direction={"column"} align={"center"} justify={"center"}>
            <Image
              src="/images/sap-uk-2024-promo.jpeg"
              width="808"
              height="960"
              alt="Space Age Playboys UK Tour 2024"
            />
          </Flex>
        </Container>
      </Section>
    </main>
  );
}
