import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import GuestLayout from '../layouts/GuestLayout';
import Dashboard from '../admin/Dashboard';
import Appearance from '../admin/Appearance';
import Users from '../admin/Users';
import Tools from '../admin/Tools';
import Settings from '../admin/Settings';
import Register from '../auth/Register';
import Login from '../auth/Login';
import ProtectedRoute from './ProtectedRoute';
import GuestRoute from './GuestRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <ProtectedRoute />, // Protect the main layout
        children: [
            {
                path: '/',
                element: <MainLayout />,
                children: [
                    {
                        path: '/',
                        element: <Dashboard />,
                    },
                    {
                        path: '/appearance',
                        element: <Appearance />,
                    },
                    {
                        path: '/users',
                        element: <Users />,
                    },
                    {
                        path: '/tools',
                        element: <Tools />,
                    },
                    {
                        path: '/settings',
                        element: <Settings />,
                    },
                ],
            },
        ],
    },
    {
        path: '/login',
        element: <GuestRoute />, // Restrict access to guest layout for authenticated users
        children: [
            {
                path: '/login',
                element: <GuestLayout />,
                children: [
                    {
                        path: '',
                        element: <Login />,
                    },
                ],
            },
        ],
    },
    {
        path: '/register',
        element: <GuestRoute />, // Restrict access to guest layout for authenticated users
        children: [
            {
                path: '/register',
                element: <GuestLayout />,
                children: [
                    {
                        path: '',
                        element: <Register />,
                    },
                ],
            },
        ],
    },
]);

export default router;

