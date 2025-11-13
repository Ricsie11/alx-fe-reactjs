import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),

  deleteRecipe: (id) =>
    set((s) => ({ recipes: s.recipes.filter((recipe) => recipe.id !== id) })),

  updateRecipe: (id, updatedData) =>
    set((s) => ({
      recipes: s.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedData } : recipe
      ),
    })),
}));

export default useRecipeStore;
