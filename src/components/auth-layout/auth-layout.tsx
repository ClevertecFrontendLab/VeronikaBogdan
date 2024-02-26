import { Layout } from 'antd';
import React from 'react';

import { Loader } from '@components/loader';

import defaultLogo from '/logo-default.svg';

import './auth-layout.scss';

const { Content } = Layout;

interface Props extends React.PropsWithChildren {
    children: React.ReactNode | string;
}

export const AuthLayout: React.FC<Props> = ({ children }) => (
    <Layout className='auth-layout'>
        {/* <Loader /> */}
        <div className='blur'>
            <Content>
                <img src={defaultLogo} alt='logo' />
                {children}
            </Content>
        </div>
    </Layout>
);
