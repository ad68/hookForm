"use client";
import { useForm, useController } from "react-hook-form";
import MyInput from "./components/MyInput";
import { useEffect } from "react";
export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    console.log("Watched");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch("lastName")]);
  return (
    <>
      <form className="flex flex-col w-[400px] m-12" onSubmit={handleSubmit(onSubmit)}>
        <MyInput register={{ ...register("firstName", { required: true }) }} />
        {errors.firstName && <span className="text-red-400">This field is required</span>}
        <MyInput className="mt-4" register={{ ...register("lastName", { required: true }) }} />
        {errors.lastName && <span className="text-red-400">This field is required</span>}
        <input type="submit" className="mt-4 p-5 rounded-lg bg-red-400 px-3  text-white" />
      </form>
    </>
  );
}
