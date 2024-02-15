import GeneratePasswordReset from "./GeneratePasswordReset";
import UserDisplayClientComponent from "./UserDisplayClientComponent";
import { getUserWithUsername } from "./lib/mock-db";

export default async function Home() {
  const mainUser = await getUserWithUsername("will");
  console.log("User info as given in server component:");
  console.log(JSON.stringify(mainUser));
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div className="flex">
          <div className="mx-auto">
            <GeneratePasswordReset />
          </div>
        </div>
        <div className="flex">
          <p className="mx-auto">{`Main user data (baked into server component): username: ${mainUser?.username} password: ${mainUser?.password}`}</p>
        </div>
        <div className="mx-auto">
          <UserDisplayClientComponent />
        </div>
      </div>
    </main>
  );
}
