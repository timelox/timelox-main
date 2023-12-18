import Image from "next/image";

import VideoThumbnail from "../../../../public/signup-video-thumbnail.png";
import Wow from "../../../../public/wow.png";
import Rectangle from "../../../../public/rectangle14.png";
import Link from "next/link";

function SignUp() {
  return (
    <div className="relative bg-purple-700 flex flex-col items-stretch pt-12 h-full">
      <div className="w-fit mx-auto mt-8">
        <h1 className="text-white text-left text-6xl whitespace-nowrap">
          ready <strong>To</strong>
        </h1>
        <h1 className="text-white text-left text-6xl">time-travel?</h1>
      </div>

      <div className="relative z-50 w-fit mx-auto mt-8">
        <Image
          src={Wow}
          alt="Wow"
          width={150}
          height={150}
          className="absolute top-5 -right-12"
        />
        <Image
          loading="lazy"
          src={VideoThumbnail}
          alt="Video thumbnail"
          objectFit="contain"
          width={300}
          height={400}
        />
      </div>
      <Image
        className="absolute z-0 bottom-0 left-0 w-full max-h-96"
        loading="lazy"
        src={Rectangle}
        alt="Bottom rectangle"
        width={300}
        height={400}
      />

      <Link
        href="/auth/create-account"
        className="z-50 mt-16 text-purple-700 text-3xl font-bold whitespace-nowrap border shadow-sm bg-white w-72 mx-auto justify-center items-center px-16 py-3.5 rounded-[100px] border-solid border-black"
      >
        Sign up
      </Link>
    </div>
  );
}

export default SignUp;
