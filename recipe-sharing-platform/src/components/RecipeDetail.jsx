import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selected = data.find((item) => item.id === Number(id));
    setRecipe(selected);
  }, [id]);

  if (!recipe) return <p className="p-6 text-center">Loading...</p>;

  return (
    <>
      <div className="p-6 max-w-3xl mx-auto">
        <Link
          to="/"
          className=" mt-4 p-2 text-white rounded bg-blue-500 hover:bg-blue-700 "
        >
          Back to Home
        </Link>

        <p className="text-4xl font-bold mt-4 mb-4">{recipe.title}</p>

        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />

        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2 underline">Ingredients</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {(recipe.ingredients ?? ["Ingredients missing"]).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2 underline">
            Cooking Instructions{" "}
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 leading-relaxed">
            {(recipe.instructions ?? ["Instructions missing"]).map(
              (step, i) => (
                <li key={i}>{step}</li>
              )
            )}
          </ol>
        </div>
      </div>
    </>
  );
}

export default RecipeDetail;
