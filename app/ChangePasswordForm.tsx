"use client";

import { useFormState } from "react-dom";
import { changePassword } from "./lib/mock-db";

export default function ChangePasswordForm() {
  const initialState = { message: "" };
  const [state, changePasswordDispatch] = useFormState(
    changePassword,
    initialState
  );

  return (
    <div>
      <h2 className="text-xl">New Password Form</h2>
      <form action={changePasswordDispatch}>
        <div className="mt-2">
          <div>
            <label className="mt-2 mr-2">Username</label>
          </div>
          <div>
            <input type="text" name="username" id="username"></input>
          </div>
        </div>
        <div className="mt-2">
          <div>
            <label className="mt-2 mr-2">New Password</label>
          </div>
          <div>
            <input type="password" name="newPassword" id="newPassword"></input>
          </div>
        </div>

        <p>{state.message}</p>
        <div className="flex">
          <button className="mt-2 mx-auto border-2 border-black rounded-md">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
