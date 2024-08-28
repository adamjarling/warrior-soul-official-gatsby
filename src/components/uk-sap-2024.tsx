import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Section,
  Text,
} from "@radix-ui/themes";

import NextLink from "next/link";
import React from "react";
import WButton from "./button";

export default function UKSap2024() {
  return (
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
  );
}
