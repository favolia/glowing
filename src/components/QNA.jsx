import { setting } from "../config";
import { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

export const QNA = () => {

    useEffect(() => {
        Aos.init({
            once: true
        });
    }, []);

    return (
        <div className="w-full flex flex-col justify-center items-center gap-y-10 mt-24 overflow-hidden">
            <h1 className="text-4xl text-white text-center font-medium"
                data-aos="fade-up"
                data-aos-duration={500}
                data-aos-easing="ease-in-out"
            >{setting.qna.q}</h1>
            <div className="flex flex-col md:flex-row w-full md:gap-x-5 lg:gap-x-0 justify-center items-center gap-y-7">
                {setting.qna && setting.qna.data.map((item, i) => (
                    <div key={i} className="w-full flex flex-col justify-center items-center gap-y-4"
                        data-aos="fade-up"
                        data-aos-duration={600 + i * 200}
                        data-aos-easing="ease-in-out"
                    >
                        <img className="w-[6.4rem]" src={item.image} alt="" />
                        <h4 className="text-white text-center font-medium text-2xl">{item.title}</h4>
                        <p className="text-white/60 text-sm text-center w-full lg:w-80">{item.subText}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

