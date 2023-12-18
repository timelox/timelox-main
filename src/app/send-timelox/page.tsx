import Image from "next/image";
import Link from "next/link";
import Top from "../../../public/send-timelox-top.png";
import Triangle from "../../../public/send-timelox-triangle.png";
import AddVideo from "../../../public/add-video.png";
import AddPhoto from "../../../public/add-photo.png";
import SendTimeloxImage from "../../../public/send-timelox.png";

function SendTimelox() {
  return (
    <div className="relative bg-cyan-400 h-full w-full">
      <Image
        src={Top}
        alt="Top abstarct"
        width={600}
        height={400}
        objectFit="contain"
        className="w-full"
      />

      <Image
        src={SendTimeloxImage}
        alt="Send Timelox Logo"
        width={350}
        height={200}
        objectFit="contain"
        className="absolute top-5 left-10"
      />

      <div className="relative w-fit mx-auto -mt-32">
        <Image
          src={Triangle}
          alt="Triangle"
          width={400}
          height={400}
          objectFit="contain"
          className="-z-10"
        />
        <div className="absolute top-10 left-10 flex flex-row items-center justify-center gap-16">
          <Link href="/create-video">
            <Image
              src={AddPhoto}
              alt="Add photo"
              width={120}
              height={120}
              objectFit="contain"
              // className="z-0"
            />
          </Link>
          <Link href="/select-package">
            <Image
              src={AddVideo}
              alt="Add video"
              width={120}
              height={120}
              objectFit="contain"
              // className="z-0"
            />
          </Link>
        </div>
      </div>
      <div className="w-96 mx-auto">
        <div className="border bg-white self-stretch flex items-center justify-between gap-5 mt-6 px-5 py-2.5 rounded-[100px] border-solid border-black border-opacity-0">
          <input placeholder="Email Address" />
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/99c8ebdad0bffb55fc23d0680025ee16ef9b4c7fbac06e5c8d75ea530d0d85a6?apiKey=a9e210de0ede48479f065d558e6a4bec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/99c8ebdad0bffb55fc23d0680025ee16ef9b4c7fbac06e5c8d75ea530d0d85a6?apiKey=a9e210de0ede48479f065d558e6a4bec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/99c8ebdad0bffb55fc23d0680025ee16ef9b4c7fbac06e5c8d75ea530d0d85a6?apiKey=a9e210de0ede48479f065d558e6a4bec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/99c8ebdad0bffb55fc23d0680025ee16ef9b4c7fbac06e5c8d75ea530d0d85a6?apiKey=a9e210de0ede48479f065d558e6a4bec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/99c8ebdad0bffb55fc23d0680025ee16ef9b4c7fbac06e5c8d75ea530d0d85a6?apiKey=a9e210de0ede48479f065d558e6a4bec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/99c8ebdad0bffb55fc23d0680025ee16ef9b4c7fbac06e5c8d75ea530d0d85a6?apiKey=a9e210de0ede48479f065d558e6a4bec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/99c8ebdad0bffb55fc23d0680025ee16ef9b4c7fbac06e5c8d75ea530d0d85a6?apiKey=a9e210de0ede48479f065d558e6a4bec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/99c8ebdad0bffb55fc23d0680025ee16ef9b4c7fbac06e5c8d75ea530d0d85a6?apiKey=a9e210de0ede48479f065d558e6a4bec&"
            className="aspect-square object-contain object-center w-[30px] overflow-hidden self-stretch shrink-0 max-w-full"
          />
        </div>
        <div className="border bg-white self-stretch flex items-center justify-between gap-5 mt-6 px-6 py-3.5 rounded-[100px] border-solid border-black border-opacity-0">
          <input placeholder="Phone Number" />
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/eda441455152e72829306081a9501c0808a7e6e84975c8d8981a3486da4f627c?apiKey=a9e210de0ede48479f065d558e6a4bec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/eda441455152e72829306081a9501c0808a7e6e84975c8d8981a3486da4f627c?apiKey=a9e210de0ede48479f065d558e6a4bec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eda441455152e72829306081a9501c0808a7e6e84975c8d8981a3486da4f627c?apiKey=a9e210de0ede48479f065d558e6a4bec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/eda441455152e72829306081a9501c0808a7e6e84975c8d8981a3486da4f627c?apiKey=a9e210de0ede48479f065d558e6a4bec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/eda441455152e72829306081a9501c0808a7e6e84975c8d8981a3486da4f627c?apiKey=a9e210de0ede48479f065d558e6a4bec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eda441455152e72829306081a9501c0808a7e6e84975c8d8981a3486da4f627c?apiKey=a9e210de0ede48479f065d558e6a4bec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/eda441455152e72829306081a9501c0808a7e6e84975c8d8981a3486da4f627c?apiKey=a9e210de0ede48479f065d558e6a4bec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/eda441455152e72829306081a9501c0808a7e6e84975c8d8981a3486da4f627c?apiKey=a9e210de0ede48479f065d558e6a4bec&"
            className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch shrink-0 max-w-full"
          />
        </div>
        <button className="bg-blue-800 text-white font-semibold py-2 px-16 w-full rounded-full mt-6">
          Next
        </button>
      </div>
    </div>
  );
}

export default SendTimelox;
