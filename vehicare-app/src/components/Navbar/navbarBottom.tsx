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

export default function NavbarBottom() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    }

    return (
        <>
            <div className="fixed bottom-0 flex w-full h-14 mb-2">
                <div className="flex w-full h-full mx-10 rounded-md shadow-xl">
                    <div className="flex flex-1 justify-start pl-5 -mt-5" style={{ backgroundColor: "transparent" }}>
                        <Link href={'/about'} className="-ml-5 mt-1">
                            <Image src={about} alt="Logo History Service" className="h-14 w-14 btn-ghost rounded-xl border border-black" />
                        </Link>
                    </div>
                    <div className="flex flex-[3.5] justify-between items-center pl-5 rounded-full bg-opacity-10 bg-white">
                        <Link href={'/history'} className="ml-28 px-1 py-1 rounded-xl" style={{ backgroundColor: "white" }}>
                            <Image src={history} alt="Logo History Service" className="h-14 w-14 btn-ghost" />
                        </Link>
                        <Link href={'/spareparts'} className="px-1 py-1 rounded-xl" style={{ backgroundColor: "white" }}>
                            <Image src={sparepart} alt="Logo Sparepart" className="h-14 w-14 btn-ghost" />
                        </Link>
                        <Link href={'/profile'} className="mr-36 px-1 py-1 rounded-xl" style={{ backgroundColor: "white" }}>
                            <Image src={profile} alt="Logo Profile" className="h-14 w-14 btn-ghost" />
                        </Link>
                    </div>
                    <div className="flex flex-1 justify-end pl-5 rounded-xl -mt-10">
                        <button onClick={toggleModal} className="mt-1">
                            <Image src={chat} alt="Logo Profile" className="h-14 w-14 btn-ghost rounded-xl" />
                        </button>
                    </div>
                </div>
            </div>
            <InputModalChat modal={modal} setModal={setModal} />
        </>
    )
}