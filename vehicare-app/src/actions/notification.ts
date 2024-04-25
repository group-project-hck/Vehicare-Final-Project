"use server";

import { cookies } from "next/headers";

export async function getNotif() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/notification`,
      {
        cache: "no-store",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookies().toString(),
        },
      }
    );
    const { data } = await response.json();
    return data
  } catch (error) {
    console.log(error);
  }
}
