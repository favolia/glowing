import { useRef, useState, useEffect } from 'react';
import { MagnifyingGlassIcon, UserIcon, StarIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { MoonIcon, SparklesIcon, Bars3BottomLeftIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { IconArrowBadgeDownFilled, IconArrowBadgeRightFilled } from "@tabler/icons-react";
import { HiddenSearchBar } from "./HiddenSearchBar";
import { setting } from '../config';

export const LargeBar = () => {
    const [hiddenSearchBar, setHiddenSearchBar] = useState(true);
    const [hideSidebar, setHideSidebar] = useState(true);

    const refHiddenSearchBar = useRef();
    const sidebar = useRef();

    const handleSidebarClick = (e) => {
        if (!sidebar.current.contains(e.target) && !hideSidebar) {
            setHideSidebar(true);
        }
    };

    const handleSearchBarClick = (e) => {
        if (!refHiddenSearchBar.current.contains(e.target) && !hiddenSearchBar) {
            setHiddenSearchBar(true);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleSidebarClick);

        return () => {
            document.removeEventListener('mousedown', handleSidebarClick);
        };
    }, [hideSidebar]);

    useEffect(() => {
        document.addEventListener('mousedown', handleSearchBarClick);

        return () => {
            document.removeEventListener('mousedown', handleSearchBarClick);
        };
    }, [hiddenSearchBar]);

    return (
        <>
            <div className={`fixed ${hiddenSearchBar ? '-z-30' : 'bg-black/50 z-40'} top-0 transition-all duration-500 delay-100 h-screen w-full`}>
                <div ref={refHiddenSearchBar} className={`absolute ${hiddenSearchBar ? '-top-full' : 'top-0 delay-75'} w-full transition-all duration-500 ease-in-out`}>
                    <HiddenSearchBar />
                </div>
            </div>
            <nav className="mobile_navbar sticky lg:static top-0 z-20 bg-default w-full h-fit px-3 md:px-20 lg:px-4 py-5 lg:pt-5 lg:pb-2">
                <ul className="w-full flex justify-between items-center bg-default">
                    <li>
                        <Bars3BottomLeftIcon onClick={() => setHideSidebar(false)} className="flex lg:hidden cursor-pointer h-9 w-9 text-white" />
                        <form action="#">
                            <label htmlFor="search-bar" className="hidden lg:flex cursor-text py-2 px-4 h-full justify-center items-center border-2 border-white/75 border-solid rounded-sm">
                                <input type="text" id="search-bar" className="bg-transparent w-52 outline-none text-base text-white/60" placeholder="Search Product" />
                                <button type="submit">
                                    <MagnifyingGlassIcon className="text-white ml-3 h-5 w-5" />
                                </button>
                            </label>
                        </form>
                    </li>
                    <li>
                        <a href="/">
                            <img className="w-44" src={'/img/logo-white.png'} alt="logo" />
                        </a>
                    </li>
                    <li className="flex justify-center items-center gap-3 lg:gap-5 lg:ml-28">
                        <UserIcon className="hidden lg:flex cursor-pointer h-7 w-7 text-white" />
                        <div className="hidden lg:flex cursor-pointer justify-center items-center relative">
                            <StarIcon className="h-7 w-7 text-white" />
                            <p className="absolute ml-5 mb-5 h-4 w-4 rounded-full bg-black text-white flex justify-center items-center text-xs font-bold">
                                3
                            </p>
                        </div>
                        <div className="hidden lg:flex cursor-pointer justify-center items-center relative">
                            <ShoppingBagIcon className="h-7 w-7 text-white" />
                            <p className="absolute ml-5 mb-5 h-4 w-4 rounded-full bg-black text-white flex justify-center items-center text-xs font-bold">
                                3
                            </p>
                        </div>
                        <MagnifyingGlassIcon onClick={() => setHiddenSearchBar(false)} className="flex lg:hidden cursor-pointer h-7 w-7 text-white/80" />
                        <div className="cursor-pointer px-1 h-7 w-7 flex justify-center items-center rounded-full overflow-hidden bg-green-300/5 text-green-200/30">
                            <MoonIcon className="h-5 w-5" />
                            <SparklesIcon className="absolute ml-2 mb-2 h-4 w-4" />
                        </div>
                    </li>
                </ul>
            </nav>
            <div className={`fixed ${hideSidebar ? '-z-30' : 'bg-black/50 z-50'} top-0 transition-all duration-500 delay-100 h-screen w-full`}>
                <aside ref={sidebar} className={`${hideSidebar ? '-translate-x-full' : 'translate-x-0'} z-50 transition-all duration-500 ease-in-out w-72 h-full flex flex-col border-r border-white/20 overflow-hidden`}>
                    <div className="logo flex w-full h-[15vh] flex-row justify-between items-center text-white px-4 py-5 border-b border-white/20 bg-default-800">
                        <h1 className="text-inherit font-medium text-2xl">GLOWING</h1>
                        <XMarkIcon onClick={() => setHideSidebar(true)} className="h-7 w-7 text-white/60 hover:text-white/90 cursor-pointer" />
                    </div>
                    <div className="flex flex-col overflow-y-hidden w-full h-[70vh] justify-start items-center text-black dark:text-white px-4 py-3 border-b border-white/20 bg-default">
                        {setting.sidebarMenu && setting.sidebarMenu.map((item, i) => (
                            <div key={i} className="w-full py-2 flex flex-row justify-between items-center cursor-pointer">
                                <h4 className="font-medium text-white/70">{item.title}</h4>
                                <IconArrowBadgeRightFilled size={20} className="text-white/60" />
                            </div>
                        ))}
                    </div>
                    <div className="flex w-full h-[15vh] flex-row justify-between items-center text-black dark:text-white px-4 py-5 border-t border-white/20 bg-default-800">
                        <p className="text-white/60 text-sm">© 2023 Glowing.<br />All rights reserved.</p>
                    </div>
                </aside>
            </div>
        </>
    );
};
