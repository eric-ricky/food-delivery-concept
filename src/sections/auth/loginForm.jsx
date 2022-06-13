import React, { useContext } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../../context/authContext";

const LoginForm = () => {
  const { onLogin } = useContext(AuthContext);
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();

    onLogin({
      email: "james@gmail.com",
      username: "James Kyalo",
    });

    router.push(router.query.returnUrl || "/");
  };
  return (
    <div class="w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 pb-6">
      <form class="mt-8 space-y-6" onSubmit={handleSubmit}>
        {/* <input type="hidden" name="remember" value="true" /> */}
        <div class="grid grid-cols-6 gap-5">
          <div class="col-span-6">
            <label
              for="email-address"
              class="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              type="text"
              name="email-address"
              id="email-address"
              autoComplete="email"
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>

          <div class="col-span-6">
            <label
              for="street-address"
              class="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              class="appearance-none mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="Password"
            />
          </div>
        </div>

        <div class="flex items-center justify-between gap-4">
          <div class="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label for="remember-me" class="ml-1 block text-sm text-gray-900">
              {" "}
              Remember me{" "}
            </label>
          </div>

          <div class="text-sm">
            <a
              href="#"
              class="font-medium text-indigo-600 hover:text-indigo-500"
            >
              {" "}
              Forgot password?{" "}
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              {/* <!-- Heroicon name: solid/lock-closed --> */}
              <svg
                class="h-5 w-5 text-orange-500 group-hover:text-orange-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
