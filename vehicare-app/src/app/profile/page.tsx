import Navbar from "@/components/Navbar/navbar";
import NavbarBottom from "@/components/Navbar/navbarBottom";
import bgProfile from "../../Assets/backgroundProfile.svg"
import CardProfile from "@/components/Card/cardProfile";

export default function Profile() {
    return (
        <>
            <div className="w-full h-screen fixed" style={{
                backgroundImage: `url(${bgProfile.src})`,
                backgroundSize: 'cover', // Mengatur gambar agar sesuai dengan ukuran layar
                backgroundPosition: 'center', // Mengatur posisi gambar di tengah
            }}>
                <Navbar />
                <CardProfile/>
                <NavbarBottom />
            </div>
        </>
    );
}
