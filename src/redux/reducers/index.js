import isAwesomeReducer from './isAwesome'
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    isAwesome : isAwesomeReducer,
    // : //
})

export default allReducers;