import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { useLocation, useParams } from 'react-router';
import { Link } from 'react-router';

import CATEGORIES, { children } from '~/constants/categories';

const BreadCrubms = () => {
    const { pathname } = useLocation();
    const params = useParams();

    return pathname === '/' ? (
        <Breadcrumb separator={<ChevronRightIcon />} ml={127} hideBelow='xl'>
            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink>Главная</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    ) : pathname === '/juiciest' ? (
        <Breadcrumb separator={<ChevronRightIcon />} ml={127} hideBelow='xl'>
            <BreadcrumbItem>
                <BreadcrumbLink as={Link} to='/' fontWeight={400} color='blackAlpha.700'>
                    Главная
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink>Самое сочное</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    ) : (
        <Breadcrumb separator={<ChevronRightIcon />} ml={127} hideBelow='xl'>
            <BreadcrumbItem>
                <BreadcrumbLink as={Link} to='/' fontWeight={400} color='blackAlpha.700'>
                    Главная
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink
                    as={Link}
                    to={`/category/${params?.category}`}
                    fontWeight={400}
                    color='blackAlpha.700'
                >
                    {CATEGORIES.find((category) => category.path === params?.category)?.label}
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink>
                    {children.find((category) => category.path === params?.subcategory)?.label}
                </BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    );
};
export default BreadCrubms;
