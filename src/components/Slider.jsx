'use client';
import { ArrowSmallRightIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react';
import { EyeIcon, ShoppingBagIcon, StarIcon, ArrowsRightLeftIcon } from '@heroicons/react/24/outline'
import { StarIcon as StarIconFilled } from '@heroicons/react/24/solid'
import Aos from 'aos';
import 'aos/dist/aos.css';

export const Slider = ({ title, data }) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        Aos.init({
            once: true
        });
    }, []);

    return (
        <div className="mt-16 text-white w-full flex flex-col justify-center items-center">
            <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-y-1 md:gap-y-0">
                <h1 data-aos="fade-up" className="text-[2.10rem] font-medium">{title}</h1>
                <a data-aos="fade-up" href="#" className="text-base font-medium flex justify-center items-center">Shop All Products
                    <ArrowSmallRightIcon className="translate-y-[0.15rem] ml-1 h-4 w-4" />
                </a>
            </div>

            <div className="text-black mt-5 text-white flex flex-col justify-center overflow-hidden items-center w-full">

                <div 
                style={{ transform: `translate(-${window.innerWidth <= 640 ? current * 109 : innerWidth <= 768 ? current * 60 : current * 11 }%, 0px)`  }}
                className={`w-full min-h-fit flex gap-7 transition-all duration-500 ease-in-out`}
                >
                    {data && data.map((item, i) => (
                        <div key={i} className="w-full gap-4"
                            data-aos="fade-up"
                            data-aos-duration={500 + i * 100}
                            data-aos-easing="ease-in-out"
                        >

                            <div className={`group/btn cursor-pointer flex flex-col justify-center items-center group relative overflow-hidden`}>
                                <div className="flex rounded overflow-hidden justify-center items-center h-[420px] w-96 md:w-[240px] md:h-80 lg:w-[221px] lg:h-[294px]">
                                    <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src={item.image} alt="" />
                                </div>

                                <div className="absolute text-white w-full inset-0 p-4 h-full flex flex-col justify-between items-center">

                                    {item?.tag != null ? (
                                        <p className={`${item?.tag?.discount ? "bg-default-300" : "bg-yellow-500"} px-3 py-[1px] rounded-sm font-bold self-start flex justify-center items-center`}>{item?.tag?.value}</p>
                                    ) : null}

                                    <div className="flex h-full justify-center items-end gap-2">
                                        <div className="group-hover/btn:translate-y-0 translate-y-16 group-hover/btn:opacity-100 transition-all duration-[500ms] ease-in-out opacity-0 bg-default p-3 rounded-full overflow-hidden">
                                            <ShoppingBagIcon className="h-5 w-5 text-white" />
                                        </div>
                                        <div className="group-hover/btn:translate-y-0 translate-y-16 group-hover/btn:opacity-100 transition-all duration-[600ms] ease-in-out opacity-0 bg-default p-3 rounded-full overflow-hidden">
                                            <EyeIcon className="h-5 w-5 text-white" />
                                        </div>
                                        <div className="group-hover/btn:translate-y-0 translate-y-16 group-hover/btn:opacity-100 transition-all duration-[700ms] ease-in-out opacity-0 bg-default p-3 rounded-full overflow-hidden">
                                            <StarIcon className="h-5 w-5 text-white" />
                                        </div>
                                        <div className="group-hover/btn:translate-y-0 translate-y-16 group-hover/btn:opacity-100 transition-all duration-[800ms] ease-in-out opacity-0 bg-default p-3 rounded-full overflow-hidden">
                                            <ArrowsRightLeftIcon className="h-5 w-5 text-white" />
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="flex flex-col justify-center items-center gap-1 mt-4">

                                {item.discount_price !== null ? (
                                        <div className="font-medium flex justify-center items-center gap-2">
                                            <p className="text-xs line-through text-white/60">{item.real_price}</p>
                                            <p>{item.discount_price}</p>
                                        </div>
                                ) : (
                                    <div className="font-medium flex justify-center items-center">
                                        <p>{item.real_price}</p>
                                    </div>
                                )}

                                <a href="#" className="transition-all duration-300 hover:text-default-300 ease-in-out border-b border-transparent hover:border-b-default-300">{item.name}</a>

                                <div className="flex gap-x-2 justify-center items-center">
                                    <div className="flex justify-center items-center">
                                        {Array.from({ length: 5 }, (_, index) => (
                                            index < item.rate ? (
                                                <StarIconFilled
                                                    key={index}
                                                    className="w-[12px] h-[12px] text-default-300"
                                                />
                                            ) : (
                                                <StarIcon
                                                    key={index}
                                                    className="w-[12px] h-[12px] text-white"
                                                />
                                            )
                                        ))}
                                    </div>

                                    <p className="text-sm text-gray-400">{item.reviews_count} reviews</p>
                                </div>

                            </div>

                        </div>
                    ))}
                </div>

                <div className="py-4 flex justify-center gap-3 w-full mt-4">
                    {data && data.map((item, i) => (
                        <div
                            onClick={() => setCurrent(i)}
                            key={"circle" + i}
                            className={`cursor-pointer rounded-full transition duration-200 ease-in-out ${i === current ? "-translate-y-1 border w-4 h-4" : "bg-white w-2 h-2"
                                }`}
                        >
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

