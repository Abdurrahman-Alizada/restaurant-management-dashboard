import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// slices
import userReducer from './slices/user'
import groupReducer from './slices/groups'
import TimingReducer from './slices/Timing'
// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: [],
};

const rootReducer = combineReducers({
  
  user: userReducer,
  groups : groupReducer,
  timing : TimingReducer,

});

export { rootPersistConfig, rootReducer };
