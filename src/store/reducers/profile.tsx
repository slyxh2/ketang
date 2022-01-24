import { AnyAction } from 'redux'

interface ProfileState {

}
let initialState: ProfileState = {}
const profile = (state: ProfileState = initialState, action: AnyAction): ProfileState => {
    return state
};

export default profile;