import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
// import { Link } from 'react-router';

const BreadCrubms = () => (
    <Breadcrumb separator={<ChevronRightIcon />} ml={127} hideBelow='xl'>
        {/* <BreadcrumbItem>
            <BreadcrumbLink
                as={Link}
                to='/'
                color='blackAlpha.700'
                fontWeight='400'
                // letterSpacing='1px'
            >
                Главная
            </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
            <BreadcrumbLink
                as={Link}
                to='#'
                color='blackAlpha.700'
                fontWeight='400'
                // letterSpacing='1px'
            >
                Веганская кухня
            </BreadcrumbLink>
        </BreadcrumbItem> */}
        <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink
            // letterSpacing='1px'
            >
                Главная
            </BreadcrumbLink>
            {/* <BreadcrumbLink>Вторые блюда</BreadcrumbLink> */}
        </BreadcrumbItem>
    </Breadcrumb>
);

export default BreadCrubms;
