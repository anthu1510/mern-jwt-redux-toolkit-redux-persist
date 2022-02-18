import { configureStore, combineReducers  } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";

import authReducer from "./reducers/authSlice";

const rootReducer = combineReducers({
    auth: authReducer
});

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    transforms: [
            encryptTransform({
                secretKey: 'my-super-secret-key',
                onError: function (error) {
                    // Handle the error.
                },
            }),
        ]
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);

export default store;


