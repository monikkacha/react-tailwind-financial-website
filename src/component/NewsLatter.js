import React from 'react'

const NewsLatter = () => {
    return (
        <div className='w-full py-16 text-white px-4'>
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                        Want tips & tricks to optimize your flow ?
                    </h1>
                    <p className=''>
                        Sign up to our newsletter and stay up to date.
                    </p>
                </div>
                <div className="my-4">
                    <div className="flex flex-col sm:flex-row w-full justify-center items-center">
                        <input type="email" placeholder='Enter email' className='p-3 flex w-full rounded-md text-black' />
                        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium py-3 text-black ml-3 mt-3 sm:mt-0 ' >Notify Me</button>
                    </div>
                    <p className='mt-3'>We care about the protection of your data and that's why providing <span className='text-[#00df9a] underline capitalize'> privacy policy</span> </p>
                </div>
            </div>
        </div>
    )
}

export default NewsLatter