import React from 'react'
import Products from './Products'

const Header = () => {
    return (
        <header className='dark  rounded-lg '>



            <div className='flex justify-center '>

                <h2 className='text-white text-4xl mt-10'>Our Colection</h2>
            </div>
            <div>


                <p className='text-gray-400 flex justify-center max-sm:m-4'>Introducing our coffe Collection, a selection of unique coffees from different roast types and
                    origins, expertly roasted in small batchesand shipped fresh weekly </p>

            </div>

            <Products />

        </header>
    )
}

export default Header