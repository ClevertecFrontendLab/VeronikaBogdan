import { Image, Tag, TagLabel } from '@chakra-ui/react';

import BookmarkHeart from '~/assets/svg/bookmark-heart.svg';
import EmojiHeartEyes from '~/assets/svg/emoji-heart-eyes.svg';

type IconCountWrapperProps = { type: 'favorite' | 'like'; count: number };

const IconCountWrapper = ({ type, count }: IconCountWrapperProps) => (
    <Tag size='sm' colorScheme='transparent' p={1} display={count === 0 ? 'none' : 'inline-flex'}>
        <Image src={type === 'favorite' ? BookmarkHeart : EmojiHeartEyes} boxSize={3} />
        <TagLabel ml={1.5} color='lime.600'>
            {count}
        </TagLabel>
    </Tag>
);

export default IconCountWrapper;
