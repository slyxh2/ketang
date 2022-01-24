import { AnyAction } from 'redux'

interface HomeState {
    name: string
}
let initialState: HomeState = {
    name: 'patrick'
}
const home = (state: HomeState = initialState, action: AnyAction): HomeState => {
    return state
};

export default home;