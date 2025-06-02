import { Flex, IconButton, Image, Stack, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import WritebleLight from '~/assets/svg/writeble-light.svg';
import ProfileNotifications from '~/components/profile-notifications';
import { ROUTES } from '~/constants/routes';

const Sidebar = () => {
    const navigate = useNavigate();

    const handleNewRecipeNavigation = () => navigate(ROUTES.newRecipe);

    return (
        <Flex
            position='fixed'
            top='80px'
            right={0}
            h='calc(100vh - 80px)'
            direction='column'
            justify='space-between'
        >
            <ProfileNotifications type='sidebar' />
            <Stack
                alignItems='center'
                pt='20px'
                bgGradient='radial(50% 50% at 50% 47%, #c4ff61 -55%, rgba(255, 255, 255, 0) 100%)'
                bottom={10}
                right={10}
                position='relative'
                onClick={handleNewRecipeNavigation}
            >
                <IconButton
                    isRound={true}
                    variant='solid'
                    w='48px'
                    h='48px'
                    bg='black'
                    aria-label='Записать рецепт'
                    icon={<Image src={WritebleLight} boxSize={6} />}
                    data-test-id='add-recipe-button'
                />
                <Text textStyle='footerInactive' mt={2}>
                    Записать рецепт
                </Text>
            </Stack>
        </Flex>
    );
};

export default Sidebar;
