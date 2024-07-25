import { Box } from '@chakra-ui/react';
import { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';

const Dashboard = () => {
    const { user } = useContext(AuthContext);

    return (
        <Box minH="100vh">
            Dashboard
        </Box>
    )
}

export default Dashboard;
