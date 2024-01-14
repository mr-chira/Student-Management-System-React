import React from 'react';
import Dashboard from '../../pages/Dashboard/Dashboard';
import UpdateStudent from './../../pages/ManageStudent/UpdateStudent';
import ViewStudent from './../../pages/ManageStudent/ViewStudent';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
const routes = [
    {
        name: 'Dashboard',
        key: 'dashboard',
        component: <Dashboard />,
        path: '/dashboard',
        icon: <DashboardIcon />
    },
    {
        name: 'Update-Student',
        key: 'updatestudent',
        component: <UpdateStudent />,
        path: '/update/student',
        icon: <ManageAccountsIcon />
    },
    {
        name: 'View-Student',
        key: 'viewstudent',
        component: <ViewStudent />,
        path: '/view/student',
        icon: <PeopleIcon />
    }
];

export default routes;
