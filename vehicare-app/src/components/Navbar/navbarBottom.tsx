import Link from "next/link";
import history from "../../Assets/history.svg"
import Image from "next/image";
import sparepart from "../../Assets/sparepart.svg"
import profile from "../../Assets/profile.svg"

export default function NavbarBottom() {
    return (
        <>
            <div className="flex w-full h-16 mt-3 ">
                <div className="flex w-full h-full mx-10 rounded-md shadow-xl">
                    <div className="flex flex-1 justify-center items-center pl-5 border-l" style={{backgroundColor: "#EB8D00", opacity:0.8, borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px', borderColor:"transparent"}}>
                        <Link href={'/service'}>
                            <Image src={history} alt="Logo History Service" className="h-9 w-9 btn-ghost" />
                        </Link>
                    </div>
                    <div className="flex flex-1 justify-center items-center pl-5" style={{backgroundColor: "#EB8D00", opacity:0.8}}>
                        <Link href={'/spareparts'}>
                            <Image src={sparepart} alt="Logo Sparepart" className="h-9 w-9 btn-ghost" />
                        </Link>
                    </div>
                    <div className="flex flex-1 justify-center items-center pl-5 border-r" style={{backgroundColor: "#EB8D00", opacity:0.8, borderTopRightRadius: '10px', borderBottomRightRadius: '10px', borderColor:"transparent"}}>
                        <Link href={'/profile'}>
                            <Image src={profile} alt="Logo Profile" className="h-9 w-9 btn-ghost" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}