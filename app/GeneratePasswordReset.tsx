"use client";

import { useFormState } from "react-dom";
import { generateResetLink } from "./lib/util";
import Link from "next/link";

export default function GeneratePasswordReset() {
  const initialState = { message: "" };
  const [state, dispatch] = useFormState(generateResetLink, initialState);
  return (
    <>
      <div className="max-width-96">
        <form action={dispatch}>
          <div>
            <label>Username</label>
          </div>
          <div>
            <input type="text" id="username" name="username" />
          </div>
          <button
            className="mt-2 mx-auto border-2 border-black rounded-md"
            type="submit"
          >
            Generate password reset link
          </button>
        </form>
      </div>
      <div>
        {state.message.includes("Error") || state.message == "" ? (
          <p>{state.message}</p>
        ) : (
          <Link className="text-blue-600" href={state.message}>
            Click here to change password
          </Link>
        )}
      </div>
    </>
  );
}
