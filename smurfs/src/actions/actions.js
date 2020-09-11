import axios from 'axios'
export const LOADING = 'LOADING'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'
export const ADD_SMURF = 'ADD_SMURF'
export const SELECT = 'SELECT'

export const smurfGet = () => dispatch => {
    dispatch({type: LOADING})


axios
.get('http://localhost:3333/smurfs')
.then(res => {
    console.log(res.data)
    dispatch({
        type: SUCCESS,
        payload: res.data
    })  
})
}

export const smurfPost = data => dispatch => {
    console.log('my post action')
    dispatch({type: LOADING})
    axios
    .post('http://localhost:3333/smurfs', data)
    .then(res => {
        dispatch({
            type: ADD_SMURF,
            payload: res.data
        })
    })
        .catch(err => {
            console.log(err)
        })
}

export const selectYourSmurf = () => dispatch => {
    dispatch({type: SELECT})
}