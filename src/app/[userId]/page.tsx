import React from "react";

export default function ChatComponent() {
  return (
    <div className="bg-indigo-50 flex max-w-[480px] w-full flex-col mx-auto">
      <header className="bg-purple-700 self-stretch flex items-stretch gap-3 pl-6 pr-20 py-3.5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/20b9fc9729a7e5e01ebdcf5f9f1e6adc0d9d33fb0f6b6cb1fc002278d4f06d31?apiKey=a9e210de0ede48479f065d558e6a4bec&"
          className="aspect-[1.92] object-contain object-center w-[23px] stroke-[2px] stroke-white overflow-hidden self-center shrink-0 max-w-full my-auto"
          alt="Logo"
        />
        <div className="flex aspect-square flex-col justify-center items-center p-0.5 rounded-[50%]">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6dfeff0995ccfcf708a9ae256fa7ee6f939435ccd66c0c8e0c994fb7825571da?apiKey=a9e210de0ede48479f065d558e6a4bec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6dfeff0995ccfcf708a9ae256fa7ee6f939435ccd66c0c8e0c994fb7825571da?apiKey=a9e210de0ede48479f065d558e6a4bec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6dfeff0995ccfcf708a9ae256fa7ee6f939435ccd66c0c8e0c994fb7825571da?apiKey=a9e210de0ede48479f065d558e6a4bec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6dfeff0995ccfcf708a9ae256fa7ee6f939435ccd66c0c8e0c994fb7825571da?apiKey=a9e210de0ede48479f065d558e6a4bec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6dfeff0995ccfcf708a9ae256fa7ee6f939435ccd66c0c8e0c994fb7825571da?apiKey=a9e210de0ede48479f065d558e6a4bec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6dfeff0995ccfcf708a9ae256fa7ee6f939435ccd66c0c8e0c994fb7825571da?apiKey=a9e210de0ede48479f065d558e6a4bec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6dfeff0995ccfcf708a9ae256fa7ee6f939435ccd66c0c8e0c994fb7825571da?apiKey=a9e210de0ede48479f065d558e6a4bec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6dfeff0995ccfcf708a9ae256fa7ee6f939435ccd66c0c8e0c994fb7825571da?apiKey=a9e210de0ede48479f065d558e6a4bec&"
            className="aspect-square object-contain object-center w-[42px] overflow-hidden rounded-[50%]"
            alt="Profile"
          />
        </div>
        <div className="text-white text-base font-semibold capitalize self-center grow whitespace-nowrap my-auto">
          Marvin mckinney
        </div>
      </header>
      <div className="flex-col overflow-hidden relative flex aspect-[5.384615384615385] gap-1.5 mr-6 mt-[495px] pl-7 pr-20 py-5 self-end items-start">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8856d7729f52cd93b2f179c97ec0a20773b13adc532332db1f8a2d3e29636ec9?apiKey=a9e210de0ede48479f065d558e6a4bec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8856d7729f52cd93b2f179c97ec0a20773b13adc532332db1f8a2d3e29636ec9?apiKey=a9e210de0ede48479f065d558e6a4bec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8856d7729f52cd93b2f179c97ec0a20773b13adc532332db1f8a2d3e29636ec9?apiKey=a9e210de0ede48479f065d558e6a4bec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8856d7729f52cd93b2f179c97ec0a20773b13adc532332db1f8a2d3e29636ec9?apiKey=a9e210de0ede48479f065d558e6a4bec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8856d7729f52cd93b2f179c97ec0a20773b13adc532332db1f8a2d3e29636ec9?apiKey=a9e210de0ede48479f065d558e6a4bec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8856d7729f52cd93b2f179c97ec0a20773b13adc532332db1f8a2d3e29636ec9?apiKey=a9e210de0ede48479f065d558e6a4bec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8856d7729f52cd93b2f179c97ec0a20773b13adc532332db1f8a2d3e29636ec9?apiKey=a9e210de0ede48479f065d558e6a4bec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8856d7729f52cd93b2f179c97ec0a20773b13adc532332db1f8a2d3e29636ec9?apiKey=a9e210de0ede48479f065d558e6a4bec&"
          className="absolute h-full w-full object-cover object-center inset-0"
          alt="Background"
        />
        <div className="relative text-white text-xs font-medium capitalize grow whitespace-nowrap">
          Just wait until it unlocks{" "}
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6571f71981dedeb12bfd938c3832fd7990521724fbc51d0a2854aa833491f495?apiKey=a9e210de0ede48479f065d558e6a4bec&"
          className="aspect-square object-contain object-center w-[13px] fill-red-600 overflow-hidden self-stretch shrink-0 max-w-full"
          alt="Icon"
        />
      </div>
      <div className="self-stretch flex w-full flex-col items-center mt-1.5 px-6">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/36be07d2-d555-4c88-a386-e5cf4878044f?apiKey=a9e210de0ede48479f065d558e6a4bec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/36be07d2-d555-4c88-a386-e5cf4878044f?apiKey=a9e210de0ede48479f065d558e6a4bec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/36be07d2-d555-4c88-a386-e5cf4878044f?apiKey=a9e210de0ede48479f065d558e6a4bec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/36be07d2-d555-4c88-a386-e5cf4878044f?apiKey=a9e210de0ede48479f065d558e6a4bec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/36be07d2-d555-4c88-a386-e5cf4878044f?apiKey=a9e210de0ede48479f065d558e6a4bec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/36be07d2-d555-4c88-a386-e5cf4878044f?apiKey=a9e210de0ede48479f065d558e6a4bec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/36be07d2-d555-4c88-a386-e5cf4878044f?apiKey=a9e210de0ede48479f065d558e6a4bec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/36be07d2-d555-4c88-a386-e5cf4878044f?apiKey=a9e210de0ede48479f065d558e6a4bec&"
          className="aspect-[6.21] object-contain object-center w-[323px] overflow-hidden ml-0 max-w-[323px]"
          alt="Image"
        />
        <div className="flex-col text-white text-xs font-medium capitalize relative whitespace-nowrap overflow-hidden aspect-[5.384615384615385] w-[280px] max-w-full justify-center mt-1.5 pl-7 pr-16 py-6 self-end items-start">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8856d7729f52cd93b2f179c97ec0a20773b13adc532332db1f8a2d3e29636ec9?apiKey=a9e210de0ede48479f065d558e6a4bec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8856d7729f52cd93b2f179c97ec0a20773b13adc532332db1f8a2d3e29636ec9?apiKey=a9e210de0ede48479f065d558e6a4bec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8856d7729f52cd93b2f179c97ec0a20773b13adc532332db1f8a2d3e29636ec9?apiKey=a9e210de0ede48479f065d558e6a4bec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8856d7729f52cd93b2f179c97ec0a20773b13adc532332db1f8a2d3e29636ec9?apiKey=a9e210de0ede48479f065d558e6a4bec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8856d7729f52cd93b2f179c97ec0a20773b13adc532332db1f8a2d3e29636ec9?apiKey=a9e210de0ede48479f065d558e6a4bec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8856d7729f52cd93b2f179c97ec0a20773b13adc532332db1f8a2d3e29636ec9?apiKey=a9e210de0ede48479f065d558e6a4bec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8856d7729f52cd93b2f179c97ec0a20773b13adc532332db1f8a2d3e29636ec9?apiKey=a9e210de0ede48479f065d558e6a4bec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8856d7729f52cd93b2f179c97ec0a20773b13adc532332db1f8a2d3e29636ec9?apiKey=a9e210de0ede48479f065d558e6a4bec&"
            className="absolute h-full w-full object-cover object-center inset-0"
            alt="Background"
          />
          Just wait until it unlocks{" "}
        </div>
      </div>
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9d5c08a4-b016-45a0-a099-abc016a1a86f?apiKey=a9e210de0ede48479f065d558e6a4bec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d5c08a4-b016-45a0-a099-abc016a1a86f?apiKey=a9e210de0ede48479f065d558e6a4bec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d5c08a4-b016-45a0-a099-abc016a1a86f?apiKey=a9e210de0ede48479f065d558e6a4bec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d5c08a4-b016-45a0-a099-abc016a1a86f?apiKey=a9e210de0ede48479f065d558e6a4bec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d5c08a4-b016-45a0-a099-abc016a1a86f?apiKey=a9e210de0ede48479f065d558e6a4bec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d5c08a4-b016-45a0-a099-abc016a1a86f?apiKey=a9e210de0ede48479f065d558e6a4bec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d5c08a4-b016-45a0-a099-abc016a1a86f?apiKey=a9e210de0ede48479f065d558e6a4bec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d5c08a4-b016-45a0-a099-abc016a1a86f?apiKey=a9e210de0ede48479f065d558e6a4bec&"
        className="aspect-[3.51] object-contain object-center w-[323px] overflow-hidden self-center ml-0 max-w-[323px] mt-2.5"
        alt="Image"
      />
      <form className="bg-white self-stretch flex w-full items-stretch gap-2 mt-7 px-6 py-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d159ef490b819559bb1b25e7d81c50160ba1db0b4490fc3c3797cb581f8cfc4?apiKey=a9e210de0ede48479f065d558e6a4bec&"
          className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
          alt="Icon"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbe72d014bac29929a6c34ef9568ad35bc0dc16b0ddffc29d4cbea47531414b2?apiKey=a9e210de0ede48479f065d558e6a4bec&"
          className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
          alt="Icon"
        />
        <div className="text-zinc-900 text-opacity-30 text-xs capitalize whitespace-nowrap bg-indigo-50 grow justify-center pl-4 pr-16 py-2.5 rounded-[100px] items-start">
          <label htmlFor="message">Type your message...</label>
          <input
            type="text"
            id="message"
            aria-label="Type your message"
            aria-role="textbox"
          />
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c1e0cf0bc48af7051a574f572cd6fb4cef8bd59f70adcea77c0e8bc042749c9?apiKey=a9e210de0ede48479f065d558e6a4bec&"
          className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
          alt="Icon"
        />
      </form>
    </div>
  );
}
