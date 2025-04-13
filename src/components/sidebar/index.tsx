import { Flex } from '@chakra-ui/react';

import ProfileNotifications from '../profile-notifications';

const Sidebar = () => (
    <Flex position='fixed' top='80px'>
        <ProfileNotifications type='sidebar' />
    </Flex>
);

export default Sidebar;
