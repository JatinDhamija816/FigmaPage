import React from 'react'
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
const Main = () => {
    return (
        <div className='mt-8 mb-5'>
            <div>
                <h1 className='font-semibold text-2xl text-indigo-950'>Relations and Functions ( Mathematics )</h1>
            </div>
            <div className='flex justify-center my-5'>
                <ul className='flex'>
                    <li className='mx-3 hover:text-indigo-950 hover:border-b-2 border-black px-2 hover:font-semibold'>Study</li>
                    <li className='mx-3 hover:text-indigo-950 hover:border-b-2 border-black px-2 hover:font-semibold'>Quiz</li>
                    <li className='mx-3 hover:text-indigo-950 hover:border-b-2 border-black px-2 hover:font-semibold'>Test</li>
                    <li className='mx-3 hover:text-indigo-950 hover:border-b-2 border-black px-2 hover:font-semibold'>Game</li>
                    <li className='mx-3 hover:text-indigo-950 hover:border-b-2 border-black px-2 hover:font-semibold'>Others</li>
                </ul>
            </div>
            <div className='md:w-5/6 mx-auto w-1/3 rounded-2xl h-60 bg-gradient-to-bl from-indigo-800 to-cyan-600'>
                <div className='flex justify-between mx-5'>
                    <div className='mt-3'><LightbulbOutlinedIcon className='text-white' /></div>
                    <div className='mt-3'><VolumeUpOutlinedIcon className='text-white' /></div>
                </div>
                <div className='flex justify-center'>
                    <span className='text-white text-2xl mt-16'>9 + 6 + 7x - 2x - 3</span>
                </div>
            </div>
            <div className='md:w-5/6 mx-auto w-1/3 flex justify-between py-3 px-3'>
                <div>
                    <ReplayOutlinedIcon className='hover:cursor-pointer' />
                </div>
                <div className='flex'>
                    <p className='rounded-full bg-gradient-to-bl from-indigo-950 to-cyan-600 px-2 text-lg text-white mx-5 hover:cursor-pointer'>&lt;</p>
                    <p className='text-indigo-950 font-semibold'>01/10</p>
                    <p className='rounded-full bg-gradient-to-bl from-indigo-950 to-cyan-600 px-2 text-lg text-white mx-5 hover:cursor-pointer'>&gt;</p>
                </div>
                <div>
                    <FullscreenOutlinedIcon className='hover:cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export default Main
