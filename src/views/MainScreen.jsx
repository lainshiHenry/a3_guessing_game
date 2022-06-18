import React from 'react'
import GuessedSectionBox from './GuessedSectionBox'

const MainScreen = () => {
    return (
        <section className='main-screen h-screen p-2 '>
            <header className='w-full h-7 border-b-2 border-white text-center'>
                <h1>A3! Guessing Game</h1>
            </header>
            <section className='picture-section grid place-items-center h-[200px]'>
                <h2>Picture</h2>
            </section>
            <section className='Guessed-section'>
                <GuessedSectionBox text={'Guess 1'} />
                <GuessedSectionBox text={'Guess 2'} />
                <GuessedSectionBox text={'Guess 3'} />
                <GuessedSectionBox text={'Guess 4'} />
                <GuessedSectionBox text={'Guess 5'} />
                <GuessedSectionBox text={'Guess 6'} />
            </section>
            <section className='Guessing-section w-full'>
                <input type={'text'} className='bg-black border-white border w-96 grid place-items-end' />
            </section>
        </section>
    )
}

export default MainScreen