import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import SidebarMenu from './components/molecules/SidebarMenu';
import Navbar from './components/organisms/Navbar';
import './components/styles/organisms/styles.css';

const App = () => {
    const location = useLocation();
    const isReportPage = location.pathname === '/reportsales';

    return (
        <div className="app">
            {!isReportPage && <Navbar />}
            <SidebarMenu />
            <div className="app-container">
                <Outlet />
            </div>
        </div>
    );
}

export default App;
