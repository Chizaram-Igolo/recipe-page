// import recipeImage from "./recipe-image.jpg"; // Replace with your recipe image path

import { recipeData } from "../data";

function TopBanner() {
  return (
    <div id="d-wrapper" className="bg-white">
      <div className="zig-zag-bottom m-0 mt-8 mb-8 bg-[#1BA1E2]">
        <h1>Abacha</h1>
        <p className="text-center">Favourite Nigerian Recipe</p>
      </div>
    </div>
  );
}

function RecipePage() {
  return (
    <>
      <TopBanner />
      <div className="flex flex-col pt-4 pb-8 px-8 md:px-12 lg:px-32">
        <h1 className="text-3xl font-semibold mb-16 text-center">
          {/* Favorite Nigerian Recipe */}
        </h1>
        <div className="flex md:hidden mx-auto">
          <div className="w-[100%] mt-0 mb-8">
            <img
              src={recipeData.imageURL}
              alt="Recipe"
              className="w-[20rem] mb-4 rounded-lg"
            />
            <p className="text-left italic">A Bowl of Abacha</p>
          </div>
        </div>

        <div className="text-lg mb-4">
          <div className="flex justify-around xl:justify-center xl:gap-[14rem]">
            <div>
              <h2 className="mb-4 font-semibold text-xl">Ingredients</h2>
              <ul className="list-disc pl-6">
                {recipeData.ingredients.map((item) => (
                  <li className="mb-[0.1rem] text-[16px]">{item}</li>
                ))}
              </ul>
            </div>

            <div className="hidden md:flex">
              <div className="w-[100%] mt-12">
                <img
                  src={recipeData.imageURL}
                  alt="Recipe"
                  className="w-[20rem] mb-4 rounded-lg"
                />
                <p className="text-left italic">A Bowl of Abacha</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 mb-4 px-0 md:px-4 lg:px-12 xl:px-24">
          <div>
            <h2 className="mb-4 font-semibold text-xl">Instructions</h2>
            <ol className="list-decimal pl-6">
              {recipeData.instructions.map((item) =>
                "point" in item ? (
                  <li
                    className={`text-md ${"point" in item ? "mb-2" : "mb-0"}`}
                  >
                    {item.point}
                  </li>
                ) : (
                  <span className="inline-block mb-4 text-sm bg-orange-200 py-1 px-2">
                    {item.note}
                  </span>
                )
              )}
            </ol>
          </div>
        </div>
        <p className="text-gray-600 text-sm">Made on 28th August, 2023</p>
      </div>
    </>
  );
}

export default RecipePage;
