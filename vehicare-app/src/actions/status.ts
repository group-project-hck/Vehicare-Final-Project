"use server";
import { cookies } from "next/headers";

export async function AddStatus(id: string): Promise<Response | void> {
  let req = {
    id,
  };
  let res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/status`, {
    cache: "no-store",
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookies().toString(),
    },
    body: JSON.stringify(req),
  });
  const { data } = await res.json();
  return data;
}
export async function changeGatcha(
  id: string,
  coin: number
): Promise<Response | void> {
  let res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/status/${id}`, {
    cache: "no-store",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookies().toString(),
    },
    body: JSON.stringify(coin),
  });
  const { data } = await res.json();
  return data;
}
