import Link from "next/link";
import Image from "next/image";
import SendTimeloxButton from "../../../public/send-timelox-button.png";
import CreditCard from "../../../public/credit-card.png";

export default function Home() {
  return (
    <div className="">
      <Link href="/send-timelox">
        <Image
          className="mx-auto"
          src={SendTimeloxButton}
          alt="Send timelox illustration"
          width={300}
          height={300}
          objectFit="contain"
        />
      </Link>

      <div className="mt-8 flex flex-col gap-4 justify-center mx-auto w-72">
        <Link
          href="/explainer"
          className="py-4 px-8 border bottom-1 border-black rounded-full font-bold bg-white text-center"
        >
          How To Send A Timelox
        </Link>
        <Link
          href="/send-timelox"
          className="py-4 px-8 border bottom-1 border-black rounded-full font-bold bg-white text-center"
        >
          How To Gain Free Credits
        </Link>
      </div>
      <Image
        className="mx-auto mt-8"
        src={CreditCard}
        alt="Credit card illustration"
        width={350}
        height={350}
        objectFit="contain"
      />
    </div>
  );
}
