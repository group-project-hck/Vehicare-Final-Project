import Card from "@/components/cardProduct";

export default function SpareParts() {
    return (
        <>
            <div className="flex w-full h-96 mt-5 ">
                <div className="flex w-full h-full mx-10 shadow-xl rounded-lg">
                    <div className="flex w-full h-full justify-center">
                        <div className="flex w-full h-full justify-center items-center pl-5">
                            <h1 className="flex text-3xl justify-center items-center ">Spareparts List</h1>
                            <div className=" flex w-full row-auto">
                                <div className="w-full h-64 overflow-y-auto ">
                                        <div className="grid grid-cols-5 w-full gap-4">
                                           <Card/>
                                           <Card/>
                                           <Card/>
                                           <Card/>
                                           <Card/>
                                           <Card/>
                                           <Card/>
                                           <Card/>
                                           <Card/>
                                           <Card/>
                                           <Card/>
                                           <Card/>
                                           <Card/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}