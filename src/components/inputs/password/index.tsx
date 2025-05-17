import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
    Button,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Icon,
    Input,
    InputGroup,
    InputRightElement,
    useBoolean,
} from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

type optionsProps = {
    required?: string;
    validate?: {
        hasPassword: (password: string) => true | string;
    };
    minLength?: { value: number; message: string };
    maxLength?: { value: number; message: string };
    onBlur?: ({ target }) => void;
};

type PasswordProps = {
    title: string;
    dataTestId: string;
    name: string;

    options: optionsProps;
    error?: string;
    helper?: string;
};

const Password = ({ title, dataTestId, name, error, options, helper }: PasswordProps) => {
    const { register } = useFormContext();

    const [show, toggleEye] = useBoolean();

    return (
        <FormControl isInvalid={Boolean(error)}>
            <FormLabel fontWeight={400}>{title}</FormLabel>
            <InputGroup>
                <Input
                    data-test-id={dataTestId}
                    pr='4.5rem'
                    type={show ? 'text' : 'password'}
                    variant={error ? 'error' : 'auth'}
                    placeholder='Пароль'
                    {...register(name, {
                        ...options,
                    })}
                />
                <InputRightElement width='2.5rem'>
                    <Button
                        data-test-id='password-visibility-button'
                        backgroundColor='inherit'
                        _hover={{ backgroundColor: 'inherit' }}
                        onMouseDown={toggleEye.on}
                        onMouseUp={toggleEye.off}
                    >
                        <Icon as={show ? ViewIcon : ViewOffIcon} />
                    </Button>
                </InputRightElement>
            </InputGroup>
            {helper && <FormHelperText textStyle='smallText'>{helper}</FormHelperText>}
            {error && <FormErrorMessage textStyle='smallText'>{error}</FormErrorMessage>}
        </FormControl>
    );
};

export default Password;
