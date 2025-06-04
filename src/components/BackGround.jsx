import React from 'react'
import Header from './Header'

const BackGround = () => {
    return (
        <div className=' dark relative'>

            <img src="/bg-cafe.jpg" alt="bg" />

            <div className='absolute top-15 left-10 right-10'>
                <Header />
            </div>



        </div>
    )
}

export default BackGround
