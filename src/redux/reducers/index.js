import isAwesomeReducer from './isAwesome.js'
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    isAwesome : isAwesomeReducer,
    // : //
})

export default allReducers;