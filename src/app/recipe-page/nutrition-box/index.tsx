import { GridItem, Text } from '@chakra-ui/react';

type NutritionBox = {
    name: string;
    count: number;
    unit: string;
    pl?: number;
};

const NutritionBox = ({ name, count, unit, pl }: NutritionBox) => (
    <GridItem
        display='flex'
        flexDir={{ base: 'row', md: 'column' }}
        layerStyle='nutritionBox'
        px={{ base: 2, xl: 4, '3xl': 6 }}
        pr={{ base: 6, md: 0 }}
        py={{ base: 4 }}
        gap={3}
        justifyContent='space-between'
        alignItems='center'
    >
        <Text fontWeight={400} fontSize='14px' lineHeight='143%' color='blackAlpha.600'>
            {name}
        </Text>
        <Text
            fontWeight={500}
            fontSize={{ base: '24px', md: '36px' }}
            lineHeight={{ base: '133%', md: '111%' }}
            color='lime.800'
            pl={{ base: pl, md: 0 }}
        >
            {count}
        </Text>
        <Text
            textTransform='uppercase'
            fontWeight={600}
            fontSize={{ base: '12px', md: '14px' }}
            lineHeight={{ base: '133%', md: '143%' }}
            color='blackAlpha.900'
        >
            {unit}
        </Text>
    </GridItem>
);

export default NutritionBox;
