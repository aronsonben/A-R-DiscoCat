import { createStore } from 'redux';
import allReducer from '../reducers/allReducer';

//middleware
const store = createStore(allReducer);

export default store;