import Image from 'next/image';
import React from 'react';

function Hero() {
    return (
        <div className='relative h-screen text-white overflow-hidden'>
            <div className='absolute inset-0'>
                <Image
                    src='/hero.jpg'
                    alt='hero image'
                    fill
                    className='object-cover object-center w-full h-full'
                />
                <div className='absolute inset-0 bg-black opacity-50'></div>
            </div>
            <div className='relative flex flex-col justify-center items-center h-full text-center'>
                <h1 className='text-7xl font-extrabold loading-tight mb-3 capitalize'>Book your luxury room</h1>
            </div>
        </div>
    );
}

export default Hero;
