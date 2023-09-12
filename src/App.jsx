import { BrowserRouter, Route, Routes } from "react-router-dom";
import { newUserFormInputs, productInputs } from "./data/data";
import Home from "./pages/Home";
import Login from "./pages/Login";
import List from "./pages/List";
import Single from "./pages/Single";
import New from "./pages/New";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={newUserFormInputs} title="User" />}
              />
            </Route>

            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Product" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
