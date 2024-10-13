import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Section,
  Text,
} from "@radix-ui/themes";

import BannerImage from "@/components/home/banner-image";
import Image from "next/image";
import NextLink from "next/link";
import TourDateList from "@/components/tour-date-list";
import WButton from "@/components/button";
import { getUpcomingTourDates } from "@/lib/tour-date-helpers";
import { tourDates } from "@/app/tour/tourdates";

const upcomingTourDates = getUpcomingTourDates(tourDates);
console.log("🚀 ~ upcomingTourDates:", upcomingTourDates);

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
              Spain Tour 2024
            </Heading>
            <Image
              src="/images/2024_spain_playboys.jpg"
              width="960"
              height="960"
              alt="Space Age Playboys UK Tour 2024"
            />
            <WButton>
              <NextLink href="/tour">View Full Schedule</NextLink>
            </WButton>
          </Flex>
        </Container>
      </Section>
      <Section>
        <Container>
          <Flex direction={"column"} align={"center"} gapY={"6"}>
            <TourDateList tourDates={upcomingTourDates.slice(0, 4)} />
            <Box>
              <WButton>
                <NextLink href="/tour">See all Tour Dates</NextLink>
              </WButton>
            </Box>
          </Flex>
        </Container>
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
              Warrior Soul Headlines Hard Rock Hell Sleaze VII September 9th,
              2024
            </Heading>
            <Image
              src="/images/poster_2024_09_09.jpg"
              width="696"
              height="960"
              alt="Hard Rock Hell Sleaze 7"
            />
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
