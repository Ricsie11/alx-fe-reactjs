import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from './components/RecipeDetails'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">Recipe App</h1>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <RecipeDetails />
                <RecipeList />
                <AddRecipeForm />
              </>
            }
          />
          <Route path="/recipe/:id" element={<SearchBar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
