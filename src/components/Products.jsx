
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import star from "../assets/Star_fill.svg"
import emptystar from "../assets/Star.svg"

const Products = () => {
    const [coffeData, setCoffeData] = useState([]);
    const [active, setActive] = useState('allProduct');

    const fetchData = async () => {
        try {
            const { data } = await axios.get(
                'https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json'
            );

            if (data) {
                setCoffeData(data);
            } else {
                console.log('Empty data');
            }
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const filteredData =
        active === 'available'
            ? coffeData.filter((item) => item.available)
            : coffeData;

    return (
        <div className='dark'>
            {/* Buttons */}
            <div className="flex dark justify-center gap-5 mt-5">
                <button
                    onClick={() => setActive('allProduct')}
                    className={`text-white px-4 py-2 rounded-xl transition ${active === 'allProduct' ? 'buttonbg' : 'dark'
                        }`}
                >
                    All Product
                </button>
                <button
                    onClick={() => setActive('available')}
                    className={`text-white px-4 py-2 rounded-xl transition ${active === 'available' ? 'buttonbg' : 'dark'
                        }`}
                >
                    Available
                </button>
            </div>

            {/* Product Grid */}
            <div className="m-8 dark overflow-hidden grid gap-8 sm:grid-cols-3 grid-cols-1">
                {filteredData.map((data) => (
                    <div key={data.id} className=" dark p-4 rounded-xl shadow-lg">

                        <div className="relative">
                            {/* Image */}
                            <img
                                src={data.image}
                                alt={data.name}
                                className="rounded-xl w-full h-48 object-cover max-sm:h-35 "
                            />

                            {data.popular === true ? (
                                <div className="absolute top-2 left-2">
                                    <p className="popular flex rounded-lg px-2 py-1 popular text-sm font-semibold">
                                        popular
                                    </p>
                                </div>
                            ) : null}
                        </div>



                        {/* Name & Price */}
                        <div className="mt-4 dark flex justify-between items-center">
                            <p className="text-white dark text-lg font-semibold">{data.name}</p>
                            <p style={{ backgroundColor: '#BEE3CC' }} className=" dark text-black text-sm px-2 py-1 rounded-sm font-semibold">
                                {data.price}
                            </p>
                        </div>

                        {/* Rating */}
                        <div className="flex  dark items-center gap-1 mt-2">


                            <span className="text-white text-sm flex items-center gap-1">
                                {data.rating === null ? (
                                    <>
                                        <img src={emptystar} alt="star" className="w-4 dark h-4" />
                                        {data.rating}
                                    </>
                                ) : (
                                    <>
                                        <img src={star} alt="star" className="w-4  dark h-4" />
                                        {data.rating}
                                    </>
                                )}
                            </span>

                            <span className="text-gray-400 text-sm">

                                {data.votes === "0" ? "No ratings" : `(${data.votes})`}

                            </span>

                            <span className='sold dark pl-40 max-sm:pl-23'>{data.available === false ? "sold out" : null}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
