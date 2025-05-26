import { Flex, Image, VisuallyHiddenInput } from '@chakra-ui/react';

import Empty from '~/assets/svg/empty-image.svg';

type Sizes = { base: string; md: string; xl: string; '3xl': string } | string;

type EmptyImageProps = {
    w?: Partial<Sizes>;
    h?: Partial<Sizes>;
    dataTestIdInput?: string;
    dataTestIdBlock?: string;
};

const EmptyImage = ({ w, h, dataTestIdInput, dataTestIdBlock }: EmptyImageProps) => (
    <Flex
        data-test-id={dataTestIdBlock}
        w={w}
        h={h}
        borderRadius='lg'
        bg='blackAlpha.200'
        align='center'
        justify='center'
    >
        <Image src={Empty} boxSize={8} />
        <VisuallyHiddenInput type='file' data-test-id={dataTestIdInput} />
    </Flex>
);

export default EmptyImage;
