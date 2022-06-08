import React from "react";
import Link from "next/link";
import SignupForm from "../../sections/auth/signupForm";
import Logo from "../../assets/Logo";

const Singup = () => {
  return (
    <div className="bg-gray-100">
      <section className="container mx-auto min-h-screen flex-col flex align-center justify-center">
        <div className="lg:min-w-[25%] min-w-[50%] mx-auto bg-white shadow-md rounded-md pt-[2.5rem] my-8">
          <div className="flex flex-col align-center justify-center lg:px-4 px-6 pb-4 text-center">
            <Logo />
            <h2 class="mt-6 mx-auto w-full md:w-[70%] text-center text-3xl font-extrabold text-gray-900">
              Create your account
            </h2>
            <p class="mt-2 text-center text-sm text-gray-600">
              Enjoy the taste in your area
            </p>
          </div>

          <SignupForm />

          <div className="flex align-center justify-center  mx-auto w-full bg-gray-200 py-6">
            <Link href="/auth/login" class="text-center text-sm">
              <span className="text-blue-600 cursor-pointer">
                Already have an account?
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Singup;
