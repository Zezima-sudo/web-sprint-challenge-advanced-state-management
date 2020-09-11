import React from 'react'

const Form = ({form, handleChange}) => {


    

    return (
        <form>
            <input 
            name='name'
            placeholder='enter name'
            value={form.name}
            onChange={handleChange}
           />
           <input 
               name='age'
               placeholder='enter age'
               value={form.age}
               onChange={handleChange}
           />
           <input 
               name='height'
               placeholder='enter height'
               value={form.height}
               onChange={handleChange}
           />
        </form>
        )
    
    }


export default Form