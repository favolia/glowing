import { setting } from "../config";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export const Banner = () => {
    useEffect(() => {
        Aos.init({
            once: true
        });
    }, []);

    return (
        <div className="mt-20 flex flex-col gap-y-7 lg:flex-row lg:gap-x-7">
            {setting.banner && setting.banner.map((item, i) => (
                <div key={i} className="flex-grow rounded-sm overflow-hidden"
                    data-aos="fade-up"
                    data-aos-duration={500 + i * 200}
                    data-aos-easing="ease-in-out"
                >
                    <div className="group relative items-center justify-center overflow-hidden">
                        <div className="h-[420px] w-full">
                            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src={item.image} alt="" />
                        </div>

                        <div
                            className="absolute inset-0 h-32 w-[50rem] -translate-x-[35rem] -translate-y-[0rem] -rotate-[60deg] bg-gradient-to-b from-transparent via-transparent to-white/40 transition duration-700 ease-in-out group-hover:translate-x-[35rem] group-hover:translate-y-[10rem]">
                        </div>

                        <div className="absolute text-white w-full inset-0 h-full gap-2 p-5 lg:p-11 flex flex-col items-start">
                            <p className={`${i == 1 && 'text-4xl lg:text-3xl font-medium'}`}>
                                {item.title}
                            </p>
                            <p className={i == 1 ? 'leading-6 !text-sm font-normal lg:w-[10rem]' : 'leading-10 text-[2rem] font-medium lg:w-52'}>
                                {item.text}
                            </p>
                            <br />
                            <a href="#" className="text-black px-7 py-3 bg-white rounded font-medium ">
                                {item.buttonText}
                            </a>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    );
}