import Navbar from "@/components/navbar";
import NavbarB from "@/components/navbarB";

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
      <NavbarB/>
      </div>
      </>
    );
}