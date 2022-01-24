import { combineReducers, ReducersMapObject } from 'redux';
import home from './home';
import cart from './cart';
import profile from './profile';

type combinedState = {
    [key in keyof typeof reducers]: ReturnType<typeof reducers[key]>
};

let reducers: ReducersMapObject = {
    home,
    cart,
    profile
};
let combinedReducers = combineReducers(reducers);

export default combinedReducers;