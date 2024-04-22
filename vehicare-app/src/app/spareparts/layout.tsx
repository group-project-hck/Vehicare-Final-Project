import Navbar from "@/components/Navbar/navbar";
import NavbarBottom from "@/components/Navbar/navbarBottom";
import bgSparepart from "../../Assets/backgroundSparepart.svg"


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="w-full h-screen fixed" style={{
        backgroundImage: `url(${bgSparepart.src})`,
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