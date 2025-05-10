import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { HOST } from '~/constants';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: HOST }),
    endpoints: () => ({}),
});
