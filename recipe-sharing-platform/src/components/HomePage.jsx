import { useState, useEffect } from "react";
import data from "../data.json";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-green-600">
        🍽 Recipe Sharing Platform
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 hover:text-green-500 transition-colors duration-300">
                {recipe.title}
              </h2>
              <p className="text-gray-600 mt-2">{recipe.summary}</p>
              <a
                href={`/recipe/${recipe.id}`}
                className="inline-block mt-4 text-green-600 font-medium hover:underline"
              >
                View Recipe →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
