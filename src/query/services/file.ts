import { JWT_TOKEN_NAME } from '~/constants';
import { apiSlice } from '~/query/create-api.ts';
import { File, FileResponse } from '~/query/types/file';

export const fileApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        saveRecipeImage: builder.mutation<FileResponse, File>({
            query: (body) => ({
                url: '/file/upload',
                method: 'POST',
                body,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(JWT_TOKEN_NAME)}`,
                },
            }),
        }),
    }),
});

export const { useSaveRecipeImageMutation } = fileApiSlice;
