"use client"
import React, { useState } from 'react'

function SignUpForm() {
    const [formData, setFromData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFromData({
            ...formData, [name]: value
        })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("Button pressed")
        // reset form after pressing submit
        setFromData({
            name:'',
            email: '',
            password: ''
        });
    };

  return (
    <>
        <form className='
        flex flex-col min-h-screen justify-center items-center
        p-8 rounded-lg shadow-md border bg-white border-blue-500' action="" onSubmit={handleSubmit}>
            <h2 className='text-2xl font-bold mb-6'>Sign Up</h2>
            
            {/* name field */}
            <div className='flex flex-col mb-4 w-64 '>
                <label className=''>Name</label>
                <input className='border border-black-200'
                    type="text"
                    name='name'
                    placeholder='Full Name'
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>

            <div className='flex flex-col mb-4 w-64'>
                <label className=''>Email</label>
                <input className='border border-black-200'
                    type="email"
                    name='email'
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>

            <div className='flex flex-col mb-4 w-64'>
                <label className=''>Password</label>
                <input className='border border-black-200'
                    type="password"
                    name='password'
                    placeholder='Password'
                    value={formData.password}
                    onChange={handleChange}
                />
            </div>
            <button type='submit' 
                className='w-64 bg-blue-500 text-white py-2 cursor-pointer'>
                Register
            </button>
        </form>
    </>
  )
}

export default SignUpForm