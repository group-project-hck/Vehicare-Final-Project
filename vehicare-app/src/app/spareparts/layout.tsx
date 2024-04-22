import NavbarBottom from "@/components/Navbar/navbarBottom";
import Navbar from "@/components/navbar";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
      <div className=" w-full py-10 ">
      <Navbar/>
      {children}
      <NavbarBottom/>
      </div>
      </>
    );
}