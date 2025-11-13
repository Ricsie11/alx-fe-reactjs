import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'

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
                <RecipeList />
                <AddRecipeForm />
              </>
            }
          />
          
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
