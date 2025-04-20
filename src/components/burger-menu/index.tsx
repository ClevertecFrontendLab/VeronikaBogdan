import { Box } from '@chakra-ui/react';

import NavigationMenu from '~/components/navigation-menu';
import { useAppSelector } from '~/store/hooks';
import { menuSelector } from '~/store/menu-slice';

const BurgerMenu = () => {
    const { isBurgerMenu } = useAppSelector(menuSelector);

    return (
        isBurgerMenu && (
            <Box layerStyle='blur'>
                <NavigationMenu />
            </Box>
        )
    );
};

export default BurgerMenu;
