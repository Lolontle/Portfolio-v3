import React from "react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Flex, Box, Heading, Text } from "@chakra-ui/layout";
import { Icon } from "@chakra-ui/react";
import { Horse, Barbell, SketchLogo, CreditCard, Phone, Browsers, Question, Files, Browser, Kanban, Calculator, GameController, CheckSquareOffset, TextT } from 'phosphor-react'

function Profile() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Flex
      direction={isNotSmallerScreen ? "row" : "column"}
      w={"100%"}
      maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
    >
      <Box alignSelf={"center"} px={"32"} py={"16"}>
        <Heading fontWeight={"extrabold"} color={"cyan.500"} size={"4xl"}>
          2+
        </Heading>
        <Text fontSize={"2xl"} color={"gray.400"}>
          Years of Experience
        </Text>
      </Box>
      <Box alignSelf={"center"} px={"32"} py={"16"}>
        <Text fontWeight={"bold"} fontSize={"2xl"}>
          Developer, specialising in FullStack Web Development, Mobile App Development & Backend Developement 
        </Text>
        <br></br>
        <Heading>Projects</Heading>
        <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
          <Flex
            rounded={"xl"}
            direction={"column"}
            mt={"4"}
            bg={"blue.400"}
            h={"30vh"}
            w={"30vh"}
            justify={"flex-end"}
            onClick={() => {
              window.open('https://www.hiit-nation.com/')
            }}
          >
            <Icon color={"white"} p={"4"} w="24" h="24" as={Barbell} />
            <Text
              color={"white"}
              p={"4"}
              fontSize={"xl"}
              fontWeight={"semibold"}
            >
              HIItNation
            </Text>
          </Flex>
          <Flex
            rounded={"xl"}
            direction={"column"}
            mt={"4"}
            bg={"blue.400"}
            h={"30vh"}
            w={"30vh"}
            justify={"flex-end"}
            onClick={() => {
              window.open('https://www.koininternational.com/login/auth')
            }}
          >
            <Icon color={"white"} p={"4"} w="24" h="24" as={SketchLogo} />
            <Text
              color={"white"}
              p={"4"}
              fontSize={"xl"}
              fontWeight={"semibold"}
            >
              Koin International
            </Text>
          </Flex>
          <Flex
            rounded={"xl"}
            direction={"column"}
            mt={"4"}
            bg={"blue.400"}
            h={"30vh"}
            w={"30vh"}
            justify={"flex-end"}
            onClick={() => {
              window.open('https://www.gallop.co.za/fixtures/fixtureIframeLink')
            }}
          >
            <Icon color={"white"} p={"4"} w="24" h="24" as={Horse} />
            <Text
              color={"white"}
              p={"4"}
              fontSize={"xl"}
              fontWeight={"semibold"}
            >
              Gallop
            </Text>
          </Flex>
        </Flex>
        <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
          <Flex
            rounded={"xl"}
            direction={"column"}
            mt={"4"}
            bg={"blue.400"}
            h={"30vh"}
            w={"30vh"}
            justify={"flex-end"}
            onClick={() => {
              window.open('https://github.com/Lolontle/Portfolio/blob/master/Caesars_Cipher.js')
            }}
          >
            <Icon color={"white"} p={"4"} w="24" h="24" as={TextT} />
            <Text
              color={"white"}
              p={"4"}
              fontSize={"xl"}
              fontWeight={"semibold"}
            >
              Caesars Cipher
            </Text>
          </Flex>
          <Flex
            rounded={"xl"}
            direction={"column"}
            mt={"4"}
            bg={"blue.400"}
            h={"30vh"}
            w={"30vh"}
            justify={"flex-end"}
            onClick={() => {
              window.open('https://github.com/Lolontle/Portfolio/blob/master/cash_register.js')
            }}
          >
            <Icon color={"white"} p={"4"} w="24" h="24" as={CreditCard} />
            <Text
              color={"white"}
              p={"4"}
              fontSize={"xl"}
              fontWeight={"semibold"}
            >
              Cash Register
            </Text>
          </Flex>
          <Flex
            rounded={"xl"}
            direction={"column"}
            mt={"4"}
            bg={"blue.400"}
            h={"30vh"}
            w={"30vh"}
            justify={"flex-end"}
            onClick={() => {
              window.open('https://github.com/Lolontle/Portfolio/blob/master/Telephone_Number_Validator.js')
            }}
          >
            <Icon color={"white"} p={"4"} w="24" h="24" as={Phone} />
            <Text
              color={"white"}
              p={"4"}
              fontSize={"xl"}
              fontWeight={"semibold"}
            >
              Telephone Number Validator
            </Text>
          </Flex>
        </Flex>
        <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
          <Flex
            rounded={"xl"}
            direction={"column"}
            mt={"4"}
            bg={"blue.400"}
            h={"30vh"}
            w={"30vh"}
            justify={"flex-end"}
            onClick={() => {
              window.open('https://github.com/Lolontle/Portfolio/blob/master/Product_Landing_Page.html')
            }}
          >
            <Icon color={"white"} p={"4"} w="24" h="24" as={Browsers} />
            <Text
              color={"white"}
              p={"4"}
              fontSize={"xl"}
              fontWeight={"semibold"}
            >
              Product Landing Page
            </Text>
          </Flex>
          <Flex
            rounded={"xl"}
            direction={"column"}
            mt={"4"}
            bg={"blue.400"}
            h={"30vh"}
            w={"30vh"}
            justify={"flex-end"}
            onClick={() => {
              window.open('https://github.com/Lolontle/Portfolio/blob/master/Survey_Form.html')
            }}
          >
            <Icon color={"white"} p={"4"} w="24" h="24" as={Question} />
            <Text
              color={"white"}
              p={"4"}
              fontSize={"xl"}
              fontWeight={"semibold"}
            >
              Survey Form
            </Text>
          </Flex>
          <Flex
            rounded={"xl"}
            direction={"column"}
            mt={"4"}
            bg={"blue.400"}
            h={"30vh"}
            w={"30vh"}
            justify={"flex-end"}
            onClick={() => {
              window.open('https://github.com/Lolontle/Portfolio/blob/master/Technical_Documentation.html')
            }}
          >
            <Icon color={"white"} p={"4"} w="24" h="24" as={Files} />
            <Text
              color={"white"}
              p={"4"}
              fontSize={"xl"}
              fontWeight={"semibold"}
            >
              Technical Documentation Page
            </Text>
          </Flex>
        </Flex>
        <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
          <Flex
            rounded={"xl"}
            direction={"column"}
            mt={"4"}
            bg={"blue.400"}
            h={"30vh"}
            w={"30vh"}
            justify={"flex-end"}
            onClick={() => {
              window.open('https://codepen.io/lolontle/pen/GRZgqPW?editors=1100')
            }}
          >
            <Icon color={"white"} p={"4"} w="24" h="24" as={Browser} />
            <Text
              color={"white"}
              p={"4"}
              fontSize={"xl"}
              fontWeight={"semibold"}
            >
              Tribute Page
            </Text>
          </Flex>
          <Flex
            rounded={"xl"}
            direction={"column"}
            mt={"4"}
            bg={"blue.400"}
            h={"30vh"}
            w={"30vh"}
            justify={"flex-end"}
            onClick={() => {
              window.open('https://github.com/Lolontle/Portfolio/blob/master/Poised.java')
            }}
          >
            <Icon color={"white"} p={"4"} w="24" h="24" as={Kanban} />
            <Text
              color={"white"}
              p={"4"}
              fontSize={"xl"}
              fontWeight={"semibold"}
            >
              Poised Project Maangement
            </Text>
          </Flex>
          <Flex
            rounded={"xl"}
            direction={"column"}
            mt={"4"}
            bg={"blue.400"}
            h={"30vh"}
            w={"30vh"}
            justify={"flex-end"}
            onClick={() => {
              window.open('https://github.com/Lolontle/Portfolio/blob/master/finance_calculators.py')
            }}
          >
            <Icon color={"white"} p={"4"} w="24" h="24" as={Calculator} />
            <Text
              color={"white"}
              p={"4"}
              fontSize={"xl"}
              fontWeight={"semibold"}
            >
              Finance Calcultor
            </Text>
          </Flex>
        </Flex>
        <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
          <Flex
            rounded={"xl"}
            direction={"column"}
            mt={"4"}
            bg={"blue.400"}
            h={"30vh"}
            w={"30vh"}
            justify={"flex-end"}
            onClick={() => {
              window.open('https://github.com/Lolontle/Portfolio/blob/master/The_Game.py')
            }}
          >
            <Icon color={"white"} p={"4"} w="24" h="24" as={GameController} />
            <Text
              color={"white"}
              p={"4"}
              fontSize={"xl"}
              fontWeight={"semibold"}
            >
              PyGame
            </Text>
          </Flex>
          <Flex
            rounded={"xl"}
            direction={"column"}
            mt={"4"}
            bg={"blue.400"}
            h={"30vh"}
            w={"30vh"}
            justify={"flex-end"}
            onClick={() => {
              window.open('https://github.com/Lolontle/Portfolio/blob/master/task_manager.py')
            }}
          >
            <Icon color={"white"} p={"4"} w="24" h="24" as={CheckSquareOffset} />
            <Text
              color={"white"}
              p={"4"}
              fontSize={"xl"}
              fontWeight={"semibold"}
            >
              Task Manager
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Profile;
