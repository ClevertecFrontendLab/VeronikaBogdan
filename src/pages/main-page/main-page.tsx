import { Layout } from 'antd';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

import { ContentPart } from '@components/layout/content';
import { Header } from '@components/layout/header';
import { Sidebar } from '@components/layout/sidebar';
import { SidemenuSwitcher } from '@components/layout/sidemenu-switcher';

import './main-page.scss';

export const MainPage: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    if (!localStorage.getItem('accessToken')) return <Navigate to='/auth' />;

    return (
        <Layout>
            <Sidebar collapsed={collapsed} />
            <Layout className='page-container'>
                <SidemenuSwitcher collapsed={collapsed} onClick={() => setCollapsed(!collapsed)} />
                <Header />
                <ContentPart />
            </Layout>
        </Layout>
    );
};
