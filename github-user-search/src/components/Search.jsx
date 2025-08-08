// src/components/Search.jsx
import { useState } from "react";
import { fetchUsers } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [totalCount, setTotalCount] = useState(0);

  const handleSearch = async (e, resetPage = true) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const currentPage = resetPage ? 1 : page;
      const data = await fetchUsers(username, location, minRepos, currentPage);

      if (data.items.length === 0) {
        setError("Looks like we cant find the user");
        setResults([]);
      } else {
        setTotalCount(data.total_count);
        if (resetPage) {
          setResults(data.items);
          setPage(2);
        } else {
          setResults((prev) => [...prev, ...data.items]);
          setPage((prev) => prev + 1);
        }
      }
    } catch {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Search Form */}
      <form
        onSubmit={(e) => handleSearch(e)}
        className="bg-white shadow-md rounded-lg p-6 space-y-4"
      >
        <h2 className="text-2xl font-bold mb-4">GitHub User Search</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <input
            type="number"
            placeholder="Min Repos"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Loading..." : "Search"}
        </button>
      </form>

      {/* Error */}
      {error && <p className="text-red-500 mt-4">{error}</p>}

      {/* Results */}
      <div className="mt-6 grid gap-4">
        {results.map((user) => (
          <div
            key={user.id}
            className="flex items-center bg-gray-50 p-4 rounded-lg shadow"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <div className="ml-4">
              <h3 className="font-semibold">{user.login}</h3>
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      {results.length > 0 && results.length < totalCount && (
        <div className="mt-4 text-center">
          <button
            onClick={(e) => handleSearch(e, false)}
            className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
