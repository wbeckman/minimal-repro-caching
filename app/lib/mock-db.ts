"use server";

import { revalidatePath, unstable_noStore } from "next/cache";
import { redirect } from 'next/navigation';

export interface User {
    username: string;
    password: string;
}
  
const users = [
  {
    username: "will",
    password: "Cheese123",
  },
];

export async function getUsers(): Promise<User[]>{
  return users;
}

export async function getUserWithUsername(username: string): Promise<User | undefined> {
  const filteredUsers = users.filter((user) => user.username === username);
  const user = filteredUsers.length > 0 ? filteredUsers[0] : undefined;
  return user
}

export async function changePassword(previousState: {message:string}, formData: FormData) {
  try{
    const username = formData.get("username")
    const newPassword = formData.get("newPassword")
    const user = await getUserWithUsername((username || "").toString())
    if (!user){throw Error;}
    user.password = (newPassword || "").toString();
    revalidatePath("/")
    redirect("/")
  }
  catch{ return {message: "Error changing password."} }
}
