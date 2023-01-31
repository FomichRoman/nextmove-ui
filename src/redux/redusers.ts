import { reducer as toastrRedusers } from 'react-redux-toastr';
import { combineReducers } from '@reduxjs/toolkit';
import { authSlice } from './auth/auth.slice';
import { api } from './api/api';
export const rootReduser = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authSlice.reducer,
  toastr: toastrRedusers
})