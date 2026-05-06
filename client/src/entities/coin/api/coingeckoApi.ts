import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { CoinDetails, CoinMarket, SearchCoin, SearchResponse, GlobalStats } from '../model/types';

export const coingeckoApi = createApi({
  reducerPath: 'coingeckoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_COINGECKO_BASE_URL,
    prepareHeaders: (headers) => {
      const apiKey = process.env.NEXT_PUBLIC_COINGECKO_API_KEY || '';
      if (apiKey) {
        headers.set('x-cg-demo-api-key', apiKey);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCoins: builder.query<CoinMarket[], void>({
      query: () => ({
        url: '/coins/markets',
        params: {
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: 100,
          page: 1,
          price_change_percentage: '1h,24h,7d', 
        },
      }),
    }),

    getGlobalStats: builder.query<GlobalStats, void>({
      query: () => ({
        url: '/global',
      }),
    }),

    searchCoins: builder.query<SearchCoin[], string>({
      query: (query) => ({
        url: '/search',
        params: {
          query,
        },
      }),
    }),

    getCoinDetails: builder.query<CoinDetails, string>({
      query: (id) => ({
        url: `/coins/${id}`,
        params: {
          localization: false,
          tickers: false,
          market_data: true,
          community_data: false,
          developer_data: false,
          sparkline: false,
        },
      }),
    }),
  }),
});
export const { useGetTopCoinsQuery, useSearchCoinsQuery, useGetCoinDetailsQuery, useGetGlobalStatsQuery } = coingeckoApi;
