"use client"
import Image from "next/image";
import history from "../../Assets/listGif.gif"
import profile from "../../Assets/profileGif.gif"
import home from "../../Assets/home.png"
import { useRouter } from "next/navigation";
import BtnGroup from "../Button/BtnGroup";

export default function NavbarBottom() {
    const route = useRouter()
    return (
        <>
            <div className="fixed bottom-0 flex w-full h-14 mb-4">
                {/* ICON SIDE B */}
                <div className="flex justify-center w-full h-full mx-10 shadow-xl">
                    <div className="flex w-[60%] px-5 pb-2 justify-between items-center rounded-br-full rounded-bl-full bg-opacity-10 bg-white border-b-4 border-white">
                        <button onClick={() => route.push('/history')}
                            className="p-3 rounded-full bg-black bg-opacity-35 -mt-12
                            border-t-2 border-white
                            ">
                            <div className="hover:scale-125 hover:-mt-3 transition ease-in-out duration-300 hover:text-white text-transparent">
                                <p className="absolute -mt-5 ms-3 animate-bounce text-sm">Books</p>
                                <Image src={history} alt="Logo History Service" className="h-16 w-16" />
                            </div>
                        </button>
                        <button onClick={() => route.push('/')}
                            className="p-3 rounded-full bg-black bg-opacity-35 -mt-12
                            border-t-2 border-white
                            ">
                            <div className="hover:scale-125 hover:-mt-3 transition ease-in-out duration-300 hover:text-white text-transparent">
                                <p className="absolute -mt-5 ms-3 animate-bounce text-sm">Home</p>
                                <Image src={home} alt="Logo Sparepart" className="h-16 w-16" />
                            </div>
                        </button>
                        <button onClick={() => route.push('/profile')}
                            className="p-3 rounded-full bg-black bg-opacity-35 -mt-12
                            border-t-2 border-white
                            ">
                            <div className="hover:scale-125 hover:-mt-3 transition ease-in-out duration-300 hover:text-white text-transparent">
                                <p className="absolute -mt-5 ms-3 animate-bounce text-sm">Profile</p>
                                <Image src={profile} alt="Logo Profile" className="h-16 w-16" />
                            </div>
                        </button>
                    </div>
                </div>
                {/* ICON SIDE R */}
                <div className="flex flex-col -mt-96 absolute right-0 gap-5">
                    <BtnGroup />
                </div>
            </div>
        </>
    )
}