import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import Header from './components/Header';
import DashboardBgImage from '../../assets/img/DashboardBackground.png';

const Dashboard = () => {
    const textColor = useColorModeValue("gray.700", "white");
    const { user } = useContext(AuthContext);

    return (
        <Flex minH="100vh" direction="column">
            <Header
                backgroundHeader={DashboardBgImage}
            >
            </Header>
        </Flex>
    )
}

export default Dashboard;
