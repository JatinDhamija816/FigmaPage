import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-between mt-5 sm:flex-col'>
            <div>
                <h1 className='text-2xl text-blue-950 font-semibold sm:text-center'>Hygge<span className='font-bold text-2xl '>X</span></h1>
            </div>
            <div className='flex justify-center align-middle text-center sm:ml-3'>
                <ul className='flex py-2'>
                    <li className='  sm:mx-3 mx-6 hover:cursor-pointer hover:border-b'>Home</li>
                    <li className='  sm:mx-3 mx-6 hover:cursor-pointer hover:border-b'>Flashcard</li>
                    <li className='  sm:mx-3 mx-6 hover:cursor-pointer hover:border-b'>Contact</li>
                    <li className='  sm:mx-3 mx-6 hover:cursor-pointer hover:border-b'>FAQ</li>
                </ul>
                <div>
                    <button className='mx-6 px-8 py-2 rounded-full bg-gradient-to-b from-blue-950 to-blue-700 text-white '>Login</button>
                </div>
            </div>

        </div>
    )
}

export default Navbar
