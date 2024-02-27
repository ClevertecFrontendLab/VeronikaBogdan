import { Layout } from 'antd';
import React, { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { setAccessToken } from '@redux/login-slice/login-slice';

import { ContentPart } from '@components/layout/content';
import { Header } from '@components/layout/header';
import { Sidebar } from '@components/layout/sidebar';
import { SidemenuSwitcher } from '@components/layout/sidemenu-switcher';

import './main-page.scss';

export const MainPage: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const { accessToken } = useAppSelector((state) => state.login);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setAccessToken(accessToken));
    }, []);

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
