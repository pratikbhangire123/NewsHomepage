import Link from "next/link";

export default function NewArticles() {
  const newArticles = [
    {
      title: "New Hydrogen VS Electric Cars",
      description: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
      title: "The Downsides of AI Artistry",
      description:
        "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
      title: "Is VC Funding Drying Up? ",
      description:
        "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];

  return (
    <div className="mt-12 sm:mt-3 px-4 py-5 bg-verydarkblue">
      <h3 className="text-3xl font-semibold text-softorange">New</h3>
      {newArticles.map((articles, index, row) => (
        <div
          key={index}
          className={`my-5 
          ${index + 1 == row.length ? "" : "pb-6 border-b"} 
          border-b-darkgrayishblue`}
        >
          <Link href="/">
            <h4 className="text-sm font-bold text-offwhite hover:text-softorange cursor-pointer">
              {articles.title}
            </h4>
          </Link>
          <p className="mt-2 text-xs text-grayishblue">
            {articles.description}
          </p>
        </div>
      ))}
    </div>
  );
}
