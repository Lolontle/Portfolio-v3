import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Stack, Flex, Text } from "@chakra-ui/layout";
import { Image, Button, Circle, Box } from "@chakra-ui/react";
import { ArrowSquareOut } from "phosphor-react";
// import Lolontle_Moatshe from '../../../public/assets'

function Header() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Stack>
      <Circle
        position={"absolute"}
        bg={"blue.100"}
        opacity={"0.1"}
        // w={"300px"}
        // h={"300px"}
        alignSelf={"flex-end"}
      />
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        // spacing={"200px"}
        p={isNotSmallerScreen ? "32" : "0"}
        alignSelf={"flex-start"}
      >
        <Box mt={isNotSmallerScreen ? "0" : 16} justifyContent={"flex-start"}>
          <Text fontSize={"5xl"} fontWeight={"semibold"}>
            Hi I am
          </Text>
          <Text
            fontSize={"7xl"}
            fontWeight={"bold"}
            bgGradient={"linear(to-r, cyan.400, blue.500, purple.600)"}
            bgClip={"text"}
          >
            Lolontle Moatshe
          </Text>
          <Text color={isDark ? "gray.200" : "gray.500"}>
            JavaScript/TypeScript, SQL, AWS, React, React-Native, GraphQL
          </Text>
          <Button
            mt={8}
            // colorSCheme={"blue"}
            onClick={() => {
              window.open("https://www.linkedin.com/in/lolontlemoatshe/");
            }}
          >
            Work Experience <ArrowSquareOut />
          </Button>
        </Box>
        <Image
          alignSelf={"center"}
          mt={isNotSmallerScreen ? "0" : "12"}
          mb={isNotSmallerScreen ? "0" : "12"}
          borderRadius={"full"}
          backgroundColor={"transparent"}
        //   boxshadow={"lg"}
          boxSize={"300px"}
          src={`https://media-exp1.licdn.com/dms/image/C4D03AQHH13T5YQt7rw/profile-displayphoto-shrink_400_400/0/1625344606160?e=1674691200&v=beta&t=CIB8887RqqsepqxSGkUkqXX37hVSnoQP_IkkfbTJeTU`}
          alt={"image"}
        ></Image>
      </Flex>
    </Stack>
  );
}

export default Header;
