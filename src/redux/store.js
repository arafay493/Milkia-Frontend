import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import rootReducer from '../redux/reducer/reducer.js'

// Note: Redux store...! 

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false
  })
})

// Note: Redux persist store...!
const persistor = persistStore(store)

export { persistor, store }