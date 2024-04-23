import Image from "next/image";
import { useRouter } from "next/navigation";
import about from "@/Assets/aboutGif.gif"
import chat from "@/Assets/chatGif.gif"
import home from "@/Assets/home.png"
import option from "@/Assets/optionImage.png"
import InputModalChat from "../Modal/inputChat";
import { useState } from "react";

export default function BtnGroup() {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    }
    const route = useRouter()
    return (
        <>
            <div className="floating-container">
                <div className="floating-button">
                    <Image src={option} alt="Logo Servicebook" className="h-14 w-14" />
                </div>
                <div className="element-container">
                    <span className="float-element tooltip-left">
                        <button onClick={() => route.push('/about')}>
                            <div className="hover:scale-110 transition ease-in-out duration-300 hover:text-white text-transparent">
                                <p className="absolute -ms-14 animate-pulse">About</p>
                                <Image src={about} alt="Logo Servicebook" />
                            </div>
                        </button>
                    </span>
                    <span className="float-element">
                        <button onClick={() => route.push('/')}>
                            <div className="hover:scale-110 transition ease-in-out duration-300 hover:text-white text-transparent">
                                <p className="absolute -ms-14 animate-pulse">Home</p>
                                <Image src={home} alt="Logo Home" />
                            </div>
                        </button>
                    </span>
                    <span className="float-element">
                        <button onClick={toggleModal}>
                            <div className="hover:scale-110 transition ease-in-out duration-300 hover:text-white text-transparent">
                                <p className="absolute -ms-14 animate-pulse">Chats</p>
                                <Image src={chat} alt="Logo Profile" />
                            </div>
                        </button>
                    </span>
                </div>
            </div>
            <InputModalChat modal={modal} setModal={setModal} />
        </>
    )
}