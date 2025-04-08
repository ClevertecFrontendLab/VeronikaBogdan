import { Flex } from '@chakra-ui/react';

import ProfileNotifications from '../profile-notifications';

const Sidebar = () => (
    <Flex>
        <ProfileNotifications type='sidebar' />
    </Flex>
);

export default Sidebar;
