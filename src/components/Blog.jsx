import { setting } from "../config"
import { ArrowSmallRightIcon } from '@heroicons/react/24/outline'
import { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';


export const Blog = () => {
    useEffect(() => {
        Aos.init({
            once: true
        });
    }, []);

    return (
        <div className="mt-20 text-white w-full flex flex-col justify-center items-center gap-x-8">
            <h1 className="text-inherit font-medium text-4xl"
                data-aos="fade-up"
                data-aos-duration={500}
                data-aos-easing="ease-in-out"
            >
                {setting.blog.title}
            </h1>
            <div className="flex flex-col md:flex-row gap-x-8">
                {setting.blog.data.map((item, i) => (
                    <div key={i}
                        data-aos="fade-up"
                        data-aos-duration={500 + i * 100}
                        data-aos-easing="ease-in-out"
                    >
                        <div className="flex flex-col gap-y-5 py-10">
                            <div className="group relative items-center justify-center overflow-hidden">
                                <div className="w-full">
                                    <img className="rounded-t overflow-hidden h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src={item.image} alt="" />
                                </div>

                                <div
                                    className="absolute inset-0 h-32 w-[50rem] -translate-x-[35rem] -translate-y-[0rem] -rotate-[60deg] bg-gradient-to-b from-transparent via-transparent to-white/40 transition duration-700 ease-in-out group-hover:translate-x-[30rem] group-hover:translate-y-[10rem]">
                                </div>

                            </div>

                            <h2 className="text-center font-medium text-2xl">{item.title}</h2>

                            <div className="flex justify-center items-center">
                                <a href="#" className="flex hover:underline justify-center items-center text-center font-medium">{item.buttonText}</a>
                                <div className="translate-y-[0.19rem] font-medium ml-1">
                                    <ArrowSmallRightIcon className="w-4 h-4 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
