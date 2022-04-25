
import "./style/_reset.scss";
import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage/Homepage';
import Login from './components/Account/Login';
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <Homepage></Homepage>
          <Routes>
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
