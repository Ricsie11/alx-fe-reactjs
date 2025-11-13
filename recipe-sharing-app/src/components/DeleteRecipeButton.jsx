import  useRecipeStore  from "./recipeStore";

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      deleteRecipe(id);
      alert("Recipe deleted successfully!");
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
