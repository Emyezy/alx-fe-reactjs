import { useState } from "react";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let validationErrors = {};

    if (!title.trim()) {
      validationErrors.title = "Recipe title is required.";
    }

    if (!ingredients.trim()) {
      validationErrors.ingredients = "Ingredients are required.";
    } else {
      const items = ingredients.split(",").map((i) => i.trim());
      if (items.length < 2) {
        validationErrors.ingredients =
          "Please enter at least two ingredients.";
      }
    }

    if (!steps.trim()) {
      validationErrors.steps = "Preparation steps are required.";
    }

    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("New recipe:", { title, ingredients, steps });
      alert("Recipe submitted successfully!");

      setTitle("");
      setIngredients("");
      setSteps("");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-green-600">
        ➕ Add a New Recipe
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg max-w-xl mx-auto 
                   md:p-10 md:max-w-2xl"
      >
        {/* Title */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            className="w-full border rounded-lg px-3 py-2 
                       focus:outline-none focus:ring-2 focus:ring-green-400
                       md:px-4 md:py-3"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Ingredients (separate with commas)
          </label>
          <textarea
            className="w-full border rounded-lg px-3 py-2 
                       focus:outline-none focus:ring-2 focus:ring-green-400
                       md:px-4 md:py-3"
            rows="3"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Steps */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Preparation Steps
          </label>
          <textarea
            className="w-full border rounded-lg px-3 py-2 
                       focus:outline-none focus:ring-2 focus:ring-green-400
                       md:px-4 md:py-3"
            rows="5"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          ></textarea>
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded-lg 
                     hover:bg-green-600 transition duration-300
                     md:py-3 md:text-lg"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}
