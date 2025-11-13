import { useState, useEffect } from "react";
import useRecipeStore from "./recipeStore";

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((s) => s.updateRecipe);

  // Handle case where recipe might not yet be defined
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    time: "",
  });

  // Whenever recipe becomes available, update formData
  useEffect(() => {
    if (recipe) {
      setFormData({
        title: recipe.title || "",
        description: recipe.description || "",
        time: recipe.time || "",
      });
    }
  }, [recipe]);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!recipe) {
      alert("Recipe not found!");
      return;
    }
    event.preventDefault(); // Prevent page reload

    updateRecipe(recipe.id, formData);
    alert("Recipe updated successfully!");
  };

  // If recipe isn’t ready, show a message
  if (!recipe) {
    return <p className="text-gray-500">Loading recipe...</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        className="border p-2 block mb-2 w-full"
        placeholder="Recipe title"
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        className="border p-2 block mb-2 w-full"
        placeholder="Description"
      />
      <input
        name="time"
        value={formData.time}
        onChange={handleChange}
        className="border p-2 block mb-2 w-full"
        placeholder="Cooking time"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Save Changes
      </button>
    </form>
  );
};

export default EditRecipeForm;
