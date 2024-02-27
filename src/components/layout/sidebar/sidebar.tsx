import { Button, Layout, Menu } from 'antd';
import { CalendarTwoTone, HeartFilled, TrophyFilled } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

import { history } from '@redux/configure-store';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import collapsedLogo from '/logo-collapsed.svg';
import defaultLogo from '/logo-default.svg';
import exit from '/exit.svg';
import profile from '/profile.svg';

import '@constants/colors.scss';
import './sidebar.scss';
import { removeAccessToken } from '@redux/login-slice/login-slice';

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

export const Sidebar: React.FC<SidebarProps> = ({ collapsed }: SidebarProps) => {
    const dispatch = useAppDispatch();

    return (
        <Sider
            theme='light'
            trigger={null}
            collapsible
            collapsed={collapsed}
            width={window.innerWidth <= 360 ? '106px' : '208px'}
            collapsedWidth='64px'
        >
            <div>
                <NavLink to='/' className={collapsed ? 'logo-collapsed' : 'logo'}>
                    <img src={collapsed ? collapsedLogo : defaultLogo} alt='Cleverfit logo' />
                </NavLink>
                <Menu theme='light' items={menuItems} />
            </div>
            <Button
                type='text'
                className={collapsed ? 'exit-collapsed' : 'exit'}
                onClick={() => {
                    dispatch(removeAccessToken());
                    history.push('/');
                }}
            >
                <img src={exit} alt='exit icon' />
                Выход
            </Button>
        </Sider>
    );
};
