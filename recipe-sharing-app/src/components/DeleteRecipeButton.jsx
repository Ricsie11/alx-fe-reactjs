import useRecipeStore from "./recipeStore";
import { useNavigate } from "react-router-dom"; // <-- import useNavigate

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const navigate = useNavigate(); // <-- initialize navigate

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      deleteRecipe(id);
      alert("Recipe deleted successfully!");
      navigate("/"); // <-- go back to main page after deletion
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 text-white px-3 py-1 rounded mt-2"
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
