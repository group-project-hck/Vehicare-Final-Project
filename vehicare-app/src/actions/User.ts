'use server'
import { cookies } from "next/headers";
import { redirect } from "next/navigation"

// Register Action
export async function HandleRegister(formData: FormData): Promise<Response | void> {
  const newUser = {
    name: formData.get("name"),
    username: formData.get("username"),
    phoneNumber: formData.get("phoneNumber"),
    email: formData.get("email"),
    password: formData.get("password")
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/user/register`, {
    cache: "no-store",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });

  const result = await response.json();
  if (!response.ok) {
    return redirect(`/register?error=${result.message}`);
  }

  redirect("/login")
}

// Login Action
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

// Logout Action
export default async function handleLogOut() {
  cookies().delete("Authorization");
  cookies().delete("next-auth.session-token");
  cookies().delete("next-auth.callback-url");
  redirect("/login");
}
