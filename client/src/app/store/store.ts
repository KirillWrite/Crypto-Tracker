import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { coingeckoApi } from '@/entities/coin/api/coingeckoApi';
import { transactionReducer } from '@/entities/transaction/slice/transactionsSlice';
import { settingsReducer } from '@/entities/settings/slice/settingsSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist/es/constants';

// объединяем редьюсеры в один корневой редьюсер
const rootReducer = combineReducers({
  [coingeckoApi.reducerPath]: coingeckoApi.reducer,
  transactions: transactionReducer,
  settings: settingsReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['transactions', 'settings'],
};

const persisistedReducer = persistReducer(persistConfig, rootReducer);

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
