import Image from "next/image";
import Top from "../../../public/success-top.png";
import SuccessText from "../../../public/success.png";
import SuccessBox from "../../../public/success-box.png";

export default function StripeSuccess() {
  return (
    <div className="relative bg-violet-50 h-full">
      <Image src={Top} alt="Top" width={100} height={100} className="w-full" />
      <Image
        src={SuccessText}
        alt="Text"
        width={400}
        height={300}
        className="absolute top-20 left-8"
      />
      <Image
        src={SuccessBox}
        alt="Message box"
        width={400}
        height={400}
        className="absolute top-44 left-2"
      />
      <div className="bg-purple-600 w-fit mx-auto rounded-full py-4 px-16 mt-32">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a8113c361a716e10b48c4a1deb1af510266f332dbe9ccb11bce540b059d3535?apiKey=a9e210de0ede48479f065d558e6a4bec&"
          className="aspect-[1.13] object-contain object-center w-[53px] overflow-hidden mx-auto"
        />
      </div>
    </div>
  );
}
