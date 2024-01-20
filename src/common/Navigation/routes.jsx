import React from 'react';
import Dashboard from '../../pages/Dashboard/Dashboard';
import DashboardIcon from '@mui/icons-material/Dashboard';
const routes = [
    {
        name: 'Dashboard',
        key: 'dashboard',
        component: <Dashboard />,
        path: '/dashboard',
        icon: <DashboardIcon />
    },
];

export default routes;
