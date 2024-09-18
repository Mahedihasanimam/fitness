import { FrownOutlined } from '@ant-design/icons';
import React from 'react';

const Acvity = () => {
    return (
        <div className='bg-[#252B3B] p-4 rounded-md max-w-2xl  mt-4 space-y-4'>
            <div className='flex items-center justify-between'>
                <h3 className='text-xl font-bold'>Recent Acvity</h3>
                <p className='text-gray-400'>view All</p>
            </div>
            <p>today</p>
            <br />
            <div className='flex items-center justify-around'>
            <FrownOutlined className='text-4xl' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ipsum adipisci odit nam </p>
            </div>
            <div className='flex items-center justify-around'>
            <FrownOutlined className='text-4xl' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ipsum adipisci odit nam </p>
            </div>
            <div className='flex items-center justify-around'>
            <FrownOutlined className='text-4xl' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ipsum adipisci odit nam </p>
            </div>      
        </div>
    );
};

export default Acvity;