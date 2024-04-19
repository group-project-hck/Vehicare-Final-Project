import Link from "next/link";
import logo from "../../Assets/logo.svg"
import Image from "next/image";
import logout from "../../Assets/logout.svg"

export default function Navbar() {
    return (
        <>
            <div className="relative w-full h-24 px-10 -mt-4">
                {/* Latar belakang hitam */}
                <div className="relative w-full mb-2 h-full rounded-xl shadow-xl border border-white px-10" style={{ backgroundColor: 'white', opacity: 0.1 }}></div>

                {/* Konten Navbar */}
                <div className="relative -mt-24 w-full z-10 flex justify-between items-center h-full px-5">
                    {/* Logo */}
                    <div className="flex items-center pl-5">
                        <Link href="/">
                            <Image src={logo} alt="Logo" className="h-12 w-12" />
                        </Link>
                    </div>

                    {/* Button logout */}
                    <div className="flex items-center pr-5">
                        <button className="px-3 py-3 rounded-xl" style={{ backgroundColor: "#EB8D00" }}>
                            <Image src={logout} alt="Logout" className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </>

    )
}