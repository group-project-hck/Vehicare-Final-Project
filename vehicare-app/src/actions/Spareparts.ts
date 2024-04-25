'use server'

import { cookies } from "next/headers";

// Get List Spareparts
export async function GetSpareparts() {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/spareparts`,
        {
            cache: "no-store",
            headers: {
                'Content-Type': 'application/json',
                Cookie: cookies().toString()
            }
        }
    )
    return await response.json();
    ;
}