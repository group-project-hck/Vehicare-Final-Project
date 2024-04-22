'use server'
import { cookies } from "next/headers";

export default async function GetServices() {
    let res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/user`, {
        cache: 'no-store',
        headers: {
            'Content-Type': 'application/json',
            Cookie: cookies().toString()
        }
    })
    const { data } = await res.json()
    return data;
}