import createWebStorage from 'redux-persist/es/storage/createWebStorage';

type NoopStorage  = {
  getItem: (key: string) => Promise<string | null>;
  setItem: (key: string, value: unknown) => Promise<unknown>;
  removeItem: () => Promise<void>;
};

const createNoopStorage = (): NoopStorage => ({
  getItem: async () => null,
  setItem: async (_key: string, value: unknown) => value,
  removeItem: async (): Promise<void> => {},
});

// Условное хранилище
const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();

export default storage;

