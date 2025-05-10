import { Card, CardBody, Heading, Image, Stack, Tag, Text } from '@chakra-ui/react';

import { IMAGE_HOST } from '~/constants';
import { Step } from '~/query/types/recipies';

type StepsProps = { steps: Step[] };

const Steps = ({ steps }: StepsProps) => (
    <Stack layerStyle='recipeContainer' spacing={{ base: 5 }}>
        <Heading variant='blockTitle' size='blockTitle'>
            Шаги приготовления
        </Heading>
        {steps.map((step, index) => (
            <Card key={step.stepNumber} direction='row'>
                {step?.image && (
                    <Image
                        src={`${IMAGE_HOST}${step?.image}`}
                        borderLeftRadius='lg'
                        w={{ base: '158px', xl: '345px' }}
                        objectFit='cover'
                    />
                )}
                <CardBody px={{ base: 2, xl: 6 }} pt={{ base: 2, xl: 5 }} pb={{ base: 2, xl: 4 }}>
                    <Tag
                        textStyle='text'
                        mb={{ base: 3, xl: 4 }}
                        bg={index + 1 === steps.length ? 'lime.50' : 'blackAlpha.100'}
                    >
                        Шаг {step.stepNumber}
                    </Tag>
                    <Text textStyle='text'>{step.description}</Text>
                </CardBody>
            </Card>
        ))}
    </Stack>
);

export default Steps;
