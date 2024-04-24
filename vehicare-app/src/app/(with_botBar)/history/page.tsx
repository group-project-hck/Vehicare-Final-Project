import bgProfile from "@/Assets/backgroundProfile.svg"
import CardHistory from "@/components/Card/cardHistory";
import GetServices from "@/actions/ServiceBooks";
import { ServiceBooks } from "@/databases/models/types";
import ServiceBooksBtn from "@/components/Button/serviceBookBtn";


export default async function History() {
    // Fetching dari action service books
    const { Books }: { Books: ServiceBooks[] } = await GetServices()
    return (
        <>
            <div className="w-full h-screen fixed" style={{
                backgroundImage: `url(${bgProfile.src})`,
                backgroundSize: 'cover', // Mengatur gambar agar sesuai dengan ukuran layar
                backgroundPosition: 'center', // Mengatur posisi gambar di tengah
            }}>
                <div className="flex justify-center w-full h-5/6 shadow-xl rounded-lg pt-5">
                    <div className="flex w-[60%] rounded-xl bg-white opacity-90 overflow-auto">
                        <div className="w-full overflow-x-auto flex flex-wrap lg:flex-col lg:max-h-full lg:overflow-y-auto px-5">
                            <ServiceBooksBtn />
                            {/* MAPING CARD HERE */}
                            {Books && Books.map((book, i) => (
                                <CardHistory key={i} book={book} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
