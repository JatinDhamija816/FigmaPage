import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
const Navigation = () => {
    return (
        <div className='flex mt-5'>
            <div className='pr-1'><HomeOutlinedIcon /></div>
            <div className='px-1 text-indigo-800 '> &gt; </div>
            <p className='px-1'> Flashcard </p>
            <div className='px-1 text-indigo-800 '> &gt; </div>
            <p className='px-1'> Mathematics </p>
            <div className='px-1 text-indigo-800 '> &gt; </div>
            <span className='text-blue-950 font-medium px-1'> Relation and Function</span>
        </div>
    )
}

export default Navigation
