import {
  Blockquote,
  Container,
  Flex,
  Grid,
  Section,
  Text,
} from "@radix-ui/themes";

import Image from "next/image";
import { Metadata } from "next";
import NextLink from "next/link";
import PageTitleBanner from "@/components/page-title-banner";
import TourDateList from "@/components/tour-date-list";
import { tourDates } from "@/app/tour/tourdates";

export const metadata: Metadata = {
  title: "Tour Dates",
};

export default function TourPage() {
  return (
    <main>
      <PageTitleBanner pageTitle="On Tour!" />
      <Container>
        <Flex direction={"column"} align={"center"}>
          <video autoPlay loop muted playsInline>
            <source src="/video/sap-uk-vid-promo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Flex>
        <Section size={"3"}>
          <Container>
            <TourDateList tourDates={tourDates} />
          </Container>
        </Section>
        <Section>
          <Image
            src="/images/sap-uk-2024-promo.jpeg"
            width="808"
            height="960"
            alt="Space Age Playboys UK Tour 2024"
          />
        </Section>
        <Section size={"2"}>
          <Container>
            <Grid columns={"1"} gap={"4"} px={"5"}>
              <Text as="p" align={"center"}>
                WARRIOR SOUL will celebrate the 30th anniversary of its
                &quot;The Space Age Playboys&quot; album by embarking on an
                eight-date U.K. tour this summer. WARRIOR SOUL states:
                &quot;These shows are going to be epic. &quot;If high-energy
                rock &apos;n&apos; roll is your thing, then this is a show not
                to be missed. &quot;Not only will the band play &apos;Space Age
                Playboys&apos;, but expect a few other classics thrown in the
                mix.&quot;
              </Text>

              <Text as="p" align={"center"}>
                In 2005, &quot;The Space Age Playboys&quot; was ranked No. 323
                in Rock Hard magazine&apos;s book of &quot;The 500 Greatest Rock
                &amp; Metal Albums Of All Time.&quot; METALLICA&apos;s Lars
                Ulrich has repeatedly praised &quot;The Space Age Playboys&quot;
                as one of his favorite albums, telling &quot;The Metallica
                Report&quot; in a 2023 interview:
              </Text>

              <Text
                size={"5"}
                weight={"light"}
                align={"center"}
                style={{
                  color: "var(--accent-12)",
                  lineHeight: "1.5",
                }}
              >
                &quot;WARRIOR SOUL is underappreciated. The record that I go
                back to, but a lot of their early stuff is all great, but
                there&apos;s an intensity and a vibe around &apos;The Space Age
                Playboys&apos; album that came out, I think, around &mdash;
                what? &mdash; &apos;94, give or take a year, and songs like
                &apos;Rocket Engines&apos;, &apos;Let&apos;s Get Wasted&apos;,
                &apos;The Pretty Faces&apos;, &apos;Rotten Soul&apos;,
                &apos;Fightin&apos; The War&apos;, &apos;The Drug&apos; &mdash;
                all these songs are incredible. There&apos;s a sound and a vibe
                on that record that still perseveres close to 30 years later,
                and there&apos;s an energy in that record and right in that zone
                between hard rock, heavy metal, but a lot of punk attitude and a
                lot of kind of not giving a shit and the two-finger salute and
                really kind of rebellious contrarian energy that that record in
                particular sounds as fresh today as it did a couple, three
                decades ago when it came out.
              </Text>

              <Text
                size={"5"}
                weight={"light"}
                align={"center"}
                style={{
                  color: "var(--accent-12)",
                  lineHeight: "1.5",
                }}
              >
                I started going down the rabbit hole of YouTube live videos and
                found a clip from London where they were playing in a big club
                theater where they were playing&mldr;. The last one I was
                looking at was &apos;Let&apos;s Get Wasted&apos;, which is such
                a great track. The sync was a little off, but the music and the
                energy was definitely much appreciated.&quot;
              </Text>
            </Grid>
          </Container>
        </Section>
      </Container>
    </main>
  );
}
