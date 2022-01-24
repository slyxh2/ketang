import { AnyAction } from 'redux'

interface CartState {

}
let initialState: CartState = {}
const cart = (state: CartState = initialState, action: AnyAction): CartState => {
    return state
};

export default cart;