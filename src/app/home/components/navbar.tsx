import Link from "next/link";
import { Home, MessageSquare, Mail, UserRound } from "lucide-react";

const Tabs = [
  {
    name: "Home",
    path: "/home",
    icon: Home,
  },
  {
    name: "Inbox",
    path: "/home/inbox",
    icon: MessageSquare,
  },
  {
    name: "Messages",
    path: "/home/messages",
    icon: Mail,
  },
  {
    name: "Profile",
    path: "/home/profile",
    icon: UserRound,
  },
];

function Navbar() {
  return (
    <div className="flex flex-row items-center gap-2 justify-between px-12 py-4 bg-white">
      {Tabs.map((tab) => (
        <Link key={tab.name} href={tab.path}>
          <tab.icon className={`w-8 h-8`} />
        </Link>
      ))}
    </div>
  );
}

export default Navbar;
