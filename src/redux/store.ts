import { rtkQueryErrorLogger } from './middlewares/error.middleware';
import { rootReduser } from './redusers';
import storage from "redux-persist/lib/storage"
import { configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist';
import { api } from './api/api';

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['auth']
}

const persistedReduser = persistReducer(persistConfig, rootReduser)

export const store = configureStore({
  reducer: persistedReduser,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  }).concat(rtkQueryErrorLogger).concat(api.middleware)
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof rootReduser>