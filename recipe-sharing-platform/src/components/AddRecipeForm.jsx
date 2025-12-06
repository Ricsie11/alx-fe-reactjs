import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [stepslist, setStepsList] = useState("");
  const [errors, setErrors] = useState("");

  const navigate = useNavigate();

  // Validation
  function validate() {
    if (!title.trim() || !ingredients.trim() || !stepslist.trim()) {
      setErrors("All fields are required!");
      return false;
    }
    return true;
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const ingredientList = ingredients
      .split("\n")
      .filter((i) => i.trim() !== "");
    const stepsList = stepslist.split("\n").filter((i) => i.trim() !== "");

    if (ingredientList.length < 2) {
      setErrors("Please enter at least 2 ingredients.");
      return;
    }
    if (stepsList.length < 2) {
      setErrors("Please enter at least 2 instructions.");
      return;
    }

    setErrors("");

    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredientList,
      steps: stepsList,
    };

    alert("Recipe Submitted Successfully");

    //reset Form
    setTitle("");
    setIngredients("");
    setStepsList("");

    //Redirect to home
    navigate("/");
  };

  return (
    <>
      <div>
        <button
          onClick={() => navigate("/")}
          className="font-bold px-4 py-2 text-white rounded-lg bg-blue-500 hover:bg-blue-700 shadow-md border m-3"
        >
          Back
        </button>
      </div>
      <div className="max-w-xl mx-auto p-6 bg-slate-300 rounded-lg shadow-md ">
        <h2 className="text-2xl font-bold mb-4 text-center">Add New Recipe </h2>

        {errors && (
          <p className="text-red-600 mb-4 text-center font-semi-bold">
            {errors}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1"> Recipe Title</label>
            <input
              type="text"
              className="w-full p-2 border rounded resize-none focus:outline-none focus:ring focus:ring-blue-400"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Ingredients:</label>
            <textarea
              className="w-full p-2 border rounded h-32 resize-none focus:outline-none focus:ring focus:ring-blue-400"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            ></textarea>
          </div>

          <div>
            <label className="block font-medium mb-1">Steps:</label>
            <textarea
              className="w-full p-2 border rounded h-32 resize-none focus:outline-none focus:ring focus:ring-blue-400"
              value={stepslist}
              onChange={(e) => setStepsList(e.target.value)}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Recipe
          </button>
        </form>
      </div>
    </>
  );
}

export default AddRecipeForm;
