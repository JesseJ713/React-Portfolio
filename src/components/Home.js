import React from "react";
import image from "../austin-texas-v2.jpg";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="Austin cityscape"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-red-100 bg-black bg-opacity-50 font-bold h-48 w-auto shadowlight leading-none lg:leading-snug home-name">
          Hello! I'm Jesse!
        </h1>
      </section>
    </main>
  );
}
