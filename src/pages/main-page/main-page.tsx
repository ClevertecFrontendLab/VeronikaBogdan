import { Layout } from 'antd';
import React, { useState } from 'react';

import { ContentPart } from '@components/layout/content';
import { Header } from '@components/layout/header';
import { Sidebar } from '@components/layout/sidebar';
import { SidemenuSwitcher } from '@components/layout/sidemenu-switcher';

const { Footer } = Layout;

import './main-page.scss';

export const MainPage: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout>
            <Sidebar collapsed={collapsed} />
            <Layout className='page-container'>
                <SidemenuSwitcher collapsed={collapsed} onClick={() => setCollapsed(!collapsed)} />
                <Header />
                <ContentPart />
                <Footer>footer</Footer>
            </Layout>
        </Layout>
    );
};
