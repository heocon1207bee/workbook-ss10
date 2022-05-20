import React from 'react'
import {useState} from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import './styles.css'

const SignUp = () => {

    const [user, setUser] = useState({
        username: '',
        password: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        let userData = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem(userData)) : []
        userData = [...userData, user]
        localStorage.setItem('userData', JSON.stringify(userData))
    }

  return (
    <div>
        <Header/>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='username' value={user.username} onChange={(e) => {setUser({...user, username: e.target.value})}}/>
            <input type='password' placeholder='password' value={user.password} onChange={(e) => {setUser({...user, password: e.target.value})}}/>
            <button type='submit'>Submit</button>
        </form>
        <Footer/>
    </div>
  )
}

export default SignUp