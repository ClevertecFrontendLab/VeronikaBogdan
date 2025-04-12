import { HStack, Image, Text } from '@chakra-ui/react';

type BadgeProps = {
    icon?: string;
    text?: string;
    type?: string;
    hideBelow?: string;
    hideFrom?: string;
    isTopPositioned?: boolean;
};

const Badge = ({ icon, text, type, hideBelow, hideFrom, isTopPositioned }: BadgeProps) => (
    <HStack
        spacing={{ base: 0.5, xl: 2 }}
        borderRadius='base'
        py='2px'
        px={{ base: 1, xl: 2 }}
        bg={type === 'vertical' ? 'lime.150' : 'lime.50'}
        hideBelow={hideBelow}
        hideFrom={hideFrom}
        position={isTopPositioned ? 'absolute' : 'static'}
        top={2}
        left={2}
    >
        <Image src={icon} w={4} />
        <Text textStyle='text' whiteSpace='nowrap'>
            {text}
        </Text>
    </HStack>
);

export default Badge;
