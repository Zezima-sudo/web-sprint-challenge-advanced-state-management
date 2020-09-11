import React, {useState} from 'react'
import {connect} from 'react-redux'
import {smurfGet,smurfPost} from '../actions/actions'
import Form from './Form' //need to od
import {List} from '../components/List'// need to do
import './App.css'

function App ({smurfPost, smurf, selectYourSmurf}) {
  const [form, setForm] = useState({
    name: '',
    age: '',
    height: '',
    id: ''
    })

    const submitHandler = e => {
      const smurfState = {
        ...form,
        id: Date.now()
      }
      smurfPost(smurfState)
      setForm({
        name: '',
        age: '',
        height: '',
        id: ''
      })
    }

    const handleChange = e => {
      setForm({
        ...form, 
        [e.target.name]: e.target.value

      })
    }

    return (
      <div className='App'>
        <h1>Magical Smurf Machine</h1>
        <Form form={form} handleChange={handleChange} />
        <button onClick={() => {
          submitHandler()
        }}>Add a smurf
        </button>

        <List
        smurfs={smurf}
        onClick={() => {
          selectYourSmurf()
        }}
        />

      </div>
    )
}

const mapPropsToState = state => {
  return {
    smurf: state.smurf
  }
}

export default connect(mapPropsToState, {smurfGet, smurfPost})(App)
