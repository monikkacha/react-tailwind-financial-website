import React from 'react'
import Laptop from '../assets/laptop.jpg'


const Analytics = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img src={Laptop} alt="laptop" className='w-[500px] mx-auto' />
                <div className="flex flex-col justify-center items-start">
                    <p className='uppercase text-[#00df9a] font-bold'>data analytics dashboard</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage data analytics carefully</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, aperiam incidunt? Nulla, omnis quia adipisci dolores ea exercitationem atque dolor hic eveniet ipsum eius necessitatibus, in laboriosam? Praesentium, repellat aut?</p>
                    <button className='bg-[#000300] w-[200px] rounded-md font-medium mx-auto md:mx-0 py-3 text-white mt-6' >Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics