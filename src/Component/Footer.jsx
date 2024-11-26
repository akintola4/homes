
import { FaAndroid, FaFacebook, FaInstagram, FaLinkedin, FaWindows, FaXTwitter } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
export default function Footer() {
    return (
        <footer className="pt-10 w-full flex-end bottom-0  " >
            <div className="relative">
                <div className="relative flex   flex-col gap-10  ">
                        <div className="flex flex-col px-5 gap-10 lg:gap-20  lg:flex-row ">
                            <div className="flex flex-col items-center justify-between lg:items-start gap-6  lg:w-4/12" >
                            <div className="flex flex-col ga-2">
                            <img src="/img/logo-light.svg" className=" block dark:hidden " alt="" />
                                <img src="/img/logo-black.svg" className=" hidden dark:block invert" alt="" />

                                <p className=" text-md text-center lg:text-left">Where Dreams Find Their Address</p>
                            </div>
                            
                                <h4 className="text-xl  md:text-4xl font-semibold]">We make your Journey to finding the perfect home Simple and Seamless.</h4>
                            </div>
                            <div className="grid lg:grid-cols-5 grid-cols-2 gap-6 md:gap-10 justify-between my-5 lg:w-8/12 lg:grid-rows-1">
                                <ul className="flex flex-col gap-2  text-left justify-between">
                                    <h4 className="font-bold text-lg ">TERMS & PRIVACY</h4>
                                    <li><button className="text-md font-light "> Trust & Safety</button></li>
                                    <li><button className="text-md font-light ">Terms of Service</button></li>
                                    <li><button className="text-md font-light "> Privacy Policy</button></li>
                                </ul>
                                <ul className="flex flex-col gap-2  text-left justify-between">
                                    <h4 className="font-bold text-lg ">Quick Navigation</h4>
                                    <li><button className="text-md font-light "> Home </button></li>
                                    <li><button className="text-md font-light ">Our Properties</button></li>
                                    <li><button className="text-md font-light ">Reviews
                                    </button></li>
                                    <li><button className="text-md font-light "> Our Services </button></li>
                                </ul>
                               
                                <ul className="flex flex-col gap-2  text-left justify-between">
                                    <h4 className="font-bold text-lg ">RESOURCES</h4>
                                    <li><button className="text-md font-light ">Blog</button></li>
                                    <li><button className="text-md font-light "> Guides</button></li>
                                    <li><button className="text-md font-light ">FAQ</button></li>
                                    <li><button className="text-md font-light ">Help Center</button></li>

                                </ul>
                                <ul className="flex flex-col gap-2  text-left justify-between">
                                    <h4 className="font-bold text-lg "> ABOUT</h4>
                                    <li><button className="text-md font-light ">Company</button></li>
                                    <li><button className="text-md font-light ">How it works</button></li>
                                    <li><button className="text-md font-light ">Contact</button></li>
                                    <li><button className="text-md font-light ">Investors</button></li>
                                </ul>
                                <ul className="flex flex-col gap-2  text-left justify-between">
                                    <h4 className="font-bold text-lg "> GET THE APP</h4>
                                    <li><button className="text-md flex flex-row gap-2 border border-gray-950 dark:border-gray-50 px-4 py-2 items-center rounded-full font-light "> <FaApple />  macOS </button></li>
                                    <li><button className="text-md flex flex-row gap-2 border border-gray-950 dark:border-gray-50 px-4 py-2 items-center rounded-full font-light "><FaWindows /> Windows</button></li>
                                    <li><button className="text-md flex flex-row gap-2 border border-gray-950 dark:border-gray-50 px-4 py-2 items-center rounded-full font-light "><FaAndroid /> android </button></li>
                                    <li><button className="text-md flex flex-row gap-2 border border-gray-950 dark:border-gray-50 px-4 py-2 items-center rounded-full font-light "> <FaApple /> Ios</button></li>
                                </ul>
                            </div>
                        </div>
                    <div className="flex flex-col items-center md:items-start gap-4 md:gap-0 md:flex-row p-5  justify-between bg-gray-950 text-gray-50 dark:bg-gray-50 dark:text-gray-900 ">

                        <h4 className=" text-sm text-center lg:text-left">©2024 AH Homes. All rights reserved by <a href="https://x.com/zionxi99?s=21">Blaze</a>  and implemented by <a href="https://x.com/photofola">Dev Jesse</a> <a href="https://x.com/photofola">Dev Akintola</a></h4>

                        <div className="flex gap-5 flex-row ">
                            <button className="text-lg"><FaFacebook /></button>
                            <button className="text-lg"><FaInstagram /></button>
                            <button className="text-lg"><FaXTwitter /></button>
                            <button className="text-lg"><FaLinkedin  /></button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
