import { Layout } from 'antd';
import React from 'react';
import { history } from '@redux/configure-store';

import { Loader } from '@components/loader';

import defaultLogo from '/logo-default.svg';

import './auth-layout.scss';

const { Content } = Layout;

interface Props extends React.PropsWithChildren {
    children: React.ReactNode | string;
}

export const AuthLayout: React.FC<Props> = ({ children }) => {
    const path = history.location.pathname;

    return (
        <Layout className='auth-layout'>
            {/* <Loader /> */}
            <div className='blur'>
                <Content>
                    {(path === '/auth' || path === '/auth/registration') && (
                        <img src={defaultLogo} alt='logo' />
                    )}
                    {children}
                </Content>
            </div>
        </Layout>
    );
};
