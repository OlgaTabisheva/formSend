"use client";
import Form from "next/form";
import { createForm } from "../actions/createFormAction";

export default function Home() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const name = formData.get("name") as string;
      const number = formData.get("number") as any;

      await createForm(name, number);
    } catch (error: any) {
      console.log(error, "error");
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center  p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <h2>Форма:</h2>
        <form onSubmit={handleSubmit} className=" flex flex-col">
          <label className=" m-1">Введите ваше имя</label>
          <input
            className=" bg-gray-300"
            type="name"
            name="name"
            placeholder="name"
            required
          ></input>
          <label className=" m-1">Введите любое число</label>
          <input
            className=" bg-gray-300"
            type="number"
            name="number"
            placeholder="number"
            required
          ></input>
          <button type="submit" className="m-6 bg-gray-300">
            Отправить форму
          </button>
        </form>
      </main>
    </div>
  );
}
