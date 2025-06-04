import React from 'react'
import Header from './Header'
import bg from "../assets/bg-cafe.jpg"

const BackGround = () => {
    return (
        <div className=' dark relative'>

            <img src={bg} alt="bg" />

            <div className='absolute top-15 left-10 right-10'>
                <Header />
            </div>



        </div>
    )
}

export default BackGround
