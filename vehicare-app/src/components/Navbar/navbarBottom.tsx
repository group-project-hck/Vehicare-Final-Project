"use client"
import Link from "next/link";
import history from "../../Assets/history.svg"
import Image from "next/image";
import sparepart from "../../Assets/sparepart.svg"
import profile from "../../Assets/profile.svg"
import chat from "../../Assets/chatAi.svg"
import about from "../../Assets/aboutVehi.svg"
import { useState } from "react";
import InputModalChat from "../Modal/inputChat";

export default function NavbarBottom() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
        console.log(setModal, "<<<<");
    }

    return (
        <>
            <div className="fixed bottom-0 flex w-full h-14 mb-2">
                <div className="flex w-full h-full mx-10 rounded-md shadow-xl">
                    <div className="flex flex-1 justify-start pl-5 " style={{ backgroundColor: "transparent" }}>
                        <Link href={'/about'} className="-ml-5 mt-1">
                            <Image src={about} alt="Logo History Service" className="h-10 w-10 btn-ghost rounded-full border border-black" />
                        </Link>
                    </div>
                    <div className="flex flex-[3] justify-between items-center pl-5 rounded-xl" style={{ backgroundColor: "#EB8D00", opacity: 0.8 }}>
                        <Link href={'/history'} className="ml-28 px-1 py-1 rounded-xl" style={{ backgroundColor: "#EB8D00" }}>
                            <Image src={history} alt="Logo History Service" className="h-9 w-9 btn-ghost" />
                        </Link>
                        <Link href={'/spareparts'} className="px-1 py-1 rounded-xl" style={{ backgroundColor: "#EB8D00" }}>
                            <Image src={sparepart} alt="Logo Sparepart" className="h-9 w-9 btn-ghost" />
                        </Link>
                        <Link href={'/profile'} className="mr-36 px-1 py-1 rounded-xl" style={{ backgroundColor: "#EB8D00" }}>
                            <Image src={profile} alt="Logo Profile" className="h-9 w-9 btn-ghost" />
                        </Link>
                    </div>
                    <div className="flex flex-1 justify-end pl-5" style={{ backgroundColor: "transparent" }}>
                        <button onClick={toggleModal}>
                            <Image src={chat} alt="Logo Profile" className="h-12 w-12 btn-ghost rounded-full border border-black" />
                        </button>
                    </div>
                </div>
            </div>
            <InputModalChat modal={modal} setModal={setModal}/>
        </>
    )
}