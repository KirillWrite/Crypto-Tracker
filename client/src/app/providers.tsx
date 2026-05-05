'use client';

import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { Provider } from 'react-redux';
import { persistor, store } from '@/app/store';
import { PersistGate } from 'redux-persist/lib/integration/react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MantineProvider>{children}</MantineProvider>
      </PersistGate>
    </Provider>
  );
}
