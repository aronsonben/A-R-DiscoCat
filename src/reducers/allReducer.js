import { combineReducers } from 'redux'
import initialState from '../state/initialState'
import updateFormReducer from './UpdateFormReducer';
import addEntityReducer from './AddEntityReducer';

const testReducer = (state = initialState.test, action) => {
    return state;
}

const allReducer = combineReducers({
    test: testReducer,
    inputValues: updateFormReducer,
    dataLists: addEntityReducer
});

export default allReducer;
