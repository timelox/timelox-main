import Image from "next/image";
import Navbar from "./components/navbar";
import HomeLayoutTop from "../../../public/home-layout-top.png";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative h-full">
      <Image
        src={HomeLayoutTop}
        alt="Abstract Illustration"
        width={500}
        height={200}
        className="fixed top-0 left-0 right-0 w-full max-h-52"
      />
      <main className="pt-52 pb-10 bg-violet-50 min-h-full">{children}</main>;
      <div className="fixed left-0 right-0 bottom-0">
        <Navbar />
      </div>
    </div>
  );
}
