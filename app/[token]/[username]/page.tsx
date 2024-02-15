import ChangePasswordForm from "@/app/ChangePasswordForm";
import { getUserWithUsername } from "@/app/lib/mock-db";
import { jwtVerify } from "jose";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: { token: string; username: string };
}) {
  const user = await getUserWithUsername(params.username);
  if (!user) {
    notFound();
  }
  try {
    const decodedPayload = await jwtVerify(
      params.token,
      new TextEncoder().encode(user.password)
    );
    if (decodedPayload.payload.username !== user.username) {
      notFound();
    }
  } catch {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ChangePasswordForm />
    </main>
  );
}
