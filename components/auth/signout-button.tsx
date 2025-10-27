import { FC } from "react";
import { signOutAction } from "@/actions/auth";

interface SignoutButtonProps {}

export const SignoutButton: FC<SignoutButtonProps> = () => {
  return (
    <form action={signOutAction}>
      <button type="submit">Sign Out</button>
    </form>
  );
};
