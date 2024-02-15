"use server";

import { SignJWT } from "jose";
import { User, getUserWithUsername } from "@/app/lib/mock-db";


export async function getPasswordResetToken(username: string) {
  const user = await getUserWithUsername(username)
  if (!user){throw new Error}
  const secret = user.password;
  const userToken = new SignJWT({
    username: user.username,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(new TextEncoder().encode(secret));
  return userToken;
}

export async function generateResetLink(previousState: {message: string}, formData: FormData) {
    try{
        const username = formData.get("username")
        return {message: `/${await getPasswordResetToken(username?.toString() || "")}/${username}`}
    }
    catch {
        return {message: "Error generating password reset link"}
    }
}

export async function getUserData(previousState: {password: string, username: string}, formData: FormData) {
    const user = await getUserWithUsername("will")
    console.log("Calling server action from form:")
    console.log(JSON.stringify(user))
    return {username: user?.username || "", password: user?.password || "" }
}
