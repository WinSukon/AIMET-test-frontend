"use client"
import startSession from "@/libs/startSession";
import { useEffect } from "react";
export default function Home() {
  useEffect(()=>{
    const start = async ()=>{
      const res = await startSession();
    }
    start()

  })
  return (
    <main>
      <div>hello</div>
    </main>
  );
}
