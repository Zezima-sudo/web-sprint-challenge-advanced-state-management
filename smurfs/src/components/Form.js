import React from 'react'

const Form = (props) => {
    const handleChange = () => {}

    return (
        <form>
            <input 
            name='name'
            placeholder='enter name'
            value={props.formValue.name}
            onChange={props.handleChange}
           />
           <input 
               name='age'
               placeholder='enter age'
               value={props.formValue.age}
               onChange={props.handleChange}
           />
           <input 
               name='height'
               placeholder='enter height'
               value={props.formValue.height}
               onChange={props.handleChange}
           />
        </form>
    )
}

export default Form