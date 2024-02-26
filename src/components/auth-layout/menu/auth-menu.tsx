import { Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

type AuthMenuProps = { itemKey: string };

import './auth-menu.scss';

export const AuthMenu: React.FC<AuthMenuProps> = ({ itemKey }: AuthMenuProps) => {
    const menuItems = [
        {
            key: 'entrance',
            label: <Link to='/auth'>Вход</Link>,
        },
        {
            key: 'registration',
            label: <Link to='/auth/registration'>Регистрация</Link>,
        },
    ];

    return <Menu mode='inline' items={menuItems} defaultSelectedKeys={[itemKey]} />;
};
