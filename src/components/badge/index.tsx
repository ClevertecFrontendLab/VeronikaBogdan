import { HStack, Image, Text } from '@chakra-ui/react';

type BadgeProps = {
    icon?: string;
    text?: string;
    type?: string;
    hideBelow?: string;
    hideFrom?: string;
    isTopPositioned?: boolean;
    isBottomPositioned?: boolean;
};

const Badge = ({
    icon,
    text,
    type,
    hideBelow,
    hideFrom,
    isTopPositioned,
    isBottomPositioned,
}: BadgeProps) => (
    <HStack
        spacing={{ base: 0.5, xl: 2 }}
        borderRadius='base'
        py='2px'
        px={{ base: 1, xl: 2 }}
        bg={type === 'time' ? 'blackAlpha.100' : type === 'vertical' ? 'lime.150' : 'lime.50'}
        hideBelow={hideBelow}
        hideFrom={hideFrom}
        position={isTopPositioned || isBottomPositioned ? 'absolute' : 'static'}
        top={isTopPositioned ? 2 : ''}
        left={isTopPositioned ? 2 : isBottomPositioned ? 6 : ''}
        bottom={isBottomPositioned ? 5 : ''}
        w='fit-content'
    >
        <Image src={icon} w={4} />
        <Text textStyle='text' whiteSpace='nowrap'>
            {text}
        </Text>
    </HStack>
);

export default Badge;
