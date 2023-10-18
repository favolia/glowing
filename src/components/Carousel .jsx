import { useState, useEffect } from "react";
import { setting } from "../config";

export const Carousel = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (current >= setting.carousel.data.length - 1) {
                setCurrent(0);
            } else {
                setCurrent((prevItem) => prevItem + 1);
            }
        }, setting.carousel.duration);

        return () => {
            clearTimeout(timer);
        };
    }, [current, setting.carousel.data]);

    return (
        <div className="text-black dark:text-white flex flex-col justify-center items-center w-full">
            <div className="grid place-items-center h-screen lg:h-[27.5rem] w-full relative overflow-hidden">
                {setting.carousel.data && setting.carousel.data.map((item, i) => (
                    <div
                        style={{
                            backgroundImage: `url('${item.image}')`,
                        }}
                        key={i}
                        className={`flex justify-start items-center absolute bg-center bg-cover ${current === i ? "opacity-100" : "opacity-0"
                            } transition-opacity duration-1000 ease-in-out w-full h-full`}
                    >
                        {/* <img src={item} alt="" /> */}

                        <div
                            key={"9999999" + i}
                            className={`flex absolute ${current === i ? "left-3" : ""
                                } flex-col justify-center items-start ml-4 lg:ml-20 transition-opacity ease-in-out`}
                        >
                            <div className={`${current === i ? "transition-all delay-500 duration-1000 -translate-y-0" : "opacity-0 -translate-y-[170%]"}`}>
                                <h1 className="text-inherit text-5xl w-72 md:w-80">{item.title}</h1>
                                <br />
                                <p className="my-2 text-inherit w-52 md:w-96 font-normal">{item.short_description}</p>
                                <br />
                                <h4 className="text-inherit text-lg font-medium">Starting at {item.price}</h4>
                            </div>
                            <br />
                            <div className={current === i ? "transition-all delay-500 duration-1000 translate-y-0" : "opacity-0 translate-y-64"}>
                                <a href="#" className={`cursor-pointer text-white duration-300 ease-out bg-default-300 hover:bg-default-700 font-medium px-8 py-3 rounded`}>
                                    Shop Now
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="relative bottom-11 py-4 flex justify-center gap-3 w-full">
                {setting.carousel.data && setting.carousel.data.map((item, i) => (
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
    );
};