import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

import './sidemenu-switcher.scss';

type SidemenuSwitcherProps = { collapsed: boolean; onClick: () => void };

export const SidemenuSwitcher: React.FC<SidemenuSwitcherProps> = ({
    collapsed,
    onClick,
}: SidemenuSwitcherProps) => (
    <button data-test-id='sider-switch' className='trigger' onClick={onClick}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    </button>
);
