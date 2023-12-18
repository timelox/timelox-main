import Image from "next/image";
import SideVector from "../../../public/Vector.png";
import Select from "../../../public/select.png";
import Package1 from "../../../public/2-package.png";
import Package2 from "../../../public/4-package.png";
import Package3 from "../../../public/5-package.png";
import Link from "next/link";

export default function UpdatedComponent() {
  return (
    <div className="relative h-full">
      <Image
        src={SideVector}
        alt="Side vector"
        width={300}
        height={800}
        objectFit="contain"
        className="absolute top-0 right-0 bottom-0 h-full"
      />
      <Image
        src={Select}
        alt="Side vector"
        width={200}
        height={100}
        objectFit="contain"
        className="ml-12 pt-4"
      />

      <div className="flex flex-col gap-0 mx-auto w-fit">
        <Link href="/">
          <Image
            src={Package1}
            alt="Side vector"
            width={400}
            height={200}
            objectFit="contain"
          />
        </Link>

        <Link href="/" className="z-50">
          <Image
            src={Package2}
            alt="Side vector"
            width={400}
            height={200}
            objectFit="contain"
          />
        </Link>
        <Link href="/" className="z-50">
          <Image
            src={Package3}
            alt="Side vector"
            width={400}
            height={200}
            objectFit="contain"
          />
        </Link>
      </div>
    </div>
  );
}
