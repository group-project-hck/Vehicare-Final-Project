import Navbar from "@/components/Navbar/navbar";
import NavbarBottom from "@/components/Navbar/navbarBottom";
import bgHistory from "../../Assets/backgroundHistory.svg"
import CardHistory from "@/components/Card/cardHistory";

export default function History() {
    return (
        <>
            <div className="w-full h-screen fixed" style={{
                backgroundImage: `url(${bgHistory.src})`,
                backgroundSize: 'cover', // Mengatur gambar agar sesuai dengan ukuran layar
                backgroundPosition: 'center', // Mengatur posisi gambar di tengah
            }}>
                <Navbar />
                <CardHistory/>
                <NavbarBottom />
            </div>
        </>
    );
}
