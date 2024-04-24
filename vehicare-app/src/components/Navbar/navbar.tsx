"use client"
import Link from "next/link";
import logo from "../../Assets/logo.svg"
import Image from "next/image";

export default function Navbar() {
    return (
        <>
            <div className="relative w-full h-24 px-10 -mt-4">
                {/* Latar belakang hitam */}
                <div className="relative w-full mb-2 h-full rounded-xl shadow-xl border px-10" style={{ backgroundColor: 'white', opacity: 0.2 }}></div>

                {/* Konten Navbar */}
                <div className="relative -mt-24 w-full z-10 flex justify-between items-center h-full px-5">
                    {/* Logo */}
                    <div className="flex items-center pl-5">
                        <Link href="/">
                            <Image src={logo} alt="Logo" className="h-12 w-12" />
                        </Link>
                    </div>
                </div>
            </div>
        </>

    )
}