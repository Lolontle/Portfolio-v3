import React from "react";
import { VStack, Flex, Heading, Spacer } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import Header from "./containars/Header/Header";
import Social from "./containars/Social/Social";
import Profile from "./containars/Profile/Profile";
import { GithubLogo, LinkedinLogo, Moon, Sun } from "phosphor-react";
// Add icon module

function App() {
  // use toggleColorMode on onClick
  const { colorMode, toggleColorMode } = useColorMode();
  // use isDark to toggle to bg
  const isDark = colorMode === "dark";

  return (
    <VStack p={5}>
      <Flex w={"100%"}>
        <Heading ml={8} size="md" fontWeight="semibold" color="cyan.400">
          Lolontle Moatshe Portfolio
        </Heading>
        <Spacer />
        <IconButton
          ml={2}
          aria-label={"LinkedIn"}
          isRound
          icon={<LinkedinLogo size={32} onClick={() => {
            window.open(`https://www.linkedin.com/in/lolontlemoatshe/`)
          }} />}
        />
        <IconButton
          ml={2}
          aria-label={"GitHub"}
          isRound
          icon={<GithubLogo size={32} />}
          onClick={() => {
            window.open(`https://github.com/Lolontle`)
          }}
        />
        <IconButton
          ml={8}
          aria-label={"ColorMode"}
          isRound
          onClick={toggleColorMode}
          icon={isDark ? <Sun size={32}/> : <Moon size={32} />}
        />
      </Flex>
      <Header />
      <Social />
      <Profile />
    </VStack>
  );
}

export default App;
