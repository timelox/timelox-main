import Link from "next/link";
import Image from "next/image";
import Dollar from "../../../../public/dollar.png";
import Avatar from "../../../../public/avatar.png";

function Profile() {
  return (
    <div className="relative">
      <div className="absolute -top-40 left-5 flex flex-row items-baseline gap-4">
        <Image
          src={Avatar}
          alt="Avatar"
          width={150}
          height={150}
          objectFit="contain"
        />
        <h4 className="text-xl font-bold">Nick Van Wilder</h4>
      </div>
      <div className="mt-8 pt-32 flex flex-col gap-4 justify-center mx-auto w-72">
        <Link
          href="/send-timelox"
          className="py-4 px-8 border bottom-1 border-black rounded-full font-bold bg-white text-center"
        >
          Invite Friends
        </Link>
        <Link
          href="/send-timelox"
          className="py-4 px-8 border bottom-1 border-black rounded-full font-bold bg-white text-center"
        >
          Edit Details
        </Link>
      </div>
      <div className="flex flex-row items-center gap-4 w-fit mx-auto mt-16">
        <Link
          href="/send-timelox"
          className="flex flex-row gap-4 items-center w-fit py-2 px-4 border bottom-1 border-black rounded-full font-bold bg-white"
        >
          <Image src={Dollar} alt="Dollar sign" width={30} height={30} /> Add
          Credit
        </Link>
        <Link
          href="/send-timelox"
          className="flex flex-row gap-4 items-center w-fit py-2 px-4 border bottom-1 border-black rounded-full font-bold bg-white"
        >
          <Image src={Dollar} alt="Dollar sign" width={30} height={30} /> Gain
          Credit
        </Link>
      </div>
    </div>
  );
}

export default Profile;
