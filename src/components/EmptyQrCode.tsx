"use client";
import {
  Box,
  Text,
  Image,
  useBreakpointValue,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { AiFillHeart, AiOutlineHeart, AiOutlineQrcode, AiOutlineSearch } from "react-icons/ai";

export default function EmptyQrCode() {
  return (
    <Box
      textAlign="center"
      py={10}
      px={6}
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      width={"100%"}
    >
      <Flex
        bg={"brand.thingray"}
        rounded={"full"}
        justifyContent={"center"}
        alignItems={"center"}
        p={[2, 4]}
      >
        <Icon
          as={AiOutlineQrcode}
          boxSize={[7, 14]}
          color={"blackAlpha"}
          transition="all 0.15s ease"
        />
      </Flex>
      <Text
        color={"brand.lightgray"}
        mb={5}
        mt={5}
        align={"center"}
        whiteSpace="pre-line"
      >
       Aucun QrCode pour le moment ,  veuillez saisir un url pour générer votre QrCode
      </Text>
    </Box>
  );
}
