import { Layout } from 'antd';
import React, { useState } from 'react';

import { Sidebar } from '@components/layout/sidebar';
import { SidemenuSwitcher } from '@components/layout/sidemenu-switcher';

const { Header, Content } = Layout;

import './main-page.scss';

export const MainPage: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout>
            <Sidebar collapsed={collapsed} />

            <Layout className='page-container'>
                <SidemenuSwitcher collapsed={collapsed} onClick={() => setCollapsed(!collapsed)} />
                <Header style={{ padding: 0 }}>
                    <p>header</p>
                </Header>
                <Content>content</Content>
            </Layout>
        </Layout>
    );
};
