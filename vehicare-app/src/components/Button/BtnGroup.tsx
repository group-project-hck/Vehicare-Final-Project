import Image from "next/image";
import about from "@/Assets/aboutGif.gif"
import chat from "@/Assets/chatGif.gif"
import logout from "@/Assets/logoutGif.gif"
import sparepart from "@/Assets/productGif.gif"
import option from "@/Assets/optionImage.png"
import notification from "@/Assets/notification.png"
import InputModalChat from "../Modal/inputChat";
import { useRouter } from "next/navigation";
import { useState } from "react";
import handleLogOut from "@/actions/User";

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
                    <Image src={option} alt="Logo Servicebook" />
                </div>
                <div className="element-container">
                    <span className="float-element tooltip-left">
                        <button onClick={() => route.push('/about')}>
                            <div className="hover:scale-125 transition ease-in-out duration-300 hover:text-white text-transparent">
                                <p className="absolute -ms-14 animate-pulse">About</p>
                                <Image src={about} alt="Logo Servicebook" className="bg-orange-600 p-2 bg-opacity-80 rounded-full" />
                            </div>
                        </button>
                    </span>
                    <span className="float-element">
                        <button onClick={() => route.push('/spareparts')}>
                            <div className="hover:scale-125 transition ease-in-out duration-300 hover:text-white text-transparent">
                                <p className="absolute -ms-24 animate-pulse">Spareparts</p>
                                <Image src={sparepart} alt="Logo Home" className="bg-orange-600 p-2 bg-opacity-80 rounded-full" />
                            </div>
                        </button>
                    </span>
                    <span className="float-element">
                        <button onClick={toggleModal}>
                            <div className="hover:scale-125 transition ease-in-out duration-300 hover:text-white text-transparent">
                                <p className="absolute -ms-14 animate-pulse">Chats</p>
                                <Image src={chat} alt="Logo Profile" className="bg-orange-600 p-2 bg-opacity-80 rounded-full" />
                            </div>
                        </button>
                    </span>
                    <span className="float-element">
                        <button onClick={() => handleLogOut()}>
                            <div className="hover:scale-125 transition ease-in-out duration-300 hover:text-white text-transparent">
                                <p className="absolute -ms-24 animate-pulse">Notification</p>
                                <Image src={notification} alt="Logout" className="bg-orange-600 p-2 bg-opacity-80 rounded-full" />
                            </div>
                        </button>
                    </span>
                    <span className="float-element">
                        <button onClick={() => handleLogOut()}>
                            <div className="hover:scale-125 transition ease-in-out duration-300 hover:text-white text-transparent">
                                <p className="absolute -ms-16 animate-pulse">Logout</p>
                                <Image src={logout} alt="Logout" className="bg-orange-600 p-2 bg-opacity-80 rounded-full" />
                            </div>
                        </button>
                    </span>
                </div>
            </div>
            <InputModalChat modal={modal} setModal={setModal} />
        </>
    )
}