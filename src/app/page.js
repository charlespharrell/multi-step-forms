'use client';
import Image from "next/image";
import Form from "@/components/Form";

export default function Home() {
  return (
    <div className="bg-[hsl(206,94%,87%)]
                     w-full min-h-screen
                     items-center
                     justify-center
                     flex">
       <Form/>
    </div>
  );
}
