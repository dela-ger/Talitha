"use client"
import React, { useState } from 'react'

function SignInForm() {
    const [formData, setFromData] = useState({
            email: '',
            password: ''
        });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
            setFromData({
                ...formData, [name]: value
            })
        };

        // handle submit when the form button is pressed
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            console.log("Button pressed")
            // reset form after pressing submit
            setFromData({
                email: '',
                password: ''
            });
        };


  return (
    <>
        <form className='
        flex flex-col min-h-screen justify-center items-center
        p-8 rounded-lg shadow-md border bg-white border-blue-500' action="" onSubmit={handleSubmit}>
            
            <h2 className='text-2xl font-bold mb-6'>Sign In</h2>
            
            {/* email field */}
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

{/* password field */}
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

export default SignInForm