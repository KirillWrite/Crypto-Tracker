import { configureStore } from "@reduxjs/toolkit";
import {coingeckoApi} from '@/entities/coin/api/coingeckoApi'
import { transactionReducer } from "@/entities/transaction/slice/transactionsSlice";

// создаём store - глобальное хранилище данных
export const store = configureStore({
  reducer: {
    [coingeckoApi.reducerPath]: coingeckoApi.reducer,
    transactions: transactionReducer,
  },

  middleware: ((getDefaultMiddleware)=>getDefaultMiddleware().concat(coingeckoApi.middleware))
});

// экспортируем типы для написания кастомных хуков useAppSelector и useAppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
