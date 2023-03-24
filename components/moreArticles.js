import Image from "next/image";
import RetroPCS from "../public/image-retro-pcs.jpg";
import TopLaptops from "../public/image-top-laptops.jpg";
import GamingGrowth from "../public/image-gaming-growth.jpg";
import Link from "next/link";

export default function MoreArticles() {
  const articlesInfo = [
    {
      cover: RetroPCS,
      number: "01",
      title: "Reviving Retro PCs",
      description: "What happens when old PCs are given modern upgrades?",
    },
    {
      cover: TopLaptops,
      number: "02",
      title: "Top 10 Laptops of 2022",
      description: "Our best picks for various needs and budgets.",
    },
    {
      cover: GamingGrowth,
      number: "03",
      title: "The Growth of Gaming",
      description: " How the pandemic has sparked fresh opportunities.",
    },
  ];

  return (
    <div className="sm:col-span-3 grid sm:grid-cols-3 gap-4 my-12">
      {articlesInfo.map((articles, index) => (
        <div
          key={index}
          className="grid grid-cols-[20%_70%] gap-4 sm:grid-cols-[28%_70%]"
        >
          <Image
            src={articles.cover}
            alt={`cover ${articles.number}`}
            height={100}
            width={80}
          />
          <div className="grid grid-rows-[35%_28%_30%] sm:grid-rows-[35%_30%_35%]">
            <h3 className="text-2xl font-bold text-grayishblue">
              {articles.number}
            </h3>
            <Link href="/">
              <h4 className="text-sm font-extrabold text-verydarkblue hover:text-softred">
                {articles.title}
              </h4>
            </Link>
            <p className="text-xs font-medium text-darkgrayishblue">
              {articles.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
