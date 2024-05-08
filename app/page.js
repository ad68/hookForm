"use client";
import { useForm } from "react-hook-form";
import MyInput from "./components/MyInput";
import { useState } from "react";
export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("exampleRequired")); // watch input value by passing the name of it

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input className="border" defaultValue="test" {...register("example")} />
        <MyInput defaultValue="ali" register={{ ...register("exampleRequired", { required: true }) }} />
        {/* include validation with required or other standard HTML validation rules */}
        {/*   <input className="border" {...register("exampleRequired", { required: true })} /> */}
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span className="text-red-400">This field is required</span>}

        <input type="submit" className="ml-2 bg-red-400 px-3 rounded-sm text-white" />
      </form>
    </>
  );
}
