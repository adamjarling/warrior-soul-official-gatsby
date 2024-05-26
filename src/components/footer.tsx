import { Box, Container, Grid, Link, Section, Text } from "@radix-ui/themes";

const footerLinks = [
  {
    name: "Facebook",
    url: "#",
  },
  {
    name: "Spotify",
    url: "#",
  },
  {
    name: "Instagram",
    url: "#",
  },
];

export default function Footer() {
  return (
    <footer>
      <Section
        style={{
          backgroundColor: "var(--accent-2)",
        }}
      >
        <Container>
          <Grid
            columns={{
              initial: "3",
            }}
            gapY={"4"}
          >
            {footerLinks.map((link) => (
              <Text key={link.name} align={"center"} className="uppercase">
                <Link href={link.url}>{link.name}</Link>
              </Text>
            ))}
          </Grid>
        </Container>
      </Section>
    </footer>
  );
}
