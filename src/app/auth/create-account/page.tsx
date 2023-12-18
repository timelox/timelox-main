import Image from "next/image";
import Facebook from "../../../../public/facebook.png";
import X from "../../../../public/x.png";
import Text from "../../../../public/signup-text.png";
import Link from "next/link";

function RegistrationForm() {
  return (
    <>
      <form className="bg-sky-400 h-full flex flex-col px-11 py-10">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/df1b56fe0411e0ec4924dc21a47ce0ce3b111c4cdf079427e25d3286d48753ba?apiKey=a9e210de0ede48479f065d558e6a4bec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/df1b56fe0411e0ec4924dc21a47ce0ce3b111c4cdf079427e25d3286d48753ba?apiKey=a9e210de0ede48479f065d558e6a4bec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/df1b56fe0411e0ec4924dc21a47ce0ce3b111c4cdf079427e25d3286d48753ba?apiKey=a9e210de0ede48479f065d558e6a4bec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/df1b56fe0411e0ec4924dc21a47ce0ce3b111c4cdf079427e25d3286d48753ba?apiKey=a9e210de0ede48479f065d558e6a4bec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/df1b56fe0411e0ec4924dc21a47ce0ce3b111c4cdf079427e25d3286d48753ba?apiKey=a9e210de0ede48479f065d558e6a4bec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/df1b56fe0411e0ec4924dc21a47ce0ce3b111c4cdf079427e25d3286d48753ba?apiKey=a9e210de0ede48479f065d558e6a4bec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/df1b56fe0411e0ec4924dc21a47ce0ce3b111c4cdf079427e25d3286d48753ba?apiKey=a9e210de0ede48479f065d558e6a4bec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/df1b56fe0411e0ec4924dc21a47ce0ce3b111c4cdf079427e25d3286d48753ba?apiKey=a9e210de0ede48479f065d558e6a4bec&"
          className="aspect-[3.79] object-contain object-center w-[254px] overflow-hidden self-center max-w-full"
        />
        <Image
          src={Text}
          alt="Sign up text"
          width={200}
          height={100}
          className="w-fit mx-auto"
        />
        <div className="border bg-white self-stretch flex items-center justify-between gap-5 mt-48 px-5 py-3 rounded-[100px] border-solid border-black border-opacity-0">
          <input placeholder="Full Name" />
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7343ac6f8e59cee2daef78c7f608ec891436ccee92c5b4f82feafd1f7952d2fa?apiKey=a9e210de0ede48479f065d558e6a4bec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7343ac6f8e59cee2daef78c7f608ec891436ccee92c5b4f82feafd1f7952d2fa?apiKey=a9e210de0ede48479f065d558e6a4bec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7343ac6f8e59cee2daef78c7f608ec891436ccee92c5b4f82feafd1f7952d2fa?apiKey=a9e210de0ede48479f065d558e6a4bec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7343ac6f8e59cee2daef78c7f608ec891436ccee92c5b4f82feafd1f7952d2fa?apiKey=a9e210de0ede48479f065d558e6a4bec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7343ac6f8e59cee2daef78c7f608ec891436ccee92c5b4f82feafd1f7952d2fa?apiKey=a9e210de0ede48479f065d558e6a4bec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7343ac6f8e59cee2daef78c7f608ec891436ccee92c5b4f82feafd1f7952d2fa?apiKey=a9e210de0ede48479f065d558e6a4bec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7343ac6f8e59cee2daef78c7f608ec891436ccee92c5b4f82feafd1f7952d2fa?apiKey=a9e210de0ede48479f065d558e6a4bec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7343ac6f8e59cee2daef78c7f608ec891436ccee92c5b4f82feafd1f7952d2fa?apiKey=a9e210de0ede48479f065d558e6a4bec&"
            className="aspect-square object-contain object-center w-[26px] overflow-hidden selfretch shrink-0 max-w-full"
          />
        </div>
        <div className="border bg-white self-stretch flex items-center justify-between gap-5 mt-3 px-5 py-2.5 rounded-[100px] border-solid border-black border-opacity-0">
          <input placeholder="Email Address" />
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/99c8ebdad0bffb55fc23d0680025ee16ef9b4c7fbac06e5c8d75ea530d0d85a6?apiKey=a9e210de0ede48479f065d558e6a4bec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/99c8ebdad0bffb55fc23d0680025ee16ef9b4c7fbac06e5c8d75ea530d0d85a6?apiKey=a9e210de0ede48479f065d558e6a4bec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/99c8ebdad0bffb55fc23d0680025ee16ef9b4c7fbac06e5c8d75ea530d0d85a6?apiKey=a9e210de0ede48479f065d558e6a4bec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/99c8ebdad0bffb55fc23d0680025ee16ef9b4c7fbac06e5c8d75ea530d0d85a6?apiKey=a9e210de0ede48479f065d558e6a4bec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/99c8ebdad0bffb55fc23d0680025ee16ef9b4c7fbac06e5c8d75ea530d0d85a6?apiKey=a9e210de0ede48479f065d558e6a4bec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/99c8ebdad0bffb55fc23d0680025ee16ef9b4c7fbac06e5c8d75ea530d0d85a6?apiKey=a9e210de0ede48479f065d558e6a4bec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/99c8ebdad0bffb55fc23d0680025ee16ef9b4c7fbac06e5c8d75ea530d0d85a6?apiKey=a9e210de0ede48479f065d558e6a4bec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/99c8ebdad0bffb55fc23d0680025ee16ef9b4c7fbac06e5c8d75ea530d0d85a6?apiKey=a9e210de0ede48479f065d558e6a4bec&"
            className="aspect-square object-contain object-center w-[30px] overflow-hidden self-stretch shrink-0 max-w-full"
          />
        </div>
        <div className="border bg-white self-stretch flex items-center justify-between gap-5 mt-3 px-6 py-3.5 rounded-[100px] border-solid border-black border-opacity-0">
          <input placeholder="Phone Number" />
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/eda441455152e72829306081a9501c0808a7e6e84975c8d8981a3486da4f627c?apiKey=a9e210de0ede48479f065d558e6a4bec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/eda441455152e72829306081a9501c0808a7e6e84975c8d8981a3486da4f627c?apiKey=a9e210de0ede48479f065d558e6a4bec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eda441455152e72829306081a9501c0808a7e6e84975c8d8981a3486da4f627c?apiKey=a9e210de0ede48479f065d558e6a4bec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/eda441455152e72829306081a9501c0808a7e6e84975c8d8981a3486da4f627c?apiKey=a9e210de0ede48479f065d558e6a4bec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/eda441455152e72829306081a9501c0808a7e6e84975c8d8981a3486da4f627c?apiKey=a9e210de0ede48479f065d558e6a4bec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eda441455152e72829306081a9501c0808a7e6e84975c8d8981a3486da4f627c?apiKey=a9e210de0ede48479f065d558e6a4bec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/eda441455152e72829306081a9501c0808a7e6e84975c8d8981a3486da4f627c?apiKey=a9e210de0ede48479f065d558e6a4bec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/eda441455152e72829306081a9501c0808a7e6e84975c8d8981a3486da4f627c?apiKey=a9e210de0ede48479f065d558e6a4bec&"
            className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch shrink-0 max-w-full"
          />
        </div>
        <div className="border bg-white self-stretch flex items-center justify-between gap-5 mt-3 px-5 py-3 rounded-[100px] border-solid border-black border-opacity-0">
          <input placeholder="Password" type="password" />
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d7b0337db8a02e17a7fd36172c7719cb991e69f71b56872d966fc37d8cc4f7e2?apiKey=a9e210de0ede48479f065d558e6a4bec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7b0337db8a02e17a7fd36172c7719cb991e69f71b56872d966fc37d8cc4f7e2?apiKey=a9e210de0ede48479f065d558e6a4bec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7b0337db8a02e17a7fd36172c7719cb991e69f71b56872d966fc37d8cc4f7e2?apiKey=a9e210de0ede48479f065d558e6a4bec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7b0337db8a02e17a7fd36172c7719cb991e69f71b56872d966fc37d8cc4f7e2?apiKey=a9e210de0ede48479f065d558e6a4bec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7b0337db8a02e17a7fd36172c7719cb991e69f71b56872d966fc37d8cc4f7e2?apiKey=a9e210de0ede48479f065d558e6a4bec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7b0337db8a02e17a7fd36172c7719cb991e69f71b56872d966fc37d8cc4f7e2?apiKey=a9e210de0ede48479f065d558e6a4bec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7b0337db8a02e17a7fd36172c7719cb991e69f71b56872d966fc37d8cc4f7e2?apiKey=a9e210de0ede48479f065d558e6a4bec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7b0337db8a02e17a7fd36172c7719cb991e69f71b56872d966fc37d8cc4f7e2?apiKey=a9e210de0ede48479f065d558e6a4bec&"
            className="aspect-square object-contain object-center w26px] overflow-hidden self-stretch shrink-0 max-w-full"
          />
        </div>
        <div className="border bg-white self-stretch flex items-center justify-between gap-5 mt-3 px-6 py-3 rounded-[100px] border-solid border-black border-opacity-0">
          <input placeholder="Confirm Password" type="password" />
          <img
            loading="lazy"
            Set="..."
            className="aspect-square object-contain object w-6 overflow-hidden self-stretch shrink-0 max-w-full"
          />
        </div>
        <div className="self-stretch flex items-stretch justify-between gap-4 mt-6">
          <input type="checkbox" />

          <div className="text-black text-xs capitalize self-center grow whitespace-nowrap my-auto">
            <span className=" text-black">Agree</span>{" "}
            <a
              href="..."
              className=" text-zinc-900"
              aria-label="Terms & Conditions"
              role="link"
            >
              <span className="font-medium text-black">Terms & Conditions</span>
            </a>
          </div>
        </div>
        <Link
          href="/home"
          type="submit"
          className="text-white text-3xl font-medium whitespace-nowrap border shadow-sm bg-pink-400 self-stretch justify-center items-stretch mt-8 px-12 py-2 rounded-[100px] border-solid border-pink-600"
        >
          Create Account
        </Link>
        <div className="self-stretch flex items-stretch justify-between gap-5 mt-7 pr-1.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/47d72a49756d314672d9346f9f8801f2ffc00f1007eb2b95c6098baa772c4442?apiKey=a9e210de0ede48479f065d558e6a4bec"
            className="aspect-[131] object-contain object-center w-[131px] stroke-[1px] stroke-black overflow-hidden self-center shrink-0 max-w-full my-auto"
          />
          <div className="text-zinc-900 text-xs capitalize">or</div>
          <div></div>
        </div>

        {/* <div>
          <button>
            <img src={Facebook} alt="Facebook" className="w-8 h-8" />
          </button>

          <button>
            <img src={X} alt="X" className="w-8 h-8" />
          </button>
        </div> */}

        <div className="self-center flex gap-1.5 mt-2 items-center">
          <div className="text-black text-xs whitespace-nowrap">
            Already have an account?
          </div>
          <div className="text-black text-xs-black self-stretch whitespace-nowrap">
            <a
              href="/auth/login"
              aria-label="Login"
              role="link"
              className="font-bold"
            >
              Login
            </a>
          </div>
        </div>
      </form>
    </>
  );
}

export default RegistrationForm;
