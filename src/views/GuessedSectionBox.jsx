import React from 'react'

const GuessedSectionBox = ({ text }) => {
    return (
        <div className='w-96 bg-black border-white border'>
            <p className='px-4 py-2'>{text}</p>
        </div>
    )
}

export default GuessedSectionBox