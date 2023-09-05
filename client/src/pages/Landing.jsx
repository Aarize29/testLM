import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/react.svg'
import s1 from '../assets/s1.jpeg'
import h1 from '../assets/h1.jpeg'
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoBuild, IoCreateSharp } from "react-icons/io5";

const Landing = () => {
    const [open, setOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    // Function to handle changes in the dropdown selection
    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const [activeIndex, setActiveIndex] = useState(null);

    const faqData = [
        {
            question: 'What is the purpose of this website?',
            answer: 'will help you to manage your API keys and also you can generate new API keys for your projects.',
        },
        {
            question: 'How do I contact customer support?',
            answer: 'You can contact our customer support team by email or phone. Please visit the Contact Us page for more information.',
        },
        {
            question: 'Can I upgrade my storage?',
            answer: 'Yes, you can upgrade your storage just by upgrading your current plan .',
        },
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };


    return (
        <div>
            {/* Navbar */}
            <div className=' md:fixed z-10 h-[70px] align-middle  w-full bg-opacity-75   backdrop-blur-lg bg-clip-padding flex bg-[#05161A] p-10'>
                <nav className='relative flex justify-between items-center w-full  '>
                    <div className="">
                        <h1 className="lg:text-4xl text-2xl   font-bold  cursor-pointer "><img src={image} /></h1>
                    </div>
                    <div className="flex ">
                        <div className='mt-2'>
                            <span className='text-white mr-12'>How it works </span>
                            <span className='text-white mr-12'>Browse licenses </span>
                            <span className='text-white mr-12'>FAQ </span>
                            <span className='text-white mr-12'>About </span>
                        </div>
                        <div className='flex flex-row'>

                            <Link to='/login'><button className=" text-white font-semibold justify-center h-8 lg:w-[100px] w-[60px] bg-[#6DA5C0]  lg:text-md text-sm rounded-full flex  items-center  hover:bg-[#294d61] ">LogIn</button></Link>
                            <Link to='/signup'><button className=" text-white font-semibold justify-center h-8 lg:w-[100px] w-[60px] bg-[#6DA5C0]  lg:text-md text-sm rounded-full flex  items-center  hover:bg-[#294d61] ml-2">SignUp</button></Link>
                        </div>

                    </div>
                </nav>
            </div>
            {/* <div className='bg-[#111827]  w-full h-screen blur-sm display-flex absolute z-0'> */}
            {/* </div> */}

            <div className='bg-[#111827] w-full h-full p-10 '>

                {/* Hero section  */}
                <div className=' flex md:flex-row flex-col  lg:m-0' >
                    <div className='lg:mt-32  mt-10 flex-1 flex-col  flex  items-start '>
                        <div className='flex justify-center  flex-col align-middle text-white' >
                            <h1 className=' lg:text-6xl text-3xl mb-10 font-bold'>
                                The future of licensing your image &<br /> likeness
                            </h1>
                            <p className=' lg:text-[16px]  text-md '> World's 1st global multi-modal marketplace for licensing your digital image & likeness powered by generative AI technology</p>
                            <div className='mt-5 flex flex-col lg:flex-row'>
                                <div >
                                    <button className="mt-2 text-white  justify-center h-2  bg-[#294d61] p-5 rounded-full flex  items-center lg:text-sm text-md hover:shadow-gray-400 hover:bg-gray-800">License my asset</button>
                                </div>
                                <div>
                                    <button className="mt-2 text-white  justify-center h-2  bg-[#294d61] p-5 rounded-full flex  items-center lg:text-sm text-md shadow-gray-400 ml-2 hover:shadow-lg  hover:bg-gray-800">Buy a license</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Contents */}

                <div className='flex flex-col mt-[100px] justify-center'>
                    <div className='flex justify-center'>
                        <h1 className=' lg:text-6xl text-3xl text-white mb-10 font-bold'>
                            How it works
                        </h1>
                    </div>
                    <div className='flex justify-center flex-col items-center'>
                        <h1 className=' lg:text-3xl text-white mb-10 font-bold'>
                            ADD YOUR FAVORITE AI VOICE TO ANY PROJECT
                        </h1>
                        <div style={{ backgroundImage: "url(https://tecdn.b-cdn.net/img/Photos/Others/background2.jpg)" }} className='  w-3/4 p-5'>
                            <div className='flex justify-center flex-col'>
                                <h1 className='text-2xl font-bold text-white'>TRY IT NOW</h1>
                                <p className='text-gray-200 text-md'>Award winning lifelike AI voiceover for any project.</p>
                            </div>
                            <form className='flex flex-row  items-center text-white'>
                                <div className='flex flex-col mr-10'>
                                    <label for='text'>Enter Text</label>

                                    <input
                                        className='border-2 h-10 lg:w-96 p-2 text-black font-semibold mt-1'
                                        placeholder='Enter your text here' />
                                </div>
                                <div className='w-96'>
                                    <label className='' for='voice'>Select a Voice</label>
                                    <select
                                        id="dropdown"
                                        name="dropdown"
                                        className="block w-full p-2 border rounded-md  mt-1 text-black  bg-gray-100"
                                        value={selectedOption}
                                        onChange={handleDropdownChange}
                                    >
                                        <option value="">Select...</option>
                                        <option value="option1">Option 1</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                    </select>
                                </div>
                                <div>
                                    <button className='mt-6 w-max text-pink-200 font-semibold justify-center h-2  bg-[#1F2937] p-6 rounded-md flex  items-center lg:text-sm text-md shadow-gray-400 ml-2 hover:shadow-lg  hover:bg-gray-900 '>
                                        Genrate Preview
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Creators */}

                <div className='flex flex-col mt-[100px] justify-center'>
                    <div className='flex justify-center'>
                        <h1 className=' lg:text-6xl text-3xl text-white mb-10 font-bold'>
                            Our Creators
                        </h1>
                    </div>
                    <div className='flex justify-center flex-col items-center'>
                        <h1 className=' lg:text-5xl text-white mb-5 font-bold'>
                            21,000+ Celebrities
                        </h1>
                        <div className=' flex flex-col justify-center text-gray-300 text-lg items-center'><p>Create high-performaning marketing content with</p><p> solution that are fast and cost-effective.</p></div>

                        {/* Testimonials */}


                        <section className="rounded-md mb-20  p-6 w-full h-max shadow-lg bg-[#131a21] " >
                            {/* Musicians */}
                            <div className='flex justify-evenly mb-10'>
                                <div className=" rounded-lg p-3 shadow-lg bg-neutral-800 shadow-black/20 w-2/4 h-20 flex justify-between items-center mr-4">
                                    <div className="">
                                        <p className="mb-0 font-semibold text-neutral-500 dark:text-neutral-400">
                                            Popular Musicians
                                        </p>
                                    </div>
                                    <div className="flex item-center justify-center">
                                        <img
                                            src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.jpg"
                                            className="rounded-full  shadow-md w-12 h-12 mt-1 dark:shadow-black/30"
                                            alt="woman avatar"
                                        />
                                        <img
                                            src={s1}
                                            className="rounded-full shadow-md w-16 h-14 dark:shadow-black/30"
                                            alt="woman avatar"
                                        />
                                        <img
                                            src="https://images.pexels.com/photos/2091375/pexels-photo-2091375.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                            className="rounded-full mt-1 shadow-md w-12 h-12 dark:shadow-black/30"
                                            alt="woman avatar"
                                        />
                                    </div>
                                </div>

                                {/* Hilarious Comedians */}

                                <div className=" rounded-lg p-3 shadow-lg bg-neutral-800 shadow-black/20 w-2/4 h-20 flex justify-between items-center">


                                    <div className="">
                                        <p className="mb-0 font-semibold text-neutral-500 dark:text-neutral-400">
                                            Hilarious Comedians
                                        </p>
                                    </div>
                                    <div className="flex item-center justify-center">
                                        <img
                                            src="https://exstreamist.com/wp-content/uploads/2015/08/best-standup-comedy-on-netflix.jpg"
                                            className="rounded-full  shadow-md w-12 h-12 mt-1 dark:shadow-black/30"
                                            alt="woman avatar"
                                        />
                                        <img
                                            src={h1}
                                            className="rounded-full shadow-md w-16 h-14 dark:shadow-black/30"
                                            alt="woman avatar"
                                        />
                                        <img
                                            src="https://www.dailydot.com/wp-content/uploads/643/00/c0a06f767b3174dc.jpg"
                                            className="rounded-full mt-1 shadow-md w-12 h-12 dark:shadow-black/30"
                                            alt="woman avatar"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* TV AND FILM ACTORS */}

                            <div className='flex justify-evenly mb-10'>
                                <div className=" rounded-lg p-3 shadow-lg bg-neutral-800 shadow-black/20 w-2/4 h-20 flex justify-between items-center mr-4">
                                    <div className="">
                                        <p className="mb-0 font-semibold text-neutral-500 dark:text-neutral-400">
                                            TV & Film actors
                                        </p>
                                    </div>
                                    <div className="flex item-center justify-center">
                                        <img
                                            src="https://images6.fanpop.com/image/photos/35700000/Hot-British-Actors-hottest-actors-35742454-750-1150.jpg"
                                            className="rounded-full  shadow-md w-10 h-10 mt-1 dark:shadow-black/30"
                                            alt="woman avatar"
                                        />
                                        <img
                                            src="https://i.pinimg.com/originals/94/59/49/94594999414ff861f4b5b084448c8667.jpg"
                                            className="rounded-full shadow-md w-14 h-14 dark:shadow-black/30"
                                            alt="woman avatar"
                                        />
                                        <img
                                            src="https://s3.scoopwhoop.com/anj/tv3/722858208.jpg"
                                            className="rounded-full mt-1 shadow-md w-12 h-12 dark:shadow-black/30"
                                            alt="woman avatar"
                                        />
                                    </div>
                                </div>

                                {/* TOP Atheletes */}
                                <div className=" rounded-lg p-3 shadow-lg bg-neutral-800 shadow-black/20 w-2/4 h-20 flex justify-between items-center">
                                    <div className="">
                                        <p className="mb-0 font-semibold text-neutral-500 dark:text-neutral-400">
                                            Top Atheletes
                                        </p>
                                    </div>
                                    <div className="flex item-center justify-center">
                                        <img
                                            src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.jpg"
                                            className="rounded-full  shadow-md w-12 h-12 mt-1 dark:shadow-black/30"
                                            alt="woman avatar"
                                        />
                                        <img
                                            src={s1}
                                            className="rounded-full shadow-md w-16 h-14 dark:shadow-black/30"
                                            alt="woman avatar"
                                        />
                                        <img
                                            src="https://images.pexels.com/photos/2091375/pexels-photo-2091375.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                            className="rounded-full mt-1 shadow-md w-12 h-12 dark:shadow-black/30"
                                            alt="woman avatar"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Trending Creators */}
                            <div className='flex justify-evenly '>
                                <div className=" rounded-lg p-3 shadow-lg bg-neutral-800 shadow-black/20 w-2/4 h-20 flex justify-between items-center mr-4">
                                    <div className="">
                                        <p className="mb-0 font-semibold text-neutral-500 dark:text-neutral-400">
                                            Trending Creators
                                        </p>
                                    </div>
                                    <div className="flex item-center justify-center">
                                        <img
                                            src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.jpg"
                                            className="rounded-full  shadow-md w-12 h-12 mt-1 dark:shadow-black/30"
                                            alt="woman avatar"
                                        />
                                        <img
                                            src={s1}
                                            className="rounded-full shadow-md w-16 h-14 dark:shadow-black/30"
                                            alt="woman avatar"
                                        />
                                        <img
                                            src="https://images.pexels.com/photos/2091375/pexels-photo-2091375.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                            className="rounded-full mt-1 shadow-md w-12 h-12 dark:shadow-black/30"
                                            alt="woman avatar"
                                        />
                                    </div>
                                </div>
                                {/* Reality TV favourites */}
                                <div className=" rounded-lg p-3 shadow-lg bg-neutral-800 shadow-black/20 w-2/4 h-20 flex justify-between items-center">
                                    <div className="">
                                        <p className="mb-0 font-semibold text-neutral-500 dark:text-neutral-400">
                                            Reality TV favourites
                                        </p>
                                    </div>
                                    <div className="flex item-center justify-center">
                                        <img
                                            src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.jpg"
                                            className="rounded-full  shadow-md w-12 h-12 mt-1 dark:shadow-black/30"
                                            alt="woman avatar"
                                        />
                                        <img
                                            src={s1}
                                            className="rounded-full shadow-md w-16 h-14 dark:shadow-black/30"
                                            alt="woman avatar"
                                        />
                                        <img
                                            src="https://images.pexels.com/photos/2091375/pexels-photo-2091375.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                            className="rounded-full mt-1 shadow-md w-12 h-12 dark:shadow-black/30"
                                            alt="woman avatar"
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* FEATURED ARTISTS */}

                    <div className='flex justify-center flex-col items-center'>
                        <h1 className=' lg:text-5xl text-3xl text-white mb-5 font-bold'>
                            Featured Artists
                        </h1>
                    </div>
                    <section className="rounded-md p-6 w-full h-max shadow-lg bg-[#131a21] " >
                        <div className='flex justify-evenly mb-10'>
                            <div className=" rounded-lg p-6 shadow-lg bg-neutral-800 shadow-black/20  flex justify-between flex-col items-center mr-4">
                                <div className="flex item-center justify-center">
                                    <img
                                        src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.jpg"
                                        className="rounded-sm  shadow-md  mt-1 dark:shadow-black/30"
                                        alt="woman avatar"
                                    />
                                </div>
                                <div className="">
                                    <p className="mb-0 font-semibold text-neutral-500 dark:text-neutral-400">
                                        Debby Ryan
                                    </p>
                                </div>

                            </div>
                            <div className=" rounded-lg p-6 shadow-lg bg-neutral-800 shadow-black/20  flex justify-between flex-col items-center mr-4">
                                <div className="flex item-center justify-center">
                                    <img
                                        src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.jpg"
                                        className="rounded-sm  shadow-md  mt-1 dark:shadow-black/30"
                                        alt="woman avatar"
                                    />
                                </div>
                                <div className="">
                                    <p className="mb-0 font-semibold text-neutral-500 dark:text-neutral-400">
                                        Debby Ryan
                                    </p>
                                </div>

                            </div>
                            <div className=" rounded-lg p-6 shadow-lg bg-neutral-800 shadow-black/20  flex justify-between flex-col items-center mr-4">
                                <div className="flex item-center justify-center">
                                    <img
                                        src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.jpg"
                                        className="rounded-sm  shadow-md  mt-1 dark:shadow-black/30"
                                        alt="woman avatar"
                                    />
                                </div>
                                <div className="">
                                    <p className="mb-0 font-semibold text-neutral-500 dark:text-neutral-400">
                                        Debby Ryan
                                    </p>
                                </div>

                            </div>
                            <div className=" rounded-lg p-6 shadow-lg bg-neutral-800 shadow-black/20  flex justify-between flex-col items-center mr-4">
                                <div className="flex item-center justify-center">
                                    <img
                                        src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.jpg"
                                        className="rounded-sm  shadow-md  mt-1 dark:shadow-black/30"
                                        alt="woman avatar"
                                    />
                                </div>
                                <div className="">
                                    <p className="mb-0 font-semibold text-neutral-500 dark:text-neutral-400">
                                        Debby Ryan
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className='flex justify-evenly mb-10'>
                            <div className=" rounded-lg p-6 shadow-lg bg-neutral-800 shadow-black/20  flex justify-between flex-col items-center mr-4">
                                <div className="flex item-center justify-center">
                                    <img
                                        src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.jpg"
                                        className="rounded-sm  shadow-md  mt-1 dark:shadow-black/30"
                                        alt="woman avatar"
                                    />
                                </div>
                                <div className="">
                                    <p className="mb-0 font-semibold text-neutral-500 dark:text-neutral-400">
                                        Debby Ryan
                                    </p>
                                </div>

                            </div>
                            <div className=" rounded-lg p-6 shadow-lg bg-neutral-800 shadow-black/20  flex justify-between flex-col items-center mr-4">
                                <div className="flex item-center justify-center">
                                    <img
                                        src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.jpg"
                                        className="rounded-sm  shadow-md  mt-1 dark:shadow-black/30"
                                        alt="woman avatar"
                                    />
                                </div>
                                <div className="">
                                    <p className="mb-0 font-semibold text-neutral-500 dark:text-neutral-400">
                                        Debby Ryan
                                    </p>
                                </div>

                            </div>
                            <div className=" rounded-lg p-6 shadow-lg bg-neutral-800 shadow-black/20  flex justify-between flex-col items-center mr-4">
                                <div className="flex item-center justify-center">
                                    <img
                                        src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.jpg"
                                        className="rounded-sm  shadow-md  mt-1 dark:shadow-black/30"
                                        alt="woman avatar"
                                    />
                                </div>
                                <div className="">
                                    <p className="mb-0 font-semibold text-neutral-500 dark:text-neutral-400">
                                        Debby Ryan
                                    </p>
                                </div>

                            </div>
                            <div className=" rounded-lg p-6 shadow-lg bg-neutral-800 shadow-black/20  flex justify-between flex-col items-center mr-4">
                                <div className="flex item-center justify-center">
                                    <img
                                        src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.jpg"
                                        className="rounded-sm  shadow-md  mt-1 dark:shadow-black/30"
                                        alt="woman avatar"
                                    />
                                </div>
                                <div className="">
                                    <p className="mb-0 font-semibold text-neutral-500 dark:text-neutral-400">
                                        Debby Ryan
                                    </p>
                                </div>

                            </div>
                        </div>
                    </section>
                </div>



                {/* FAQ */}

                <div className="mx-auto w-full p-10 m-10 ">
                    {/* <div className="title lg:text-4xl text-2xl mt-3 font-myfont border-b-2 border-solid border-gray rounded-lg text-gray-500 font-bold flex justify-center hidden lg:bock  ">How Can We Help?</div> */}
                    <div className='flex justify-center items-center'>
                    <h1 className="lg:text-5xl  text-lg text-white font-bold mb-4 ">Frequently Asked Questions</h1>
                    </div>
                    <div className="space-y-4">
                        {faqData.map((faq, index) => (
                            <div key={index} className="border  border-gray-200 rounded p-4 ">
                                <button
                                    className="flex justify-between  items-center w-full focus:outline-none"
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <span className="lg:text-lg  hover:text-[#84cc16] text-sm font-medium text-gray-200">{faq.question}</span>
                                    <svg
                                        className={`h-6 w-6 text-white
                 transition-transform ${activeIndex === index ? 'transform rotate-180' : ''
                                            }`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M7 10l5 5 5-5z"
                                        />
                                    </svg>
                                </button>
                                {activeIndex === index && (
                                    <div className="mt-4 lg:text-lg text-sm text-gray-200">
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing