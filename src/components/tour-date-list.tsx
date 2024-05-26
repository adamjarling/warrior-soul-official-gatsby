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
import { Show, tourDates } from "@/app/tour/tourdates";

import NextLink from "next/link";
import WButton from "@/components/button";
import { formatDate } from "@/lib/date-format";

export default function TourDateList({ tourDates }: { tourDates: Show[] }) {
  return (
    <Grid
      columns={{
        initial: "1",
        md: "1",
      }}
      gap={"4"}
      width="auto"
    >
      {tourDates.map((show) => (
        <Flex
          gapY={"3"}
          direction={"column"}
          key={show.datetime}
          className="text-center"
          pb={"6"}
        >
          <Heading
            as="h3"
            size={{
              initial: "8",
              md: "9",
            }}
            style={{
              textTransform: "uppercase",
            }}
          >
            {show.venue.name}
          </Heading>
          <Text
            size={{
              initial: "7",
              md: "8",
            }}
          >
            {formatDate(show.datetime)}
          </Text>
          <Text
            size={{
              initial: "7",
              md: "8",
            }}
          >
            {show.venue.city}, - {show.venue.country}
          </Text>

          <Box pt={"4"}>
            <Button
              asChild
              size={"4"}
              variant={"outline"}
              className="uppercase font-semibold"
            >
              <NextLink href={show.url.ticket} target="_blank">
                Buy Tickets
              </NextLink>
            </Button>
          </Box>
        </Flex>
      ))}
    </Grid>
  );
}
