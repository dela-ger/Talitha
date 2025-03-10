"use client"
import React, { useState } from 'react'

function SignUpForm() {
    const [formData, setFromData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = () => {

    }

  return (
    <>
        <form action="">
            <h2>Sign Up</h2>
            <input 
                type="text"
                name='name'
                placeholder='Full Name'
                value={formData.name}
                onChange={handleChange}
            />
            <input 
                type="email"
                name='email'
                placeholder='Email'
                value={formData.email}
                onChange={handleChange}
            />
            <input 
                type="password"
                name='password'
                placeholder='Password'
                value={formData.password}
                onChange={handleChange}
            />
            <button type='submit'>
                Register
            </button>
        </form>
    </>
  )
}

export default SignUpForm