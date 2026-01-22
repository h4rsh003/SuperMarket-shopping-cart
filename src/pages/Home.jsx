import React, { useEffect, useState } from 'react'
import { Spinner } from '../components/Spinner';
import Product from '../components/Product';

const Home = () => {
    const API_URL = "https://fakestoreapi.com/products";

    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);

    async function fetchProductData() {
        setLoading(true);
        try {
            const res = await fetch(API_URL);
            const data = await res.json();
            setItems(data);
        }
        catch (error) {
            console.log("Error found")
            setItems([]);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchProductData();
    }, [])

    return (
        <div className='w-full pt-24'>
            
            {/* Hero Section */}
            <div className='flex flex-col items-center justify-center py-10 space-y-2 mb-6'>
                <h1 className='text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-600 drop-shadow-lg text-center'>
                    TRENDING NOW
                </h1>
                <div className='h-1 w-24 bg-gradient-to-r from-cyan-400 to-violet-600 rounded-full'></div>
            </div>

            {
                loading ? 
                <div className='flex justify-center items-center h-[70vh]'>
                    <Spinner /> 
                </div> 
                :
                items.length > 0 ?
                    (
                        <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto gap-y-10 gap-x-5 min-h-[80vh]'>
                            {
                                items.map((item) => (
                                    <Product key={item.id} item={item} />
                                ))
                            }
                        </div>
                    ) :
                    <div className="flex justify-center items-center h-full text-white text-3xl font-bold">
                        <p>No Data Found</p>
                    </div>
            }
        </div>
    )
}

export default Home