import { Box, Flex, useColorModeValue } from '@chakra-ui/react';

const Header = ({backgroundHeader}) => {
    const textColor = useColorModeValue("gray.700", "white");
    const backgroundHeaderCard = useColorModeValue(
    "hsla(0,0%,100%,.8)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
  );
    const borderHeaderCardColor = useColorModeValue(
    "white",
    "rgba(255, 255, 255, 0.31)"
  );

    return (
        <Box
            mb={{ sm: "205px", md: "75px", xl: "70px" }}
            borderRadius="15px"
            px="0px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            align="center"
        >
            <Box
                bgImage={backgroundHeader}
                w="100%"
                h="300px"
                borderRadius="25px"
                bgPosition="50%"
                bgRepeat="no-repeat"
                position="relative"
                display="flex"
                justifyContent="center"
            >
                <Flex
                    direction={{ sm: "column", md: "row" }}
                    mx="1.5rem"
                    maxH="330px"
                    w={{ sm: "90%", xl: "95%" }}
                    justifyContent={{ sm: "center", md: "space-between" }}
                    align="center"
                    backdropFilter="saturate(200%) blur(50px)"
                    position="absolute"
                    boxShadow="0px 2px 5.5px rgba(0, 0, 0, 0.02)"
                    border="2px solid"
                    borderColor={borderHeaderCardColor}
                    bg={backgroundHeaderCard}
                    p="24px"
                    borderRadius="20px"
                    transform={{
                        sm: "translateY(45%)",
                        md: "translateY(110%)",
                        lg: "translateY(160%)",
                    }}
                >
                </Flex>
            </Box>
        </Box>
    );
}

export default Header;
