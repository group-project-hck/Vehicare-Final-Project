"use client"
import Navbar from "@/components/Navbar/navbar";
import bgAboutOne from "../../Assets/backgroundAboutOne.svg";
import bgAboutTwo from "../../Assets/backgroundAboutTwo.png";
import InputModalMotorcyle from "@/components/Modal/inputMotorcyle";
import imageOne from "../../Assets/About/image1.svg";
import imageTwo from "../../Assets/About/image2.svg";
import imageThree from "../../Assets/About/image3.svg";
import imageFour from "../../Assets/About/image4.svg";
import imageFive from "../../Assets/About/image5.svg";
import { useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer/footer";
import Carousel from "@/components/Carousel/carousel";

export default function AboutPage() {
    const [modal, setModal] = useState(false)
    const toggleModal = () => {
        setModal(!modal)
    }
    return (
        <>
            <Navbar />
            <div className="fixed flex w-full h-screen overflow-y-auto -mt-20">
                <div
                    className="absolute top-0 left-0 w-full h-full z-0"
                    style={{
                        backgroundImage: `url(${bgAboutOne.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="w-full h-screen flex justify-center items-center z-10 px-20" style={{ opacity: 0.8 }}>
                        <Carousel />
                    </div>
                    <div className="absolute flex flex-col top-full left-0 w-full h-screen" style={{ backgroundImage: `url(${bgAboutTwo.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="w-full flex flex-col justify-start items-start z-10 mt-32">
                            <div className="text-white text-center mb-4 ml-20 justify-between flex">
                                <h1 className="text-4xl font-bold mb-4" style={{ color: "#C15911", marginRight: "10px" }}>Our</h1>
                                <h1 className="text-4xl font-bold mb-4">Services</h1>
                            </div>

                            <div className="text-white text-center ml-20 justify-start">
                                <h1 className="text-2xl font-thin" style={{ color: "#808080", fontSize: 24 }}>From routine maintenance to urgent repairs, we are here to
                                    ensure your vehicle remains healthy and you can enjoy your journey safely and comfortably</h1>
                            </div>
                        </div>
                        <div className="w-full h-full justify-center items-center flex-grow -mt-40">
                            <div className="image-grid flex w-full h-full justify-between items-center px-20">
                                <div className="image-item rounded-lg overflow-hidden w-1/2 h-1/2 mr-10">
                                    <Image src={imageOne} alt="Image 1" layout="responsive" />
                                </div>
                                <div className="flex flex-col justify-between w-1/4 mr-10">
                                    <div className="image-item rounded-lg overflow-hidden mb-10">
                                        <Image src={imageTwo} alt="Image 2" layout="responsive" />
                                    </div>
                                    <div className="image-item rounded-lg overflow-hidden">
                                        <Image src={imageThree} alt="Image 3" layout="responsive" />
                                    </div>
                                </div>
                                <div className="flex flex-col justify-between w-1/4">
                                    <div className="image-item rounded-lg overflow-hidden mb-10">
                                        <Image src={imageFour} alt="Image 4" layout="responsive" />
                                    </div>
                                    <div className="image-item rounded-lg overflow-hidden">
                                        <Image src={imageFive} alt="Image 5" layout="responsive" />
                                    </div>
                                </div>
                            </div>
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
