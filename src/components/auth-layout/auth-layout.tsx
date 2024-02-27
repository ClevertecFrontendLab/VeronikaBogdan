import { Layout } from 'antd';
import React from 'react';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';
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
    const { isLoading } = useAppSelector((state) => state.login);

    return (
        <Layout className='auth-layout'>
            {isLoading && <Loader />}
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
