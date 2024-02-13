import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";
import NewInforme from "./NewInforme";
import NewPublisher from "./NewPublisher";
import Tablet from "./Tablet";
import { Informe } from "./Informe";
import "/node_modules/primeflex/primeflex.css";

function App() {
  return (
    <>
      <Router>
        <Informe />
        {/* <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/newinforme" element={<NewInforme />} />
          <Route path="/newpublicador" element={<NewPublisher />} />
          <Route path="/lista" element={<Tablet />} />
        </Routes> */}
      </Router>
    </>
  );
}

export default App;
