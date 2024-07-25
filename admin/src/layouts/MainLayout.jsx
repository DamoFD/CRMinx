import { useState, useContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';

import { ChakraProvider, Flex } from '@chakra-ui/react';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import theme from '../theme/theme.js';

const MainLayout = () => {
    const [error, setError] = useState(null);
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            console.log('Logout successful');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <ChakraProvider theme={theme} resetCss={false}>
            <Sidebar />
            <Outlet />
        </ChakraProvider>
    )
}

export default MainLayout;
