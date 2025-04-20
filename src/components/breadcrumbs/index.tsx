import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { useLocation, useParams } from 'react-router';
import { Link } from 'react-router';

import CATEGORIES, { children as subcategories } from '~/constants/categories';

type BreadCrumbsProps = { hideBelow?: string; hideFrom?: string };

const BreadCrubms = ({ hideBelow, hideFrom }: BreadCrumbsProps) => {
    const { pathname } = useLocation();
    const { category, subcategory } = useParams();

    return pathname === '/' ? (
        <Breadcrumb
            separator={<ChevronRightIcon />}
            data-test-id='breadcrumbs'
            ml={{ base: 6, xl: 127 }}
            mt={{ base: 4 }}
            mb={{ base: -4 }}
            hideBelow={hideBelow}
            hideFrom={hideFrom}
            listProps={{ flexWrap: 'wrap' }}
        >
            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink>Главная</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    ) : pathname === '/the-juiciest' ? (
        <Breadcrumb
            separator={<ChevronRightIcon />}
            data-test-id='breadcrumbs'
            ml={{ base: 6, xl: 127 }}
            mt={{ base: 4 }}
            mb={{ base: -4 }}
            hideBelow={hideBelow}
            hideFrom={hideFrom}
            listProps={{ flexWrap: 'wrap' }}
        >
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
        <Breadcrumb
            separator={<ChevronRightIcon />}
            data-test-id='breadcrumbs'
            ml={{ base: 6, xl: 127 }}
            mt={{ base: 4 }}
            mb={{ base: -4 }}
            hideBelow={hideBelow}
            hideFrom={hideFrom}
            listProps={{ flexWrap: 'wrap' }}
        >
            <BreadcrumbItem>
                <BreadcrumbLink as={Link} to='/' fontWeight={400} color='blackAlpha.700'>
                    Главная
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink
                    as={Link}
                    to={`/${category}/${subcategories[0].path}`}
                    fontWeight={400}
                    color='blackAlpha.700'
                >
                    {CATEGORIES.find((categoryItem) => categoryItem.path === category)?.label}
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink>
                    {subcategories.find((category) => category.path === subcategory)?.label}
                </BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    );
};
export default BreadCrubms;
