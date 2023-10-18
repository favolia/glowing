import { setting } from "../config";
import { ArrowSmallRightIcon } from '@heroicons/react/24/outline'
import { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

export const Product = () => {
    useEffect(() => {
        Aos.init({
            once: true
        });
    }, []);

    return (
        <div className="w-full text-black dark:text-white grid grid-cols-1 grid-rows-3 gap-8 lg:grid-cols-3 lg:grid-rows-1">
            {setting.product && setting.product.map((item, i) => (
                <div key={i} className="" 
                    data-aos = "fade-up"
                    data-aos-duration = {500+i*100}
                    data-aos-easing = "ease-in-out"
                    >
                    <div className="group relative items-center justify-center overflow-hidden">
                        <div className="h-[450px] w-full">
                            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src={item.image} alt="" />
                        </div>

                        <div
                            className="absolute inset-0 h-32 w-[50rem] -translate-x-[35rem] -translate-y-[0rem] -rotate-[60deg] bg-gradient-to-b from-transparent via-transparent to-white/40 transition duration-700 ease-in-out group-hover:translate-x-[30rem] group-hover:translate-y-[10rem]">
                        </div>

                        <div className="absolute text-white w-full inset-0 h-full p-10 flex flex-col justify-between items-start">
                            <div>
                                <h1 className="text-inherit font-medium text-3xl">{item.title}</h1>
                                <br />
                                <h4 className="text-inherit text-lg font-medium">{item.sub_text}</h4>
                            </div>
                            <a href="#" className="text-inherit font-medium flex justify-center items-center">{item.link_text}
                                <ArrowSmallRightIcon className="translate-y-[0.15rem] h-4 w-4" />
                            </a>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    )
}