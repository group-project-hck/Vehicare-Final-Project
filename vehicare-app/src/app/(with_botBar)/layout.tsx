import NavbarBottom from "@/components/Navbar/navbarBottom";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
            <NavbarBottom />
        </>
    );
}