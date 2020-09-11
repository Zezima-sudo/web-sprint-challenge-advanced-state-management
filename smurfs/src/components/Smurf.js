import React from 'react'
import {selectYourSmurf} from '../actions/actions'

export const Smurf = ({name, age, height}) => {
    return (
        <div onClick={() => [selectYourSmurf()]}>

        
        <h5>
            Name:
            {name}   
        </h5>
        <h5>
            Age: {age}
        </h5>
        <h5>
            Height: {height}
        </h5>
        </div>
    )
}