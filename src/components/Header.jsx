import React from 'react'
import Products from './Products'

const Header = () => {
    return (
        <header className='dark  '>



            <div className=' dark flex justify-center '>

                <h2 className='text-white text-4xl mt-10 dark'>Our Colection</h2>
            </div>
            <div className='dark'>


                <p className='text-gray-400 flex text-center justify-center md:pl-[230px] md:pr-[230px] md:pt-3 max-sm:m-4 dark'>Introducing our coffe Collection, a selection of unique coffees from different roast types and
                    origins, expertly roasted in small batchesand shipped fresh weekly </p>

            </div>

            <Products />

        </header>
    )
}

export default Header