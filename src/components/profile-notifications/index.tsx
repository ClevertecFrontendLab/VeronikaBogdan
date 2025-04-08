import { Flex, HStack, Image, Text } from '@chakra-ui/react';

import BookmarkHeart from '~/assets/svg/bookmark-heart.svg';
import EmojiHeartEyes from '~/assets/svg/emoji-heart-eyes.svg';
import PeopleFill from '~/assets/svg/people-fill.svg';

type ProfileNotificationsProps = { type: string };

const ProfileNotifications = ({ type }: ProfileNotificationsProps) => {
    const profileNotifications = [
        { icon: BookmarkHeart, count: 185 },
        { icon: PeopleFill, count: 589 },
        { icon: EmojiHeartEyes, count: 587 },
    ];

    return (
        <Flex
            hideBelow={type === 'sidebar' ? 'xl' : ''}
            hideFrom={type === 'header' ? 'xl' : ''}
            direction={{ base: 'row', xl: 'column' }}
            gap={{ base: 4, xl: 10 }}
            mr={{ base: 7, md: 9 }}
        >
            {profileNotifications.map((notification) => (
                <HStack key={notification.icon} spacing={{ base: 2, md: 2, xl: 2 }}>
                    <Image src={notification.icon} w={{ base: 3, xl: 4 }} h={{ base: 3, xl: 4 }} />
                    <Text
                        color='lime.600'
                        fontWeight='semibold'
                        fontSize={{ base: 'xs', xl: 'md' }}
                    >
                        {notification.count}
                    </Text>
                </HStack>
            ))}
        </Flex>
    );
};

export default ProfileNotifications;
