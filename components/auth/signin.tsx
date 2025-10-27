import { FC } from "react";
import { Signin as SigninForm } from "@/forms/auth";

interface SigninProps {}

export const Signin: FC<SigninProps> = () => {
  return (
    <section className="px-4 w-full">
      <div className="max-w-7xl mx-auto w-full">
        <SigninForm />
      </div>
    </section>
  );
};
