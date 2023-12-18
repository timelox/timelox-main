import Image from "next/image";
import Logo from "../../../public/logo.png";
import Upload from "../../../public/upload.png";
import Link from "next/link";

export default function CreateVideo() {
  return (
    <div className="relative bg-pink-400 h-full">
      <Image
        src={Logo}
        alt="Logo white"
        width={250}
        height={150}
        className="mx-auto pt-16"
      />
      <Image
        src={Upload}
        alt="Logo white"
        width={100}
        height={70}
        className="mx-auto pt-16"
      />

      <div className="flex flex-col gap-4 w-96 mx-auto mt-6">
        <label htmlFor="message" className="text-lg text-white">
          <strong>Message</strong> (Optional)
        </label>
        <textarea
          id="message"
          placeholder="Write a personalized message that will
appear when
the message is opened."
          className="rounded-xl px-8 py-8"
        />
      </div>

      <div className="w-fit mx-auto flex flex-col gap-6 mt-8">
        <Link
          href="/date"
          className="bg-blue-800 rounded-full w-56 px-4 py-2 text-white"
        >
          Continue
        </Link>
        <button className="bg-white rounded-full w-56 px-4 py-2 text-black">
          Cancel
        </button>
      </div>
    </div>
  );
}
