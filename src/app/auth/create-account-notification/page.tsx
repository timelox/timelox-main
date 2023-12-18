import * as React from "react";

function NotificationComponent() {
  return (
    <form className="bg-indigo-800 flex flex-col items-stretch pt-6">
      <header className="flex w-full flex-col px-11">
        <div className="flex w-[280px] max-w-full justify-between gap-5 self-end items-end">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/183a41db555115a80e0826bd33380a787c92bd2abd8e8f7b37d54ccc6445f4ff?apiKey=a9e210de0ede48479f065d558e6a4bec&"
            className="aspect-[1.05] object-contain object-center w-full overflow-hidden shrink-0 flex-1 mt-12"
            alt="Notification Image 1"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/80dd30c47ba70769433ccc26c0c34f1237a000e947a285ce33c4d0953f0302ec?apiKey=a9e210de0ede48479f065d558e6a4bec&"
            className="aspect-[1.07] object-contain object-center w-full overflow-hidden shrink-0 flex-1"
            alt="Notification Image 2"
          />
        </div>
        <h1 className="text-white text-center text-7xl self-center whitespace-nowrap mt-20">
          enable
        </h1>
        <h2 className="text-white text-center text-6xl font-extrabold self-center w-[246px] mt-3.5">
          PUSH
        </h2>
        <h3 className="text-white text-center text-6xl self-stretch mt-2">
          notifications
        </h3>
      </header>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e65a82d55106a9b15dde15eeab0ede961a7d7d72c48365847a3a877f6c52a62?apiKey=a9e210de0ede48479f065d558e6a4bec&"
        className="aspect-[0.92] object-contain object-center w-full overflow-hidden mt-24"
        alt="Notification Image 3"
      />
    </form>
  );
}

export default NotificationComponent;
