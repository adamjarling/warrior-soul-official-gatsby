"use client";

import { Box, Button, Dialog, Flex, Link, Text } from "@radix-ui/themes";
import { Menu, X, Zap } from "lucide-react";

import Image from "next/image";
import NextLink from "next/link";
import React from "react";
import fatLogo from "/public/images/warrior-soul-logo-full-white.png";
import logo from "/public/images/warrior-soul-logo-white.png";
import logoOneLine from "/public/images/warrior-soul-logo-one-line.png";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const navigation = [
  { name: "Tour", href: "/tour" },
  {
    name: "Merch",
    href: "https://warrior-soul-official-store.myshopify.com/collections/all",
    isExternal: true,
  },
  { name: "Photos", href: "/photos" },
  { name: "Videos", href: "/videos" },
  { name: "Music", href: "/music" },
  { name: "Art", href: "/art" },

  // { name: "Contact", href: "#" },
];

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const handleClick = (item: any) => {
    setOpen(false);

    if (item.isExternal) return window.open(item.href, "_blank");

    router.push(item.href);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Flex
        position={"fixed"}
        justify={"between"}
        align={{
          initial: "center",
          md: "start",
        }}
        width={"100%"}
        py={"5"}
        px={"6"}
        className="z-10"
      >
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-t from-transparent to-black"></div>
        <Box position={"relative"}>
          <NextLink href={"/"}>
            <Image
              src={logo}
              alt="Warrior Soul splash image"
              className="h-16 w-auto hidden md:block"
            />
            <Image
              src={logoOneLine}
              alt="Warrior Soul splash image"
              className="h-6 w-auto block md:hidden"
            />
          </NextLink>
        </Box>
        <Dialog.Trigger>
          <Button
            variant={"ghost"}
            size={"2"}
            style={{
              padding: `var(--space-1)`,
              position: "relative",
            }}
          >
            <Zap className="w-8 h-8 text-white" />
          </Button>
        </Dialog.Trigger>
      </Flex>

      <Dialog.Content>
        <Box
          width={"100vw"}
          height={"100vh"}
          style={{
            backgroundColor: "var(--color-background)",
            position: "fixed",
            top: 0,
            left: 0,
            overflow: "hidden",
            opacity: 0.9,
          }}
        >
          <Box px="3" position={"absolute"} right={"3"} top={"5"}>
            <Dialog.Close>
              <Button variant={"ghost"} size={"3"}>
                <X className="w-8 h-8 text-white" />
              </Button>
            </Dialog.Close>
          </Box>
          <Flex
            direction={"column"}
            justify={"center"}
            align={"center"}
            height={"100vh"}
            width={"100vw"}
          >
            <Flex
              flexGrow={"1"}
              direction={"column"}
              justify={"center"}
              align={"center"}
              gap={{
                initial: "6",
                md: "7",
              }}
            >
              <Link href="/">
                <Image
                  src={logo}
                  alt="Warrior Soul splash image"
                  className="h-20 w-auto mb-6"
                />
              </Link>
              {navigation.map((item) => (
                <Button
                  variant={"ghost"}
                  key={item.name}
                  onClick={() => handleClick(item)}
                >
                  <Text
                    size={{
                      initial: "8",
                      sm: "9",
                    }}
                    weight={"bold"}
                    style={{
                      textTransform: "uppercase",
                    }}
                  >
                    {item.name}
                  </Text>
                </Button>
              ))}
            </Flex>
          </Flex>
        </Box>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default Header;
