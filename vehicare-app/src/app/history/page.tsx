import bgHistory from "../../Assets/backgroundHistory.svg"
import CardHistory from "@/components/Card/cardHistory";
import GetServices from "@/actions/ServiceBooks";
import { ServiceBooks } from "@/databases/models/types";

export default async function History() {
    // FETCHING DARI ACTION SERVICE BOOK
    const { Books }: { Books: ServiceBooks[] } = await GetServices()

    return (
        <>
            <div className="w-full h-screen fixed" style={{
                backgroundImage: `url(${bgHistory.src})`,
                backgroundSize: 'cover', // Mengatur gambar agar sesuai dengan ukuran layar
                backgroundPosition: 'center', // Mengatur posisi gambar di tengah
            }}>
                <div className="flex w-full h-5/6 justify-center items-center rounded pt-5">
                    <div className="flex w-full h-full mx-10 shadow-xl rounded-lg border mb-2" style={{ borderColor: "transparent" }}>
                        <div className="flex flex-1 justify-center items-center pl-5" style={{ backgroundColor: 'transparent' }}></div>
                        <div className="flex flex-[3] justify-center items-center pl-5 pr-5 rounded-xl bg-white opacity-90 overflow-auto">
                            <div className="w-full h-full">
                                <div className="flex w-full flex-col items-center">
                                    {/* MAPING CARD HERE */}
                                    {Books.map((book, i) => (
                                        <CardHistory key={i} book={book} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-1 justify-center items-center pl-5" style={{ backgroundColor: "transparent" }}></div>
                    </div>
                </div>
            </div>
        </>
    );
}
