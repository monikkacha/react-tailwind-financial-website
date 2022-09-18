import React from 'react'
import { FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='max-width-[1240px] mx-auto py-20 px-20 grid lg:grid-cols-3 gap-8 text-gray-300 '>
            <div>
                <h1 className='w-full text-3xl font-bold text-[#00df9a]'>
                    REACT .
                </h1>
                <p className='py-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam at nesciunt repellat reprehenderit numquam laborum illo debitis facere blanditiis tenetur.</p>
                <div className='flex md:w-[75%] my-6 justify-between'>
                    <FaFacebookSquare size={30} />
                    <FaInstagram size={30} />
                    <FaTwitterSquare size={30} />
                    <FaGithubSquare size={30} />
                    <FaDribbbleSquare size={30} />
                </div>
            </div>
            <div className="lg:col-span-2 flex justify-between mt-6">
                <div>
                    <h6 className='font-medium text-gray-400'>Support</h6>
                    <ul>
                        <li className='py-2 text-small'>Analytics</li>
                        <li className='py-2 text-small'>Marketing</li>
                        <li className='py-2 text-small'>Ecommerce</li>
                        <li className='py-2 text-small'>Insight</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Company</h6>
                    <ul>
                        <li className='py-2 text-small'>About</li>
                        <li className='py-2 text-small'>Blog</li>
                        <li className='py-2 text-small'>Jobs</li>
                        <li className='py-2 text-small'>Career</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Legal</h6>
                    <ul>
                        <li className='py-2 text-small'>Claim</li>
                        <li className='py-2 text-small'>Policy</li>
                        <li className='py-2 text-small'>Terms</li>
                        <li className='py-2 text-small'>Reach</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Country</h6>
                    <ul>
                        <li className='py-2 text-small'>India</li>
                        <li className='py-2 text-small'>Poland</li>
                        <li className='py-2 text-small'>Australia</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer