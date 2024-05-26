import { Box, Container, Flex, Heading, Section } from "@radix-ui/themes";

import Image from "next/image";
import logo from "/public/images/warrior-soul-logo-one-line.png";

export default function PageTitleBanner({ pageTitle }: { pageTitle: string }) {
  return (
    <Container>
      <Section size={"3"}>
        <Flex
          className="relative"
          px={"8"}
          gap={{
            initial: "5",
            md: "7",
          }}
          direction={"column"}
          align={"center"}
        >
          <Heading
            align="center"
            size={{
              initial: "9",
              sm: "9",
            }}
            style={{
              textTransform: "uppercase",
              //textShadow: "-6px -8px 0px red",
            }}
          >
            {pageTitle}
          </Heading>
        </Flex>
      </Section>
    </Container>
  );
}
