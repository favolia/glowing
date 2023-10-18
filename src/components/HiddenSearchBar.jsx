import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { twMerge } from "tailwind-merge";

export const HiddenSearchBar = ({ className }) => {
    return (
        <div className={twMerge(`gap-y-3 flex flex-col justify-between py-7 items-center bg-default h-[11.3rem] w-full shadow-sm shadow-white/10`, className)}>
            <img src="/img/logo-white.png" className="w-44" alt="image" />

            <form action='#' className="mt-3">
                <label htmlFor="search-bar" className="flex cursor-text py-[0.65rem] px-4 h-full justify-center items-center border border-green-300/20 border-solid rounded-sm">
                    <input type="text" id="search-bar" className="bg-transparent w-full md:w-[22rem] outline-none text-base text-white/60" placeholder='Search product' />
                    <button type="submit">
                        <MagnifyingGlassIcon className="text-white/60 ml-3 h-6 w-6" />
                    </button>
                </label>
            </form>

            <ul className="flex gap-x-3">
                <li>
                    <p className="text-base text-[0.9rem] text-white/50">Popular Searches</p>
                </li>

                <li className="[&>*]:underline text-[0.9rem] flex flex-row gap-x-3 text-white">
                    <a href="#">T-Shirt</a>
                    <a href="#">Blue</a>
                    <a href="#">Jacket</a>
                </li>
            </ul>
        </div>
    )
}

