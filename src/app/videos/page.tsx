import { Container } from "@radix-ui/themes";
import { Metadata } from "next";
import PageTitleBanner from "@/components/page-title-banner";
import VideosList from "@/components/videos/list";

export const metadata: Metadata = {
  title: "Videos",
};

export default async function VideosPage() {
  return (
    <main>
      <PageTitleBanner pageTitle="Videos" />
      <Container>
        <VideosList />
      </Container>
    </main>
  );
}
