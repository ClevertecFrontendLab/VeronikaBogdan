import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { HOST } from '~/constants';
import { Tags } from '~/query/constants/tags';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: HOST }),
    endpoints: () => ({}),
    tagTypes: [Tags.RECIPE],
});
