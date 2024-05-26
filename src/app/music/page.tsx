import { Container } from "@radix-ui/themes";
import { Metadata } from "next";
import MusicList from "@/components/music/list";
import PageTitleBanner from "@/components/page-title-banner";

export const metadata: Metadata = {
  title: "Music",
};

export default function MusicPage() {
  return (
    <main>
      <PageTitleBanner pageTitle="Music / Albums" />
      <Container>
        <MusicList />
      </Container>
    </main>
  );
}
