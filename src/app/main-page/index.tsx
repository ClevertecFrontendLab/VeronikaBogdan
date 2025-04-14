import Blog from '~/app/main-page/blog';
import Juiciest from '~/app/main-page/juiciest';
import NewRecipies from '~/app/main-page/new-recipies';
import ContentContainer from '~/components/content-container';
import RelevantKitchen from '~/components/relevant-kitchen';
import { RELEVANT_KITCHEN_MAIN } from '~/constants/relevant-kitchen';

const MainPage = () => (
    <ContentContainer title='Приятного аппетита!'>
        <NewRecipies />
        <Juiciest />
        <Blog />
        <RelevantKitchen data={RELEVANT_KITCHEN_MAIN} />
    </ContentContainer>
);

export default MainPage;
