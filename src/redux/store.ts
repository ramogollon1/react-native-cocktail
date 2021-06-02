import {configureStore} from '@reduxjs/toolkit';
import searchReducer from './search/reducer';

const reducer = {
  app: searchReducer,
};

const store = configureStore({reducer});
export type RootState = ReturnType<typeof store.getState>;

export default store;
