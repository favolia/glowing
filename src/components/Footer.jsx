import { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { IconBrandYoutubeFilled, IconBrandTwitterFilled, IconBrandFacebookFilled, IconBrandInstagram } from "@tabler/icons-react";
import { setting } from "../config";

export const Footer = () => {
    useEffect(() => {
        Aos.init({
            once: true
        });
    }, []);

    return (
        <div className="mt-10 flex flex-col text-white bg-black pt-28 pb-14 w-full px-4 md:px-20 lg:px-4">

            <div className="flex flex-col lg:flex-row gap-y-8 w-full justify-between items-start">

                <div className="flex flex-col md:flex-row gap-y-12 w-full justify-between items-start">
                    <div className="flex flex-col">
                        <h4 className="font-medium text-xl mb-3">Company</h4>
                        <p className="text-sm text-white/60 leading-7">Find a location<br />nearest you. See</p>
                        <a href="#" className="text-white underline text-sm">Our Stores</a>
                        <br />
                        <p className="text-white font-medium text-sm">+391 (0)35 2568 4593</p>
                        <p className="text-sm text-white/60 leading-8">hello@domain.com</p>
                    </div>

                    <div className="flex flex-col gap-y-3">
                        <h4 className="font-medium text-xl mb-1">Useful links</h4>
                        <a href="#" className="text-white hover:underline text-sm text-white/60">New Products</a>
                        <a href="#" className="text-white hover:underline text-sm text-white/60">Best Sellers</a>
                        <a href="#" className="text-white hover:underline text-sm text-white/60">Bundle & Save</a>
                        <a href="#" className="text-white hover:underline text-sm text-white/60">Online Gift Card</a>

                    </div>

                    <div className="flex flex-col lg:px-7 gap-y-3">
                        <h4 className="font-medium text-xl mb-1">Information</h4>
                        <a href="#" className="text-white hover:underline text-sm text-white/60">Start a Return</a>
                        <a href="#" className="text-white hover:underline text-sm text-white/60">Contact Us</a>
                        <a href="#" className="text-white hover:underline text-sm text-white/60">Shipping FAQ</a>
                        <a href="#" className="text-white hover:underline text-sm text-white/60">Terms & Conditions</a>
                        <a href="#" className="text-white hover:underline text-sm text-white/60">Privacy Policy</a>
                    </div>
                </div>

                <div className="flex flex-col w-full gap-y-3">
                    <h4 className="font-medium text-3xl mb-1">Good emails.</h4>
                    <p className="text-white text-sm text-white/60">Enter your email below to be the first to know about new collections and<br />product launches.</p>
                    <br />
                    <form className="flex w-full">
                        <input type="email" placeholder="Enter your email address" required autoComplete="none" className="placeholder:text-white/40 h-11 border-l border-y border-white/10 focus-within:border-default-300 outline-none px-5 text-white/60 caret-white/60 bg-default-800 rounded-l w-full" />
                        <button type="submit" className="px-8 h-11 rounded-r transition duration-300 ease-in-out hover:bg-default-700 bg-default-300 font-medium ">Subscribe</button>
                    </form>

                </div>

            </div>

            <div className="flex justify-center items-center w-full mt-11 lg:mt-20">
                <img src="/img/logo-white.png" className="hidden md:flex lg:hidden w-44 mb-6" alt="" />
            </div>

            <div className="flex flex-col md:flex-row gap-y-5 lg:flex-row justify-between text-white">

                <div className="flex justify-start gap-4 order-2 lg:order-1 items-center">
                    <p className="text-white/60">© Glowing 2023</p>
                    <div className="flex gap-x-5">
                        <IconBrandTwitterFilled size={20} />
                        <IconBrandFacebookFilled size={20} />
                        <IconBrandInstagram size={20} />
                        <IconBrandYoutubeFilled size={20} />
                    </div>
                </div>

                <img src="/img/logo-white.png" className="md:hidden lg:flex w-44 order-1" alt="" />

                <img className="order-3 w-80" src="https://templates.g5plus.net/glowing-bootstrap-5/assets/images/footer/img_1.png" alt="bank card" />
            </div>

        </div>
    )
}