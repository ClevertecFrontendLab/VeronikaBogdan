import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

import './sidemenu-switcher.scss';

type SidemenuSwitcherProps = { collapsed: boolean; onClick: () => void };

export const SidemenuSwitcher: React.FC<SidemenuSwitcherProps> = ({
    collapsed,
    onClick,
}: SidemenuSwitcherProps) => (
    <button
        data-test-id={window.innerWidth <= 360 ? 'sider-switch-mobile' : 'sider-switch'}
        className={collapsed ? 'trigger-collapsed' : 'trigger'}
        onClick={onClick}
    >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    </button>
);
