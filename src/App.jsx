import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Favourites from "./components/Favourites";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="bg-scuro min-vh-100">
          <Routes>
            <Route path="/" element={<MainSearch />} />
            <Route path="/:company" element={<CompanySearchResults />} />
            <Route
              path="/Favourites"
              element={<Favourites></Favourites>}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
