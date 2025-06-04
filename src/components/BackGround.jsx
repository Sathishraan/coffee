import React from 'react'
import Header from './Header'
import bg from "../assets/bg-cafe.jpg"

const BackGround = () => {
    return (
        <div className=' dark relative'>

            <img src={bg} alt="bg" className='w-full' />

            <div className='absolute top-38 left-35 right-35'>
                <Header />
            </div>



        </div>
    )
}

export default BackGround
