import { Layout } from 'antd';
import React from 'react';

const { Content } = Layout;

import defaultLogo from '/logo-default.svg';

import './auth-layout.scss';

interface Props extends React.PropsWithChildren {
    children: React.ReactNode | string;
}

export const AuthLayout: React.FC<Props> = ({ children }) => (
    <Layout className='auth-layout'>
        <div className='blur'>
            <Content>
                <img src={defaultLogo} alt='logo' />
                {children}
            </Content>
        </div>
    </Layout>
);
