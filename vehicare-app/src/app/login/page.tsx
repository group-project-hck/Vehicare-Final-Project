
import React from 'react';
import svg from "../../Assets/LoginImage.svg";
import machine from "../../Assets/machine.svg"
import Image from "next/image";
import localFont from 'next/font/local'
import logo from "../../Assets/logo.svg"
import { HandleLogin } from '@/actions/User';
import { ErrorLogin } from '@/components/errorLogin';

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: '../Overpass-VariableFont_wght.ttf' })
export default function LoginPage() {
    return (
        <>
            {/* component */}
            <div className="flex h-screen w-full fixed lg:flex grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 bg-white">
                <div className="h-full w-1/2 hidden lg:flex -ml-3 relative z-10">
                    <Image
                        src={svg}
                        className="h-full w-full object-cover"
                        alt="Login Image"
                    />
                    <div className="absolute top-10 left-10">
                        <div className="absolute w-full h-full rounded-xl shadow-xl px-10" style={{ backgroundColor: 'black', opacity: 0.2 }}></div>
                        <div className='relative flex justiify-between w-full h-full px-4'>
                            <p style={{ fontSize: 20, fontWeight: "bold" }}>Vehi</p>
                            <p style={{ fontSize: 20, fontWeight: "bold", color: "#C15911" }}>Care</p>
                        </div>
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <Image
                            src={logo}
                            className="h-124 w-124 opacity-20"
                            alt="Logo"
                        />
                    </div>
                    <div className="absolute bottom-20 left-10">
                        <div className="absolute w-full h-full shadow-xl px-10" style={{ backgroundColor: 'black', opacity: 0.2, borderTopRightRadius:"10px",borderTopLeftRadius:"10px", borderColor:"transparent"}}></div>
                        <div className='relative flex justiify-between w-full h-full px-4'>
                            <p style={{ fontSize: 36, fontWeight: "bold", fontFamily: "Nurito Sans", marginRight: 6 }}>
                                Your
                            </p>
                            <p style={{ fontSize: 36, fontWeight: "bold", fontFamily: "Nurito Sans", color: "#C15911" }}>
                                Vehicle Care
                            </p>
                        </div>
                    </div>
                    <div className="absolute bottom-12 left-10">
                        <div className="absolute w-full h-full shadow-xl px-10" style={{ backgroundColor: 'black', opacity: 0.2, borderTopRightRadius:"10px",borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px", borderColor:"transparent" }}></div>
                        <div className='relative flex justiify-between w-full h-full px-4'>
                            <p style={{ fontSize: 22, fontWeight: "bold", fontFamily: "Nurito Sans" }}>
                                Quality Motor Maintenance for an Unforgettable Riding Experience!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="h-screen w-full flex flex-col lg:w-1/2 lg:flex lg:justify-center lg:text-white">
                    <div className="relative">
                        <div className="absolute -top-56 -right-40 m-10 opacity-20">
                            <Image
                                src={machine}
                                className="h-50 w-50"
                                alt="Machine Background"
                            />
                        </div>
                        <div className="absolute -bottom-10 left-0 m-10 opacity-20">
                            <Image
                                src={machine}
                                className="h-50 w-50"
                                alt="Machine Background"
                            />
                        </div>
                    </div>
                    <div className="mx-auto flex h-full w-2/3 flex-col justify-center text-white xl:w-1/2">
                        <div className='flex mx-auto'>
                            <Image
                                src={logo}
                                className="h-24 w-24 mb-2"
                                alt="Logo"
                            />
                        </div>
                        <div className="mx-auto" style={{ color: "#444B59", fontSize: 36, fontStyle: "Extrabold" }}>
                            <h1 className={myFont.className}>WELCOME BACK!</h1>

                        </div>
                        <div className="mx-auto" style={{ color: "#525252", fontSize: 16, fontFamily: "Nunito Sans", fontStyle: "normal", marginBottom: 40 }}>
                            <h1>Login to your account!</h1>
                        </div>
                        <ErrorLogin/>
                        <div>
                            <form id="login-form" action={HandleLogin}>
                                <div>
                                    <label className="mb-2 block font-bold" htmlFor="email" style={{ color: "#828282", fontSize: 14, fontFamily: "Nunito Sans", fontStyle: "Semibold" }}>
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        name="email"
                                        // onChange={handleInputLoginChange}
                                        id="email"
                                        className="inline-block w-full rounded-lg bg-white p-3.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30 border border-solid border-#DED2D9"
                                        placeholder="abc@mail.com"
                                        style={{ fontSize: 14 }}
                                    />
                                </div>
                                <div className="mt-4" style={{ marginTop: 40 }}>
                                    <label className="mb-2 block font-bold" htmlFor="email" style={{ color: "#828282", fontSize: 14, fontFamily: "Nunito Sans", fontStyle: "Semibold" }}>
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        // onChange={handleInputLoginChange}
                                        id="password"
                                        className="inline-block w-full rounded-lg bg-white p-3.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30 border border-solid border-#DED2D9"
                                        placeholder="********"
                                        style={{ fontSize: 14, marginBottom: 30 }}
                                    />
                                </div>
                                <div className="my-7">
                                    <button type='submit' className="w-full p-4 rounded-lg" style={{ backgroundColor: "#EB8D00", marginBottom: 25 }}>
                                        Login
                                    </button>
                                </div>
                                <div>
                                    <fieldset className="border-t" style={{ borderColor: "#A1A1A1" }}>
                                        <legend className="mx-auto px-2 text-center text-sm" style={{ color: "#A1A1A1" }}>
                                            Or Sign in with Email
                                        </legend>
                                    </fieldset>
                                </div>
                                {/* LOGIN GOOGLE*/}
                                <div className="my-6" style={{ marginTop: 45, marginBottom: 55 }}>
                                    <div
                                        className="w-full flex justify-center items-center gap-2 bg-white text-sm text-gray-600 p-2 rounded-md hover:bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300"
                                        id="buttonDiv"
                                    >
                                        <img
                                            src="https://freesvg.org/img/1534129544.png"
                                            className="mr-2 w-4 object-fill mt-2 mb-2"
                                        />
                                        Continue with Google
                                    </div>
                                </div>

                                <div className="mt-2 flex w-full justify-center sm:flex-row">
                                    {/* Register*/}
                                    <div className="text-center pb-2 text-sm" style={{ color: "#828282" }}>
                                        Not Registered Yet?{" "}
                                        <a href="/register">
                                            <button
                                                className="min-w-[78px] tracking-wide font-bold inline-flex flex-grow-0 flex-shrink-0 justify-center items-center focus:outline-none focus:ring-1 active:ring-0 focus:ring-offset-0 disabled:bg-stroke disabled:text-gray disabled:cursor-not-allowed space-x-2 h-10 text-sm bg-transparent focus:bg-transparent focus:ring-transparent border-1.5 border-transparent px-1 text-primary focus:text-primary/75 !h-auto !w-auto !min-w-fit !px-0 !py-0.5 normal-case"
                                                type="button"
                                            >
                                                <span className="tracking-[0.03em] leading-none" style={{ color: "#E58E28" }}>
                                                    Create an account
                                                </span>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="relative z-0">
                        <div className="absolute -bottom-40 -left-40 opacity-20">
                            <Image
                                src={machine}
                                className="h-50 w-50"
                                alt="Machine Background"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}