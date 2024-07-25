import { Button, Flex, Link, Text, useColorModeValue } from '@chakra-ui/react';
import { useLocation, Link as LinkRoute } from 'react-router-dom';

import IconBox from './IconBox';

const SidebarLink = (props) => {
    const { icon, link, name, active } = props;

    const location = useLocation();
    const isActive = location.pathname === link;

    const activeBg = useColorModeValue("white", "gray.700");
    const inactiveBg = useColorModeValue("white", "gray.700");
    const activeColor = useColorModeValue("gray.700", "white");
    const inactiveColor = useColorModeValue("gray.400", "gray.400");

    return (
        isActive ? (
            <Link
                as={LinkRoute}
                to={link}
            >
                <Button
                    boxSize="initial"
                    justifyContent="flex-start"
                    alignItems="center"
                    bg={activeBg}
                    mb={{
                        xl: "12px",
                    }}
                    mx={{
                        xl: "auto",
                    }}
                    px={{
                        sm: "10px",
                        xl: "16px",
                    }}
                    py="12px"
                    borderRadius="15px"
                    _hover="none"
                    w="100%"
                    _active={{
                        bg: "inherit",
                        transform: "none",
                        borderColor: "transparent",
                    }}
                    _focus={{
                        boxShadow: "none",
                    }}
                >
                    <Flex>
                        <IconBox
                            bg="teal.300"
                            color="white"
                            h="30px"
                            w="30px"
                            me="12px"
                        >
                            {icon}
                        </IconBox>
                        <Text color={activeColor} my="auto" fontSize="sm">
                            {name}
                        </Text>
                    </Flex>
                </Button>
            </Link>
        ) : (
            <Link
                as={LinkRoute}
                to={link}
            >
                <Button
                    boxSize="initial"
                    justifyContent="flex-start"
                    alignItems="center"
                    bg="transparent"
                    mb={{
                        xl: "12px",
                    }}
                    mx={{
                        xl: "auto",
                    }}
                    py="12px"
                    ps={{
                        sm: "10px",
                        xl: "16px",
                    }}
                    borderRadius="15px"
                    _hover="none"
                    w="100%"
                    _active={{
                        bg: "inherit",
                        transform: "none",
                        borderColor: "transparent",
                    }}
                    _focus={{
                        boxShadow: "none",
                    }}
                >
                    <Flex>
                        <IconBox
                            bg={inactiveBg}
                            color="teal.300"
                            h="30px"
                            w="30px"
                            me="12px"
                        >
                            {icon}
                        </IconBox>
                        <Text color={inactiveColor} my="auto" fontSize="sm">
                            {name}
                        </Text>
                    </Flex>
                </Button>
            </Link>
        )
    );
}

export default SidebarLink;
