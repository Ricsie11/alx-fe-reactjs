import useRecipeStore from "./recipeStore";
import { Link } from "react-router-dom";

function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((s) => s.filteredRecipes);

  if (filteredRecipes.length === 0) return <p>No recipes found.</p>;
  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3> {recipe.title} </h3>
          <p> {recipe.description} </p>
        </div>
      ))}
      <ul>
        {filteredRecipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
