// Chakra imports
import {
  Box,
  Flex,
  Icon,
  useColorModeValue,
  Text,
  Image,
} from "@chakra-ui/react";

// Assets
import { FaChevronLeft } from "react-icons/fa";
import Link from "next/link";
import { ReactNode } from "react";
import FixedPlugin from "@/components/fixedPlugin/FixedPlugin";
import Footer from "@/components/footer/FooterAdmin";

function AuthIllustration(props: {
  children: ReactNode;
  illustrationBackground: string;
}) {
  const authBg = useColorModeValue("white", "navy.900");
  const { children, illustrationBackground } = props;
  // Chakra color mode
  return (
    <Flex minW="100vh" w="100%" bg={authBg} position="relative"  maxH={"100vh"}>
      <Flex
        h={{
          sm: "initial",
          md: "unset",
          lg: "100vh",
          xl: "100vh",
        }}
        w={{ base: "100vw", md: "100%" }}
        maxW={{ md: "66%", lg: "1313px" }}
        mx={{ md: "auto" }}
        pt={{ sm: "50px", md: "0px" }}
        px={{ lg: "30px", xl: "0px" }}
        ps={{ xl: "70px" }}
        justifyContent="start"
        direction="column"
      >
        <Link
          href="/admin"
          style={{
            width: "fit-content",
            marginTop: "40px",
          }}
        >
        
          
            <Image src="/LogoQuickQr.png" alt="" height={"80px"} />
         
        </Link>
        <Flex alignItems={"center"} gap={40}>
          <Box display={{ base: "none", md: "block" }}>
            <Image src={`${illustrationBackground}`} alt="" />
          </Box>
          {children}
        </Flex>
      </Flex>
      <FixedPlugin />
    </Flex>
  );
}

export default AuthIllustration;
