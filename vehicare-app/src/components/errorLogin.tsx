"use client";
import { useSearchParams } from "next/navigation";

export const ErrorLogin = () => {
    const searchParams = useSearchParams();
    const errorMessage = searchParams.get("error")

    return (
        <>
            {errorMessage && (
                <h1 className="animate-pulse rounded bg-red-500 px-4 py-2 text-center text-white ">
                    {errorMessage}
                </h1>
            )}
        </>
    )
};