import { CalendarTwoTone, HeartFilled, TrophyFilled } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { NavLink } from 'react-router-dom';

import collapsedLogo from '@public/logo-collapsed.svg';
import defaultLogo from '@public/logo-default.svg';
import exit from '@public/exit.svg';
import profile from '@public/profile.svg';

import '@constants/colors.scss';
import './sidebar.scss';

const { Sider } = Layout;

type SidebarProps = { collapsed: boolean };

const menuItems = [
    {
        key: '1',
        icon: <CalendarTwoTone />,
        label: 'Календарь',
    },
    {
        key: '2',
        icon: <HeartFilled />,
        label: 'Тренировки',
    },
    {
        key: '3',
        icon: <TrophyFilled />,
        label: 'Достижения',
    },
    {
        key: '4',
        icon: <img src={profile} alt='profile icon' />,
        label: 'Профиль',
    },
];

export const Sidebar: React.FC<SidebarProps> = ({ collapsed }: SidebarProps) => (
    <Sider trigger={null} collapsible collapsed={collapsed} width='208px' collapsedWidth='64px'>
        <div>
            <NavLink to='/' className={collapsed ? 'logo-collapsed' : 'logo'}>
                <img src={collapsed ? collapsedLogo : defaultLogo} alt='Cleverfit logo' />
            </NavLink>
            <Menu theme='light' mode='inline' defaultSelectedKeys={['1']} items={menuItems} />
        </div>
        <div className={collapsed ? 'exit-collapsed' : 'exit'}>
            <img src={exit} alt='exit icon' />
            <p>Выход</p>
        </div>
    </Sider>
);
