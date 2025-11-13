"use client";

import { login } from "@/lib/actions/auth";

export const SignInButton = () => {
  return (
    <div>
      <p> You are not signed in</p>
      <button onClick={() => login()}> Sign In With Github</button>
    </div>
  );
};
