export default function CreditNotification() {
  return (
    <form className="bg-indigo-800 flex max-w-[480px] w-full flex-col items-stretch mx-auto pr-4 pt-12 pb-4">
      <header className="text-white text-center text-6xl self-center max-w-[343px] mt-72">
        you have just
      </header>
      <header className="text-white text-center text-6xl self-center w-[327px] mt-2">
        received
      </header>
      <div className="mt-6">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[15%] max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ecdf97f1076e5bf2e28eb7a0cd3189797f3db8c2dd0ca6c33928c61fe214f47?apiKey=a9e210de0ede48479f065d558e6a4bec&"
              className="aspect-[0.26] object-contain object-center w-[62px] fill-pink-300 overflow-hidden shrink-0 max-w-full my-auto"
              alt="credit icon"
            />
          </div>
          <div className="flex flex-col items-stretch w-[85%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch">
              <div className="text-pink-300 text-center text-9xl font-bold tracking-tighter z-[1] whitespace-nowrap">
                FREE
              </div>
              <div className="text-sky-400 text-center text-9xl font-bold tracking-tighter whitespace-nowrap">
                FREE
              </div>
              <div className="flex flex-col mt-4 pl-20 items-start">
                <div className="text-white text-center text-7xl w-[327px] ml-14">
                  credits!
                </div>
                <button
                  className="text-indigo-800 text-center text-3xl font-bold bg-white self-stretch justify-center items-center mt-24 px-16 py-5 rounded-[49.097px]"
                  type="submit"
                >
                  OK
                </button>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3035a584b74fa0410199ee98c6f9d41e32f9371d9b42779449e0abf1ed512d9?apiKey=a9e210de0ede48479f065d558e6a4bec&"
                  className="aspect-[0.99] object-contain object-center w-[87px] fill-pink-300 overflow-hidden max-w-full mt-7 self-end"
                  alt="credit icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
