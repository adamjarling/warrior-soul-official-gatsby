import "@radix-ui/themes/styles.css";
import "@/styles/globals.css";

import {
  Electrolize,
  Kdam_Thmor_Pro,
  Oswald,
  Protest_Revolution,
  Quantico,
  Raleway,
  Special_Elite,
  Squada_One,
  Tenor_Sans,
  Titillium_Web,
} from "next/font/google";

import Footer from "@/components/footer";
import Header from "@/components/header";
import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";

const kdam = Kdam_Thmor_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-kdam",
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Warrior Soul",
    default: "Warrior Soul",
  },
  description:
    "Official Band Website - Kory Clarke | Warrior Soul will rock you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kdam.variable} ${kdam.className}`}>
        <Theme accentColor="teal" appearance="dark" radius="none">
          <div
            className={`bg-[url("/images/bg-texture.jpg")] w-screen h-screen fixed opacity-[3%]`}
          ></div>
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
