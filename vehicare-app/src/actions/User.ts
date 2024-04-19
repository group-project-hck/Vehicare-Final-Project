'use server'
import { redirect } from "next/navigation"

export default async function Register(formData: FormData) {
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