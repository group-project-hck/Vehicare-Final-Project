'use server'
import { cookies } from "next/headers";

// Get Detail service
export async function DetailService(id: string) {
    let res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/servicebook/${id}`, {
        cache: 'no-store',
        headers: {
            'Content-Type': 'application/json',
            Cookie: cookies().toString()
        }
    })
    const { data } = await res.json()
    return data
}

// Get List Service Books
export default async function GetServices() {
    let res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/user`, {
        cache: 'no-store',
        headers: {
            'Content-Type': 'application/json',
            Cookie: cookies().toString()
        }
    })
    const { data } = await res.json()
    console.log(data)
    return data;
}