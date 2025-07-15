import React from "react";
export default function Form({
  onSubmit,
  firebaseError,
  login,
  register,
  errors,
  handleSubmit,
}) {
  return (
    <div>
      <form
        className="flex flex-col gap-3 w-[300px] border-1 border-red-500 p-5 rounded-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-red-500 text-3xl font-semibold text-center mb-5">
          {login} Form
        </h2>
        <div className="flex flex-col items-center relative">
          <input
            type="email"
            className="border-1 border-gray-400 py-2 px-4 rounded-md w-full"
            placeholder="Enter you email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-sm text-red-500 ">Email is required</span>
          )}
        </div>

        <div className=" flex flex-col items-center relative">
          <input
            type="password"
            className="border-1 border-gray-400 py-2 px-4 rounded-md w-full"
            placeholder="Enter your password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-sm text-red-500">Password is required</span>
          )}
        </div>

        <input
          className="bg-red-500 text-white py-2 px-4 rounded-md cursor-pointer"
          type="submit"
          value={login}
        />
        <span className="text-sm text-red-500">{firebaseError}</span>
      </form>
    </div>
  );
}
