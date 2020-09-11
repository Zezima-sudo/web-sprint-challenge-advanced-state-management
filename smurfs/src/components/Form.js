import React from 'react'

const Form = ({form, handleChange}) => {


    

    return (
        <form>
            <label htmlFor='name'>
            <input 
            name='name'
            placeholder='enter name'
            value={form.name}
            onChange={handleChange}
           />
           </label>
           <label htmlFor='age'>
           <input 
               name='age'
               placeholder='enter age'
               value={form.age}
               onChange={handleChange}
           />
           </label>
           <label htmlFor='height'>
           <input 
               name='height'
               placeholder='enter height'
               value={form.height}
               onChange={handleChange}
           />
           </label>
        </form>
        )
    
    }


export default Form