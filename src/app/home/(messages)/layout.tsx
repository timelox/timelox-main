"use client";
import Image from "next/image";
import Link from "next/link";
import TimeloxBlackLogo from "../../../../public/logo-black.png";
import TimeloxWhiteLogo from "../../../../public/logo.png";
import { usePathname } from "next/navigation";

function MessagesLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const isInboxActive = path.includes("/inbox");
  return (
    <div>
      <div className="bg-white rounded-full border border-black flex flex-row items-center justify-center w-fit mx-auto mb-8 mt-8">
        <Link
          href="/home/inbox"
          className={`px-12 py-2 rounded-full text-black text-lg font-bold ${
            isInboxActive && "bg-blue-800 text-white"
          }`}
        >
          Inbox
        </Link>
        <Link
          href="/home/timelox"
          className={`px-4 py-2 rounded-full ${
            !isInboxActive && "bg-blue-800"
          }`}
        >
          <Image
            src={isInboxActive ? TimeloxBlackLogo : TimeloxWhiteLogo}
            alt="Timelox logo black"
            width={90}
            height={50}
            objectFit="contain"
          />
        </Link>
      </div>
      {children}
    </div>
  );
}

export default MessagesLayout;
