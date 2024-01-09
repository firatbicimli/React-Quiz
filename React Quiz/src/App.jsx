import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Introduce from "./pages/introduce/introduce";
import Quiz from "./pages/quiz/Quiz";

function App() {
  

  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Introduce/>}/>
            <Route path="/quiz/:diffuculty/:amount" element={<Quiz/>}/>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
