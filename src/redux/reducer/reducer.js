import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Note: importing reducers...! 
import authReducer from './auth-reducer/auth-reducer';
import builderReducer from './builder-reducer/builder-reducer';
import customerReducer from './customers-reducer/customers-reducer';

const persistConfig = {
    key: 'root',
    storage,
    whiteList: []
}

const rootReducer = combineReducers({
    authStates: authReducer,
    builderStates: builderReducer,
    customerStates: customerReducer
})

export default persistReducer(persistConfig, rootReducer)