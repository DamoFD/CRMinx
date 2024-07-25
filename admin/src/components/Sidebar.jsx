import { Box, Link, Text, Stack, Button, Flex, useColorModeValue } from '@chakra-ui/react';
import { Separator } from './Separator';
import CRMinxLogo from "../assets/img/crminx-logo.png";
import SidebarLink from './SidebarLink';
import { HomeIcon, PaintIcon, UserIcon, ToolsIcon, SettingsIcon } from './Icons';
import SidebarHelp from './SidebarHelp';


const Sidebar = () => {

    let variantChange = "0.2s linear";
    let sidebarBg = "none";
    let sidebarRadius = "0px";
    let sidebarMargins = "0px";

    return (
        <Box>
            <Box display={{ sm: "none", xl: "block" }} position="fixed" left="0" top="0">
                <Box
                    bg={sidebarBg}
                    transition={variantChange}
                    w="260px"
                    ms={{
                        sm: "16px",
                    }}
                    my={{
                        sm: "16px",
                    }}
                    h="calc(100vh - 32px)"
                    ps="20px"
                    pe="20px"
                    m={sidebarMargins}
                    borderRadius={sidebarRadius}
                >
                    <Box pt={"25px"} mb="12px">
                        <Link
                            to='/'
                            display="flex"
                            lineHeight="100%"
                            mb="30px"
                            fontWeight="bold"
                            justifyContent="center"
                            alignItems="center"
                            fontSize="11px"
                        >
                            <img src={CRMinxLogo} width="32px" height="32px" me="10px" />
                            <Text fontSize="sm" mt="3px">
                                CRMinx Dashboard
                            </Text>
                        </Link>
                        <Separator></Separator>
                    </Box>
                    <Stack direction="column" mb="40px">
                        <Box>
                            <SidebarLink icon={<HomeIcon color="inherit" />} link="/" name="Dashboard" />
                            <SidebarLink icon={<PaintIcon color="inherit" />} link="/appearance" name="Appearance" />
                            <SidebarLink icon={<UserIcon color="inherit" />} link="/users" name="Users" />
                            <SidebarLink icon={<ToolsIcon color="inherit" />} link="/tools" name="Tools" />
                            <SidebarLink icon={<SettingsIcon color="inherit" />} link="/settings" name="Settings" />
                        </Box>
                    </Stack>
                    <SidebarHelp />
                </Box>
            </Box>
        </Box>
    );
}

export default Sidebar;
