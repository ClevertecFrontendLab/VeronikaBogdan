import { Flex, Image, VisuallyHiddenInput } from '@chakra-ui/react';

import Empty from '~/assets/svg/empty-image.svg';

type Sizes = { base: string; md: string; xl: string; '3xl': string } | string;

type Options = { required?: boolean };

type EmptyImageProps = {
    inputName: string;
    inputOptions?: Options;
    isError?: boolean;
    dataTestIdInput?: string;
    dataTestIdBlock?: string;
    w?: Partial<Sizes>;
    h?: Partial<Sizes>;
    onClick?: () => void;
    onChangeFile?: (data: FormData) => void;
    isModal?: boolean;
};

const EmptyImage = ({
    w,
    h,
    dataTestIdInput,
    dataTestIdBlock,
    isError,
    onClick,
    onChangeFile,
    isModal,
}: EmptyImageProps) => (
    <label
        htmlFor={isModal ? 'file' : ''}
        onClick={() => {
            if (onClick) {
                onClick();
            }
        }}
    >
        <Flex
            data-test-id={dataTestIdBlock}
            w={w}
            h={h}
            borderRadius='lg'
            bg='blackAlpha.200'
            align='center'
            justify='center'
            border={isError ? '2px solid' : ''}
            borderColor={isError ? 'red.500' : ''}
        >
            <Image src={Empty} boxSize={8} />
            <VisuallyHiddenInput
                type='file'
                id='file'
                data-test-id={dataTestIdInput}
                onChange={({ target }) => {
                    if (onChangeFile) {
                        const file = target.files[0];

                        const formData = new FormData();
                        formData.append('file', file);

                        onChangeFile(formData);
                    }
                }}
            />
        </Flex>
    </label>
);

export default EmptyImage;
