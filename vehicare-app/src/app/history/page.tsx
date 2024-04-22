import Navbar from "@/components/Navbar/navbar";
import NavbarBottom from "@/components/Navbar/navbarBottom";
import bgHistory from "../../Assets/backgroundHistory.svg"
import CardHistory from "@/components/Card/cardHistory";

export default function History() {
    return (
        <>
            <div className="flex w-full h-5/6 justify-center items-center rounded pt-2">
                <div className="flex w-full h-full mx-10 shadow-xl rounded-lg border mb-2" style={{ borderColor: "transparent" }}>
                    <div className="flex flex-1 justify-center items-center pl-5" style={{ backgroundColor: 'transparent' }}></div>
                    <div className="flex flex-[3] justify-center items-center pl-5 pr-5 rounded-xl bg-white opacity-70 overflow-auto">
                        <div className="mt-20 w-full">
                            <div className="flex w-full flex-col items-center mt-8 mb-4">
                                {/* Item list menggunakan w-full */}
                                <button className="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100 w-full">
                                    {/* Isi item list */}
                                </button>
                                <CardHistory />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-1 justify-center items-center pl-5" style={{ backgroundColor: "transparent" }}></div>
                </div>
            </div>
        </>
    );
}
