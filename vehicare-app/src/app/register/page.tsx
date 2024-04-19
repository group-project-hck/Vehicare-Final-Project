'use client'
import React from 'react';
import svg from "../../Assets/registerImage.svg";
import machine from "../../Assets/machine.svg"
import Image from "next/image";
import Register from '@/actions/User';
import { useSearchParams } from 'next/navigation';


export default function RegisterPage() {
    const searchParams = useSearchParams();
    const errorMessage = searchParams.get("error")
    return (
        <>
            {/* component */}
            <div className="h-screen w-full fixed lg:flex grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 bg-white">
                <div className="h-full w-1/2 hidden lg:flex -ml-3 relative z-10">
                    <Image
                        src={svg}
                        className="h-full w-full object-cover"
                        alt="Login Image"
                    />
                    <div className="absolute top-10 left-10 p-2">
                        <p style={{ fontSize: 20, fontWeight: "bold" }}>VehiCare</p>
                    </div>
                    <div className="absolute bottom-40 left-10 p-2">
                        <p style={{ fontSize: 40, fontWeight: "bold", fontFamily: "Nurito Sans" }}>
                            Daftar sekarang untuk mengakses
                            layanan kami. Isi formulir di samping
                            untuk membuat akun baru.</p>
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
                        <div style={{ color: "#444B59", fontSize: 20, fontFamily: "Overpass", fontStyle: "Extrabold" }}>
                            <h1>Register Now</h1>
                        </div>
                        {/* DISPLAY ERROR */}
                        {errorMessage && (
                            <h1 className="animate-pulse rounded bg-red-500 px-4 py-2 text-center text-white ">
                                {errorMessage}
                            </h1>
                        )}
                        <div className="mt-10">
                            <form action={Register} id="register-form">
                                <div>
                                    <label className="mb-2 block font-bold" htmlFor="name" style={{ color: "#828282", fontSize: 14, fontFamily: "Nunito Sans", fontStyle: "Semibold" }}>
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="inline-block w-full rounded-lg bg-white p-3.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30 border border-solid border-#DED2D9"
                                        placeholder="xxxxxxx"
                                        style={{ fontSize: 14 }}
                                    />
                                </div>
                                <div className="mt-4">
                                    <label className="mb-2 block font-bold" htmlFor="username" style={{ color: "#828282", fontSize: 14, fontFamily: "Nunito Sans", fontStyle: "Semibold" }}>
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        className="inline-block w-full rounded-lg bg-white p-3.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30 border border-solid border-#DED2D9"
                                        placeholder="xxxxxxx"
                                        style={{ fontSize: 14 }}
                                    />
                                </div>
                                <div className="mt-4">
                                    <label className="mb-2 block font-bold" htmlFor="email" style={{ color: "#828282", fontSize: 14, fontFamily: "Nunito Sans", fontStyle: "Semibold" }}>
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="inline-block w-full rounded-lg bg-white p-3.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30 border border-solid border-#DED2D9"
                                        placeholder="abc@mail.com"
                                        style={{ fontSize: 14 }}
                                    />
                                </div>
                                {/* <div className="mt-4">
                                    <label className="mb-2 block font-bold" htmlFor="email" style={{ color: "#828282", fontSize: 14, fontFamily: "Nunito Sans", fontStyle: "Semibold" }}>
                                        No. Hp
                                    </label>
                                    <input
                                        type="number"
                                        name="phoneNumber"
                                        id="number"
                                        className="inline-block w-full rounded-lg bg-white p-3.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30 border border-solid border-#DED2D9"
                                        placeholder="08xxxxxxxxxx"
                                        style={{ fontSize: 14 }}
                                    />
                                </div> */}
                                <div className="mt-4" >
                                    <label className="mb-2 block font-bold" htmlFor="email" style={{ color: "#828282", fontSize: 14, fontFamily: "Nunito Sans", fontStyle: "Semibold" }}>
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        className="inline-block w-full rounded-lg bg-white p-3.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30 border border-solid border-#DED2D9"
                                        placeholder="********"
                                        style={{ fontSize: 14, marginBottom: 30 }}
                                    />
                                </div>
                                <div className="my-7">
                                    <button type='submit' className="w-full p-4 rounded-lg" style={{ backgroundColor: "#EB8D00", marginBottom: 25 }}>
                                        Register
                                    </button>
                                </div>
                            </form>
                            <div className="mt-2 flex w-full justify-center sm:flex-row">
                                {/* Register*/}
                                <div className="text-center pb-2 text-sm" style={{ color: "#828282" }}>
                                    Have Account?{" "}
                                    <a href="/login">
                                        <button
                                            className="tracking-wide font-bold inline-flex flex-grow-0 flex-shrink-0 justify-center items-center focus:outline-none focus:ring-1 active:ring-0 focus:ring-offset-0 disabled:bg-stroke disabled:text-gray disabled:cursor-not-allowed space-x-2 h-10 text-sm bg-transparent focus:bg-transparent focus:ring-transparent border-1.5 border-transparent px-1 text-primary focus:text-primary/75 !w-auto !min-w-fit  !py-0.5 normal-case"
                                            type="button"
                                        >
                                            <span className="tracking-[0.03em] leading-none" style={{ color: "#E58E28" }}>
                                                Click Here
                                            </span>
                                        </button>
                                    </a>
                                </div>
                            </div>
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