import { NextResponse } from "next/server";
import React, { useState, FormEvent, useEffect } from "react";

export default function Page() {
    const[data, setData] = useState()
  async function createItem(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    console.log(name)
    setData(name)
   await fetch("/api/submit", {
      method: "POST",
      body: JSON.stringify(name),
    }).then((res) => console.log(res));
  }

  useEffect(()=>{
console.log(data)
  },[data])
  return (
    <form onSubmit={createItem}>
      <input type="text" name="name" />
      <button type="submit">нажми</button>
    </form>
  );
}
