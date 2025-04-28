import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router';
import { Link } from 'react-router';

import { ALL_CARDS } from '~/constants/grid-cards';
import { setBurgerMenuState } from '~/store/menu-slice';
import { getCategory, getSingleSubcategory, getSubcategories } from '~/utils/currentPaths';

type BreadCrumbsProps = { hideBelow?: string; hideFrom?: string };

const BreadCrubms = ({ hideBelow, hideFrom }: BreadCrumbsProps) => {
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const { category, subcategory, recipeId } = useParams();

    const handleHide = () => {
        dispatch(setBurgerMenuState());
    };

    return pathname === '/' ? (
        <Breadcrumb
            separator={<ChevronRightIcon />}
            data-test-id='breadcrumbs'
            ml={{ base: 6, xl: 127 }}
            mt={{ base: 4, xl: 0 }}
            mb={{ base: -4, xl: 0 }}
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
            mt={{ base: 4, xl: 0 }}
            mb={{ base: -4, xl: 0 }}
            hideBelow={hideBelow}
            hideFrom={hideFrom}
            listProps={{ flexWrap: 'wrap' }}
        >
            <BreadcrumbItem>
                <BreadcrumbLink
                    as={Link}
                    to='/'
                    fontWeight={400}
                    color='blackAlpha.700'
                    onClick={handleHide}
                >
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
            mt={{ base: 4, xl: 0 }}
            mb={{ base: -4, xl: 0 }}
            hideBelow={hideBelow}
            hideFrom={hideFrom}
            listProps={{ flexWrap: 'wrap' }}
        >
            <BreadcrumbItem>
                <BreadcrumbLink
                    as={Link}
                    to='/'
                    fontWeight={400}
                    color='blackAlpha.700'
                    onClick={handleHide}
                >
                    Главная
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink
                    as={Link}
                    to={`/${category}/${getSubcategories(category)[0].path}`}
                    fontWeight={400}
                    color='blackAlpha.700'
                    onClick={handleHide}
                >
                    {getCategory(category)?.label}
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem
                as={recipeId ? Link : undefined}
                to={`/${category}/${getSingleSubcategory(category, subcategory)?.path}`}
                isCurrentPage={!recipeId}
                fontWeight={400}
                color={recipeId ? 'blackAlpha.700' : 'black'}
                onClick={() => (recipeId ? handleHide() : '')}
            >
                <BreadcrumbLink>
                    {getSingleSubcategory(category, subcategory)?.label}
                </BreadcrumbLink>
            </BreadcrumbItem>
            {recipeId && (
                <BreadcrumbItem isCurrentPage={!!recipeId}>
                    <BreadcrumbLink>
                        {ALL_CARDS.find((card) => card.id === recipeId)?.title}
                    </BreadcrumbLink>
                </BreadcrumbItem>
            )}
        </Breadcrumb>
    );
};
export default BreadCrubms;
