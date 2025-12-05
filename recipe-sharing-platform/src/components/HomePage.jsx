import { useState, useEffect } from "react";
import data from "../data.json";
import { Link } from "react-router-dom";

function Homepage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <>
      <div className="p-6">
        <h1 className="text-3xl font-bold md-6 mb-6 text-center">
          Recipe Collection
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl  transition-transform duration-300"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover hover:scale-[1.02]"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
                <p className="text-gray-600 text-sm">{recipe.summary}</p>

                <Link
                  to={`/recipe/${recipe.id}`}
                  className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <Link
          to="/add-recipe"
          className="bg-green-500 hover:bg-green-700 p-2 rounded text-white"
        >
          Add New Recipe
        </Link>
      </div>
    </>
  );
}

export default Homepage;
