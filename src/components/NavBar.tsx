import {
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  Image,
  Box,
  Text,
} from "@chakra-ui/react";

import React from "react";
import {
  AiOutlineHeart,
  AiOutlineGlobal,
  AiOutlineUserSwitch,
  AiOutlineMenu,
} from "react-icons/ai";

function NavBar() {
  return (
    <Flex direction={"column"} bg={"white"} shadow={"sm"} mb={5}>
      <Flex
        width="100%"
        height={"60px"}
        zIndex={20}
        shadow={"sm"}
        bg={"white"}
        color={"black"}
        justifyContent={"space-between"}
        px={"15rem"}
      >
        <Flex alignItems={"center"}>
          {" "}
          <Image src="LogoQuickQr.png" alt="" height={"80px"} />
        </Flex>
        <Flex gap={"10px"}>
          <Flex gap="0.3rem" alignItems={"center"}>
            <Flex
              flex={1}
              justifyContent={"center"}
              background={"transparent"}
              lineHeight={"normal"}
              _hover={{ background: "rgba(243,244,245)" }}
              height={"100%"}
              align={"center"}
              minW={"117px"}
            >
             {/*  <Button
                fontFamily="-apple-system,Segoe UI,Helvetica,Arial,Noto Sans,Apple Color Emoji,Segoe UI Emoji"
                fontSize="14px"
                fontWeight="400"
                background={"transparent"}
                _hover={{ background: "transparent" }}
              >
                <Flex
                  alignItems={"center"}
                  justifyContent={"center"}
                  gap="10px"
                >
                  <Box as={AiOutlineHeart} boxSize="20px" />
                  <Text> Favoris</Text>
                </Flex>
              </Button> */}
            </Flex>

            <Flex
              flex={1}
              justifyContent={"center"}
              background={"transparent"}
              lineHeight={"normal"}
              _hover={{ background: "rgba(243,244,245)" }}
              height={"100%"}
              align={"center"}
              minW={"117px"}
            ></Flex>

            <Flex
              flex={1}
              justifyContent={"center"}
              background={"transparent"}
              lineHeight={"normal"}
              _hover={{ background: "rgba(243,244,245)" }}
              height={"100%"}
              align={"center"}
              minW={"117px"}
            >
            {/*   <Button
                fontFamily="-apple-system,Segoe UI,Helvetica,Arial,Noto Sans,Apple Color Emoji,Segoe UI Emoji"
                fontSize="14px"
                fontWeight="400"
                background={"transparent"}
                _hover={{ background: "transparent" }}
              >
                <Flex
                  alignItems={"center"}
                  justifyContent={"center"}
                  gap="10px"
                >
                  <Box as={AiOutlineUserSwitch} boxSize="20px" />

                  <Text> Se connecter</Text>
                </Flex>
              </Button> */}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default NavBar;
