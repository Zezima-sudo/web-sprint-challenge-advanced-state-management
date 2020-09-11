import {START, ADD_SMURF, SELECT } from '../actions/'
const DEL_SMURF = 'DEL_SMURF'

export const initialState = {
    isLoading: false,
    smurf: [{
        name: '',
        age: '',
        height: '',
        selected: false,
        id: null

    }]
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case START:
            return {
                ...state,
                isLoading: true
            }
        case ADD_SMURF:
                return {
                    ...state,
                    smurf: action.payload,
                    isLoading: false
                }
        case SELECT:
            return {
                smurf: state.smurf.map((smurfs, idx) =>
                  idx === action.idx
                    ? { ...smurfs, selected: !smurfs.selected }
                    : smurfs
                )
              };
        case DEL_SMURF:
            return {
                ...state,
                smurf: state.smurf.filter(i => {
                    return i.selected === false
                })
            }
            default:
                return state
        }
        }

        export default reducer