"use client"
import Link from "next/link";
import history from "../../Assets/listGif.gif"
import Image from "next/image";
import sparepart from "../../Assets/productGif.gif"
import profile from "../../Assets/profileGif.gif"
import chat from "../../Assets/chatGif.gif"
import about from "../../Assets/aboutGif.gif"
import { useState } from "react";
import InputModalChat from "../Modal/inputChat";
import { useRouter } from "next/navigation";

export default function NavbarBottom() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    }

    const route = useRouter()
    return (
        <>
            <div className="fixed bottom-0 flex w-full h-14 mb-4">
                <div className="flex justify-between w-full h-full mx-10 shadow-xl">
                    <Link href={'/about'} className="p-3 rounded-full">
                        <Image src={about} alt="Logo History Service" className="h-16 w-16 btn-ghost" />
                    </Link>
                    <div className="flex w-[60%] px-5 justify-between items-center rounded-br-full rounded-bl-full bg-opacity-10 bg-white border-b-4 border-slate-500">
                        <button onClick={() => route.push('/history')}
                            className="p-3 rounded-full bg-black bg-opacity-20 -mt-12
                            border-t-2 border-slate-500
                            ">
                            <div className="hover:scale-125 hover:-mt-3 transition ease-in-out duration-100 hover:text-white text-transparent">
                                <p className="absolute -mt-5 animate-bounce">Servicebooks</p>
                                <Image src={history} alt="Logo History Service" className="h-16 w-16" />
                            </div>
                        </button>
                        <button onClick={() => route.push('/spareparts')}
                            className="p-3 rounded-full bg-black bg-opacity-20 -mt-12
                            border-t-2 border-slate-500
                            ">
                            <div className="hover:scale-125 hover:-mt-3 transition ease-in-out duration-100 hover:text-white text-transparent">
                                <p className="absolute -mt-5 animate-bounce">Spareparts</p>
                                <Image src={sparepart} alt="Logo Sparepart" className="h-16 w-16" />
                            </div>
                        </button>
                        <button onClick={() => route.push('/profile')}
                            className="p-3 rounded-full bg-black bg-opacity-20 -mt-12
                            border-t-2 border-slate-500
                            ">
                            <div className="hover:scale-125 hover:-mt-3 transition ease-in-out duration-100 hover:text-white text-transparent">
                                <p className="absolute -mt-5 animate-bounce">Profile</p>
                                <Image src={profile} alt="Logo Profile" className="h-16 w-16" />
                            </div>
                        </button>
                    </div>
                    <button onClick={toggleModal} className="p-3 rounded-full">
                        <Image src={chat} alt="Logo Profile" className="h-16 w-16" />
                    </button>
                </div>
            </div>
            <InputModalChat modal={modal} setModal={setModal} />
        </>
    )
}