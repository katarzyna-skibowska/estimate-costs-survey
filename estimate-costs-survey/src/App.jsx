import "./App.css";
import CardsLanding from "./pages/CardsLanding";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SurveyOnpremise from "./pages/SurveyOnpremise";
import SurveyCloud from "./pages/SurveyCloud";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CardsLanding />} />
          <Route path="/survey-cloud-1" element={<SurveyCloud />} />
          <Route path="/survey-onpremise-1" element={<SurveyOnpremise />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
