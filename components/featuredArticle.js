import Image from "next/image";
import Web3Mobile from "../public/image-web-3-mobile.jpg";
import Web3Desktop from "../public/image-web-3-desktop.jpg";

export default function FeaturedArticle() {
  const featuredArticleInfo = {
    mobileCover: Web3Mobile,
    desktopCover: Web3Desktop,
    title: "The Bright Future of Web 3.0?",
    description:
      "We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?",
  };

  return (
    <div className="sm:col-span-2 sm:grid sm:grid-cols-2 gap-5 mt-8 sm:mt-3">
      <div className="col-span-2">
        <Image
          src={featuredArticleInfo.mobileCover}
          alt="covermobile"
          width="auto"
          className="sm:hidden"
        />
        <Image
          src={featuredArticleInfo.desktopCover}
          alt="coverdesktop"
          width="auto"
          priority
          className="max-sm:hidden"
        />
      </div>

      <h3 className="mt-5 sm:mt-0 text-4xl font-black sm:font-extrabold text-verydarkblue">
        {featuredArticleInfo.title}
      </h3>

      <div>
        <p className="mt-5 sm:mt-0 font-medium sm:text-sm text-darkgrayishblue">
          {featuredArticleInfo.description}
        </p>
        <button className="mt-5 sm:mt-7 px-7 py-3 self-start text-center text-xs font-semibold tracking-widest text-offwhite bg-softred hover:bg-verydarkblue">
          READ MORE
        </button>
      </div>
    </div>
  );
}
