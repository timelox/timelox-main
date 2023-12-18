import React from "react";

export default function MyUpdatedComponent() {
  return (
    <form className="bg-indigo-800 flex max-w-[480px] w-full flex-col mx-auto pb-4">
      <header className="flex w-full flex-col pl-20">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b88acb46fc15d3a259c439bdf5d6e9b48c43b2f30f5f8d1bdb47541d52d4c0f?apiKey=a9e210de0ede48479f065d558e6a4bec&"
          className="aspect-[2.01] object-contain object-center w-[177px] fill-pink-300 overflow-hidden max-w-full self-end"
          alt=""
        />
        <h1 className="text-white text-center text-7xl max-w-[272px] mt-60">
          timelox
        </h1>
        <h2 className="text-sky-400 text-center text-9xl font-bold tracking-tighter max-w-[370px]">
          sent
        </h2>
        <button
          className="text-indigo-800 text-center text-3xl font-bold bg-white w-[200px] mx-auto justify-center items-center mt-14 px-16 py-5 rounded-[49.097px]"
          aria-label="OK"
          role="button"
        >
          OK
        </button>
      </header>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3035a584b74fa0410199ee98c6f9d41e32f9371d9b42779449e0abf1ed512d9?apiKey=a9e210de0ede48479f065d558e6a4bec&"
        className="aspect-[0.99] object-contain object-center w-[87px] fill-pink-300 overflow-hidden max-w-full ml-4 mt-56 self-start"
        alt=""
      />
    </form>
  );
}
