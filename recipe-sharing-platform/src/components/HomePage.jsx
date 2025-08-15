<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
