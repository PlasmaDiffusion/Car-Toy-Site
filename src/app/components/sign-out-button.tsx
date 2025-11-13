"use client";

import { logout } from "@/lib/actions/auth";

export const SignOutButton = () => {
  return (
    <div>
      <button onClick={() => logout()}> Sign Out</button>
    </div>
  );
};
