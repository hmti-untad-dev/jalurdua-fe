import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Landing/Home";
// import Form from "./pages/Pendaftaran/Form";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index path="/" element={<Home />} />
          {/* <Route path="/pendaftaran" element={<Form />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
