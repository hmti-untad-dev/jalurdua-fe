import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Landing/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
