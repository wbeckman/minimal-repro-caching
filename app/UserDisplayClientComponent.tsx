"use client";

import { useFormState } from "react-dom";
import { getUserData } from "./lib/util";

export default function UserDisplayClientComponent() {
  const initialState = { username: "", password: "" };
  const [state, dispatch] = useFormState(getUserData, initialState);
  return (
    <form className="flex-col" action={dispatch}>
      <p>{`User data (client submitting server action): \n\tusername: ${state.username}\n\tpassword: ${state.password}`}</p>
      <div className="flex">
        <button className="mx-auto border-2 border-black rounded-md">
          Get user data
        </button>
      </div>
    </form>
  );
}
