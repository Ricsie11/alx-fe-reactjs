import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./components/Profile";
import Login from "./pages/Login";
import BlogPost from "./pages/BlogPost";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/profile/*"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route path="/posts/:id" element={<BlogPost />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
