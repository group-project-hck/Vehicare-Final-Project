"use server"
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function HandleLogin(formData: FormData): Promise<Response | void> {
  const rawFormData = {
    username: formData.get("email"),
    password: formData.get("password"),
  };
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/user/login`, {
    cache: "no-store",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(rawFormData),
  });

  const result = await response.json();
  if (!response.ok) {
    return redirect(`/login?error=${result.message}`);
  }
  cookies().set("Authorization", `Bearer ${result.data.token}`);
  redirect("/");
}

export default async function handleLogOut() {
  cookies().delete("Authorization");
  redirect("/login");
}
