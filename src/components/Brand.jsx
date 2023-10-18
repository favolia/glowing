import { useState, useRef } from "react";
import { setting } from "../config";
import { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

export const Brand = () => {
    const [current, setCurrent] = useState(0);
    const scrollContainerRef = useRef(null);
    const quoteContainerRef = useRef(null);

    const scrollToImage = (index) => {
        if (scrollContainerRef.current) {
            const scrollPosition = index * scrollContainerRef.current.offsetWidth;
            scrollContainerRef.current.scrollTo({ left: scrollPosition, behavior: "smooth" });
        }
    };

    const scrollToQuote = (index) => {
        if (quoteContainerRef.current) {
            const scrollPosition = index * quoteContainerRef.current.offsetWidth;
            quoteContainerRef.current.scrollTo({ left: scrollPosition, behavior: "smooth" });
        }
    };

    const handleImageClick = (index) => {
        setCurrent(index);
        scrollToImage(index);
        scrollToQuote(index);
    };

    useEffect(() => {
        Aos.init({
            once: true
        });
    }, []);

    return (
        <div className="mt-20 flex flex-col select-none bg-default-800 m-auto gap-y-20 p-auto overflow-hidden py-24">
            <div className="w-full flex justify-center">
                <div className="flex overflow-x-scroll hide-scroll-bar w-96 md:w-[38rem] lg:w-[48rem] overflow-hidden" ref={quoteContainerRef}>
                    <div className="flex flex-nowrap">
                        {setting.brand && setting.brand.map((item, i) => (
                            <div key={i} className="w-80 md:w-[38rem] lg:w-[48rem] inline-block px-3"
                            data-aos = "fade-up"
                            data-aos-duration = {600}
                            data-aos-easing = "ease-in-out"
                            >
                                <h2 className="text-center font-medium text-white w-72 md:w-auto text-2xl">{item.quoted}</h2>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex overflow-x-scroll hide-scroll-bar" ref={scrollContainerRef}>
                <div className="flex flex-nowrap lg:gap-x-8">
                    {setting.brand && setting.brand.map((item, i) => (
                        <div key={i} className="w-40 md:w-44 inline-block px-3"
                            data-aos="fade-up"
                            data-aos-duration={500 + i * 100}
                            data-aos-easing="ease-in-out"
                        >
                            <img
                                draggable="false"
                                onClick={() => {
                                    setCurrent(i);
                                    scrollToImage(i);
                                    scrollToQuote(i);
                                }}
                                className={`cursor-pointer drag transition opacity-30 hover:opacity-100 duration-200 ease-in-out ${i === current ? "!opacity-100" : ""}`}
                                src={item.image}
                                alt=""
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex w-full justify-center items-center gap-x-5 lg:hidden">
                {setting.brand && setting.brand.map((item, i) => (
                    <div
                        onClick={() => {
                            setCurrent(i);
                            scrollToImage(i);
                            scrollToQuote(i);
                        }}
                        key={i}
                        className={`cursor-pointer rounded-full transition duration-200 ease-in-out ${i === current ? "-translate-y-1 border w-4 h-4" : "bg-white w-2 h-2"
                            }`}
                    >
                    </div>
                ))}
            </div>
        </div>
    );
};
