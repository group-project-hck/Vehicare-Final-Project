import Navbar from "@/components/Navbar/navbar";
import bgProfile from "../../Assets/backgroundProfile.svg"
import NavbarBottom from "@/components/Navbar/navbarBottom";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="w-full h-screen fixed" style={{
        backgroundImage: `url(${bgProfile.src})`,
        backgroundSize: 'cover', // Mengatur gambar agar sesuai dengan ukuran layar
        backgroundPosition: 'center', // Mengatur posisi gambar di tengah
      }}>
        <Navbar />
        {children}
        <NavbarBottom />
      </div>
    </>
  );
}