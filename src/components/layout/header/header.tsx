import { Button, PageHeader } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import React from 'react';

import './header.scss';

const routes = [
    {
        path: '/',
        breadcrumbName: 'Главная',
    },
];

export const Header: React.FC = () => (
    <PageHeader
        title='Приветствуем тебя в CleverFit — приложении, которое поможет тебе добиться своей мечты!'
        breadcrumb={{ routes }}
        subTitle={
            <Button
                type='text'
                shape={window.innerWidth <= 360 ? 'circle' : 'default'}
                icon={<SettingOutlined />}
            >
                Настройки
            </Button>
        }
    />
);
