"use client"
import Navbar from "@/components/Navbar/navbar";
import bgAboutOne from "../../Assets/backgroundAboutOne.svg";
import bgAboutTwo from "../../Assets/backgroundAboutTwo.png";
import InputModalMotorcyle from "@/components/Modal/inputMotorcyle";
import { useState } from "react";

export default function AboutPage() {
    const [modal, setModal] = useState(false)
    const toggleModal = () => {
        setModal(!modal)
    }
    return (
        <>
            {/* Navbar */}
            <Navbar />
            <div className="relative w-full h-screen overflow-y-auto -mt-20">
                <div
                    className="absolute top-0 left-0 w-full h-full z-0"
                    style={{
                        backgroundImage: `url(${bgAboutOne.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="w-full h-screen flex justify-center items-center z-10" onClick={toggleModal}>
                        <div className="text-white text-center" >
                            <h1 className="text-4xl font-bold mb-4">About Motor Refurbishment</h1>
                            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium tincidunt est, id varius odio. Aliquam erat volutpat. Vivamus vehicula eros vitae convallis eleifend.</p>
                            <InputModalMotorcyle modal={modal} setModal={setModal} />
                        </div>
                    </div>
                </div>
                <div
                    className="absolute top-full left-0 w-full h-screen z-0"
                    style={{
                        backgroundImage: `url(${bgAboutTwo.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="w-full h-screen flex justify-center items-center z-10">
                        <div className="text-white text-center">
                            <h1 className="text-4xl font-bold mb-4">Our Mission</h1>
                            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium tincidunt est, id varius odio. Aliquam erat volutpat. Vivamus vehicula eros vitae convallis eleifend.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
