"use server";
import { cookies } from "next/headers";

// Get Detail service
export async function DetailService(id: string) {
  let res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/servicebook/${id}`,
    {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookies().toString(),
      },
    }
  );
  const { data } = await res.json();
  return data;
}

// Get List Service Books
export default async function GetServices() {
  let res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/user`, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookies().toString(),
    },
  });
  const { data } = await res.json();
  return data;
}
export async function AddServiceBook(rawFormData: {
  serviceName: string;
  VehicleId: string;
  SparepartId: string[];
  servicePrice: number;
}): Promise<Response | void> {
    console.log(rawFormData, "<<<");
    
  let res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/servicebook`, {
    cache: "no-store",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookies().toString(),
    },
    body: JSON.stringify(rawFormData),
  });
  const { data } = await res.json();
  return data;
}
