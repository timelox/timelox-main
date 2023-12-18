import Image from "next/image";
import Avatar from "../../../../../public/avatar.png";
import Link from "next/link";

function Inbox() {
  return (
    <div className="w-fit mx-auto flex flex-col gap-4">
      <Link
        className="flex flex-row items-center gap-4 bg-white rounded-full py-2 pl-2 pr-32 w-fit shadow-sm"
        href="/1"
      >
        <Image
          src={Avatar}
          alt="User profile image"
          width={60}
          height={60}
          objectFit="contain"
        />
        <h3 className="text-lg text-gray-500 font-bold">Marvin mckinney</h3>
      </Link>
      <div className="flex flex-row items-center gap-4 bg-white rounded-full py-2 pl-2 pr-32 w-fit shadow-sm">
        <Image
          src={Avatar}
          alt="User profile image"
          width={60}
          height={60}
          objectFit="contain"
        />
        <h3 className="text-lg text-gray-500 font-bold">Marvin mckinney</h3>
      </div>
      <div className="flex flex-row items-center gap-4 bg-white rounded-full py-2 pl-2 pr-32 w-fit shadow-sm">
        <Image
          src={Avatar}
          alt="User profile image"
          width={60}
          height={60}
          objectFit="contain"
        />
        <h3 className="text-lg text-gray-500 font-bold">Marvin mckinney</h3>
      </div>
      <div className="flex flex-row items-center gap-4 bg-white rounded-full py-2 pl-2 pr-32 w-fit shadow-sm">
        <Image
          src={Avatar}
          alt="User profile image"
          width={60}
          height={60}
          objectFit="contain"
        />
        <h3 className="text-lg text-gray-500 font-bold">Marvin mckinney</h3>
      </div>
    </div>
  );
}

export default Inbox;
