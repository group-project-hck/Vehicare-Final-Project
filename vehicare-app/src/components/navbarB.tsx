import Link from "next/link";

export default function NavbarB() {
    return(
        <>
        <div className="flex w-full h-16 mt-3 ">
        <div className="flex w-full h-full mx-10 rounded-md shadow-xl">
          <div className="flex flex-1 justify-center items-center pl-5 border rounded-md">
          <Link href={'/service'}>
            <img src="logo.png" alt="Logo Service" className="h-10  btn-ghost" />
          </Link>
          </div>
          <div className="flex flex-1 justify-center items-center pl-5 border rounded-md ">
          <Link href={'/spareparts'}>
            <img src="logo.png" alt="Logo Sparepart" className="h-10 btn-ghost" />
          </Link>
          </div>
          <div className="flex flex-1 justify-center items-center pl-5 border rounded-md">
          <Link href={'/profile'}>
            <img src="logo.png" alt="Logo Profile" className="h-10 btn-ghost" />
          </Link>
          </div>
        </div>
      </div>
        </>
    )
}