// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./components/Profile";
import Home from "./components/Home";
import BlogPost from "./components/BlogPost";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public route */}
        <Route path="/" element={<Home />} />

        {/* Dynamic blog route */}
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* Protected route */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
