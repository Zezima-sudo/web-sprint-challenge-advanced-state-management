import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Form from './Form'


test('form should successfully submit inputs', () => {
    render(<Form />)

    const heightTest = screen.getByLabelText(/height/i)
    const ageTest = screen.getByLabelText(/age/i)
    const nameTest = screen.getByLabelText(/name/i)

    fireEvent.change(heightTest, { target: {value: '99'} })
    fireEvent.change(ageTest, { target: {value: '9001'} })
    fireEvent.change(nameTest, { target: {value: 'Test'} })

    const submitButton = screen.getByRole("button", /add new smurf/i)
    fireEvent.click(submitButton)
})