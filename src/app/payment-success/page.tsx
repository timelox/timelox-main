import React from "react";

export default function PaymentSuccess() {
  return (
    <div className="bg-indigo-50 flex max-w-[480px] w-full flex-col items-stretch mx-auto pb-12">
      <header className="header fill-sky-400 overflow-hidden relative flex min-h-[601px] w-full pt-12 pb-4 px-14">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc9a05fe5a3a00c814e8e15fff1ccfde5defb345b0fc2e86a81d8a6433007503?apiKey=a9e210de0ede48479f065d558e6a4bec&"
          className="absolute h-full w-full object-cover object-center inset-0"
        />
        <h1
          className="relative text-white text-center text-5xl self-stretch z-[1] mt-16"
          aria-label="Success!"
        >
          Success!
        </h1>
        <h2
          className="relative text-indigo-800 text-center text-5xl self-stretch"
          aria-label="Success!"
        >
          Success!
        </h2>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/13dfa0e17bc8a704777ab3a3a8d87038e587e42a1c5560a6b34a1f96486aa73a?apiKey=a9e210de0ede48479f065d558e6a4bec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/13dfa0e17bc8a704777ab3a3a8d87038e587e42a1c5560a6b34a1f96486aa73a?apiKey=a9e210de0ede48479f065d558e6a4bec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/13dfa0e17bc8a704777ab3a3a8d87038e587e42a1c5560a6b34a1f96486aa73a?apiKey=a9e210de0ede48479f065d558e6a4bec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/13dfa0e17bc8a704777ab3a3a8d87038e587e42a1c5560a6b34a1f96486aa73a?apiKey=a9e210de0ede48479f065d558e6a4bec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/13dfa0e17bc8a704777ab3a3a8d87038e587e42a1c5560a6b34a1f96486aa73a?apiKey=a9e210de0ede48479f065d558e6a4bec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/13dfa0e17bc8a704777ab3a3a8d87038e587e42a1c5560a6b34a1f96486aa73a?apiKey=a9e210de0ede48479f065d558e6a4bec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/13dfa0e17bc8a704777ab3a3a8d87038e587e42a1c5560a6b34a1f96486aa73a?apiKey=a9e210de0ede48479f065d558e6a4bec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/13dfa0e17bc8a704777ab3a3a8d87038e587e42a1c5560a6b34a1f96486aa73a?apiKey=a9e210de0ede48479f065d558e6a4bec&"
          className="aspect-square object-contain object-center w-[104px] overflow-hidden self-center z-[1] max-w-full mt-14"
        />
        <form className="relative shadow-sm bg-indigo-50 self-stretch flex flex-col items-stretch px-9 py-12 rounded-3xl">
          <label
            htmlFor="transfer-info"
            className="text-black text-base font-semibold capitalize whitespace-nowrap mt-24"
          >
            Transfer money was successful
          </label>
          <div className="text-black text-6xl font-bold self-center whitespace-nowrap mt-5">
            $50.00
          </div>
          <div className="text-black text-base font-medium capitalize self-center whitespace-nowrap mt-5 mb-5">
            you paid
          </div>
        </form>
      </header>
      <a
        href="..."
        className="bg-purple-600 self-center flex w-[156px] max-w-full flex-col justify-center items-center mt-12 mb-28 px-14 py-4 rounded-[100px]"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4799a3d2796efbf6af1de08c7cdbfa607979dc2df06d0975a0adc9ef6d5792de?apiKey=a9e210de0ede48479f065d558e6a4bec&"
          className="aspect-[1.13] object-contain object-center w-full overflow-hidden"
        />
      </a>
    </div>
  );
}
