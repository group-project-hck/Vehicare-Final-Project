import CardProduct from "@/components/Card/cardProduct";

export default function Profile() {
    return (
        <> <div className="flex w-full h-5/6 justify-center items-center rounded pt-2">
            <div className="flex w-full h-full mx-10 shadow-xl rounded-lg border mb-2" style={{ borderColor: "transparent" }}>
                <div className="flex flex-1 justify-center items-center pl-5" style={{ backgroundColor: 'transparent' }}></div>
                <div className="flex flex-[3] justify-center items-center pl-5 pr-5 rounded-xl bg-white opacity-80 overflow-auto">
                    <div className="relative p-6 mt-6">
                        <div className="relative mt-32 -mb-6 w-full overflow-x-auto pb-6 flex flex-wrap lg:flex-col lg:max-h-full lg:overflow-y-auto">
                            <CardProduct />
                        </div>
                    </div>
                </div>
                <div className="flex flex-1 justify-center items-center pl-5" style={{ backgroundColor: "transparent" }}></div>
            </div>
        </div>
        </>
    );
}
