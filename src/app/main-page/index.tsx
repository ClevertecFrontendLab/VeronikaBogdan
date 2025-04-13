import ContentContainer from '~/components/content-container';
import RelevantKitchen from '~/components/relevant-kitchen';
import { RELEVANT_KITCHEN_MAIN } from '~/constants/relevant-kitchen';

import Blog from './blog';
import Juiciest from './juiciest';
import NewRecipies from './new-recipies';

const MainPage = () => (
    <ContentContainer title='Приятного аппетита!'>
        <NewRecipies />
        <Juiciest />
        <Blog />
        <RelevantKitchen data={RELEVANT_KITCHEN_MAIN} />
    </ContentContainer>
);

export default MainPage;
