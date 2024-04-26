import React from 'react'

const CreateFlashcard = () => {
    return (
        <div className='flex justify-between'>
            <div>
                <p className='text-xs'>Published by</p>
                <h1 className='text-2xl text-blue-950 font-semibold'>Hygge<span className='font-bold text-2xl'>X</span></h1>
            </div>
            <div className='flex'>
                <div className='bg-gradient-to-t from-blue-950 to-blue-700 rounded-full flex justify-center  w-8 h-8'>
                    <p className='text-white text-2xl'>+</p>
                </div>
                <p className='font-semibold text-indigo-900 text-xl mx-2'>Create Flashcard</p>
            </div>
        </div>
    )
}

export default CreateFlashcard
