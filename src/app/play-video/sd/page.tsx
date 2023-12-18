import Image from "next/image";
import Logo from "../../../../public/logo.png";
import SDImage from "../../../../public/sd.png";
import DollarCredit from "../../../../public/2-dollar-credit.png";
import Triangle from "../../../../public/sd-triangle-1.png";

export default function SD() {
  return (
    <div className="relative bg-pink-400 h-full">
      <Image
        src={Triangle}
        alt="Logo white"
        width={100}
        height={100}
        objectFit="contain"
        className="absolute top-1 left-1"
      />
      <Image
        src={Logo}
        alt="Logo white"
        width={250}
        height={150}
        className="mx-auto pt-16"
      />
      <Image
        src={SDImage}
        alt="Logo white"
        width={80}
        height={80}
        className="ml-8 mt-8"
      />
      <Image
        src={DollarCredit}
        alt="Logo white"
        width={250}
        height={150}
        className="ml-8"
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
        <button className="bg-blue-800 rounded-full w-56 px-4 py-2 text-white">
          Continue
        </button>
        <button className="bg-white rounded-full w-56 px-4 py-2 text-black">
          Cancel
        </button>
      </div>
      <Image
        src={Triangle}
        alt="Logo white"
        width={150}
        height={150}
        objectFit="contain"
        className="absolute -bottom-14 -right-2"
      />
    </div>
  );
}
