import { setting } from "../config"
import { Countdown } from "./Countdown"
import { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

export const Offer = () => {

    useEffect(() => {
        Aos.init({
            once: true
        });
    }, []);

    return (
        <div className="w-full flex flex-col lg:flex-row mt-24 gap-x-6 gap-y-14 lg:items-center overflow-hidden">
            <div className="flex justify-center items-center gap-x-7">
                <img src={setting.offer.images.small} className="w-28 md:w-5/12 lg:w-72" alt="small image"
                    data-aos="fade-up"
                    data-aos-duration={500}
                    data-aos-easing="ease-in-out"
                />
                <img src={setting.offer.images.large} className="w-44 md:w-7/12 lg:w-96" alt="large image"
                    data-aos="fade-up"
                    data-aos-duration={700}
                    data-aos-easing="ease-in-out"
                />
            </div>
            <div className="gap-y-6 flex flex-col lg:justify-center items-start lg:px-3"
                data-aos="fade-up"
                data-aos-duration={500}
                data-aos-easing="ease-in-out"
            >
                <p className="text-white flex gap-x-2 lg:text-sm font-medium">
                    {setting.offer.content.offer.text}
                    <span className={`${setting.offer.content.offer.tag.discount ? "bg-default-300" : "bg-yellow-500"} px-3 py-[1px] rounded-sm font-bold self-start flex justify-center items-center`}>
                        {setting.offer.content.offer.tag.value}
                    </span>
                </p>
                <h1 className="text-4xl text-white font-medium">{setting.offer.content.productName}</h1>
                <p className="text-white/60 text-lg w-96">{setting.offer.content.short_description}</p>
                <Countdown endDate={new Date(setting.offer.content.endDateCountdown)} />
                <a href="#" className="mt-6 cursor-pointer font-medium text-white duration-300 ease-out bg-default-300 hover:bg-default-700 px-8 py-3 rounded">
                    Get Only {setting.offer.content.price}
                </a>
            </div>
        </div>
    )
}