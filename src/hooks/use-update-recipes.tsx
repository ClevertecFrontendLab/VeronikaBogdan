import { useEffect } from 'react';

import { RecipesResponse } from '~/query/types/recipies';
import { setRecipes } from '~/store/filters-slice';
import { useAppDispatch } from '~/store/hooks';

type UpdateRecipesProps = RecipesResponse | undefined;

const useUpdateRecipes = (recipes: UpdateRecipesProps) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (recipes) {
            dispatch(setRecipes(recipes.data));
        }
    }, [dispatch, recipes, recipes?.data]);
};

export default useUpdateRecipes;
