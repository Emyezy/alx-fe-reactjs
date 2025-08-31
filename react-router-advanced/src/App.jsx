// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import BlogPost from "./components/BlogPost";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>{" | "}
        <Link to="/blog/1">Blog Post 1</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* ✅ Dynamic Route */}
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
