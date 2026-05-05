import { configureStore } from '@reduxjs/toolkit';
import { coingeckoApi } from '@/entities/coin/api/coingeckoApi';
import { persisistedReducer } from '@/app/store/persistConfig';
import { persistStore } from 'redux-persist';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist/es/constants';

//store - глобальное хранилище данных
export const store = configureStore({
  reducer: persisistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(coingeckoApi.middleware),
});

export const persistor = persistStore(store);

// экспортируем типы для написания кастомных хуков useAppSelector и useAppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
