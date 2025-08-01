// src/components/recipeStore.js
import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  setSearchTerm: (term) => set({ searchTerm: term }),
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),
  addRecipe: (recipe) => set(state => ({
    recipes: [...state.recipes, recipe]
  })),
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(r =>
      r.id === updatedRecipe.id ? updatedRecipe : r
    )
  })),
  deleteRecipe: (id) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id)
  })),
}));
