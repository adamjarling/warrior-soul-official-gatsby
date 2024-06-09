import "@radix-ui/themes/styles.css";
import "@/styles/globals.css";

import Footer from "@/components/footer";
import Header from "@/components/header";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { Theme } from "@radix-ui/themes";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
  weight: ["200", "300", "400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Warrior Soul",
    default: "Warrior Soul",
  },
  description:
    "Official Band Website - Kory Clarke | Warrior Soul hard rock from New York City",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable}`}>
        <Theme accentColor="teal" appearance="dark" radius="none">
          {/* <div
            className={`bg-[url("/images/bg-texture.jpg")] w-screen h-screen fixed opacity-[3%]`}
          ></div> */}
          <div className="relative">
            <Header />
            {children}
            <Footer />
          </div>
        </Theme>
      </body>
    </html>
  );
}
