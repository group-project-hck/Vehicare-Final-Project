import Navbar from "@/components/Navbar/navbar";
import NavbarBottom from "@/components/Navbar/navbarBottom";
import bgSparepart from "../../Assets/backgroundSparepart.svg"
import CardProduct from "@/components/Card/cardProduct";

export default function Profile() {
    return (
        <>
            <div className="w-full h-screen fixed" style={{
                backgroundImage: `url(${bgSparepart.src})`,
                backgroundSize: 'cover', // Mengatur gambar agar sesuai dengan ukuran layar
                backgroundPosition: 'center', // Mengatur posisi gambar di tengah
            }}>
                <Navbar />
                <CardProduct/>
                <NavbarBottom />
            </div>
        </>
    );
}
