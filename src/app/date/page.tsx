import Image from "next/image";
import Top from "../../../public/date-top.png";
import DateText from "../../../public/date.png";
import DatePicker from "../../../public/date-picker.png";

function Date() {
  return (
    <div className="relative bg-violet-50">
      <Image
        src={Top}
        alt="Top abstract"
        width={100}
        height={100}
        className="w-full"
      />
      <Image
        src={DateText}
        alt="Date text"
        width={150}
        height={100}
        className="absolute top-10 left-32"
      />
      <Image
        src={DatePicker}
        alt="Date picker"
        width={300}
        height={300}
        className="absolute top-40 left-16"
      />
      <div className="w-96 mx-auto -mt-44">
        <button className="bg-white text-black border border-black font-semibold py-4 px-16 w-full rounded-full mt-6">
          Time
        </button>
        <button className="bg-blue-800 text-white font-semibold py-4 px-16 w-full rounded-full mt-6">
          Next
        </button>
      </div>
    </div>
  );
}

export default Date;
