// src/stores/rootReducer.ts
import authReducer from '@domain/auth/authSlice';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  auth: authReducer,
  // tambahkan reducers lain sesuai kebutuhan
});

export default rootReducer;
