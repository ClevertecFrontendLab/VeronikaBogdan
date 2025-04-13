import { Stack } from '@chakra-ui/react';

import ContentContainer from '~/components/content-container';

import Blog from './blog';
import Juiciest from './juiciest';
import NewRecipies from './new-recipies';

const MainPage = () => (
    <ContentContainer title='Приятного аппетита!'>
        <NewRecipies />
        <Juiciest />
        <Blog />
        <Stack>
            <div>1</div>
            <div>2</div>
        </Stack>
    </ContentContainer>
);

export default MainPage;
