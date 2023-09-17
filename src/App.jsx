import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProtectedRoute from "./ui/ProtectedRoute";
import AppLayout from "./ui/AppLayout";
import UsersList from "./features/users/UsersList";
import User from "./features/users/User";
import ProductsList from "./features/products/ProductsList";

function App() {
  return (
    <div className="bg-colorGrey">
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }>
            <Route index element={<Home replace to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="users" element={<UsersList />} />
            <Route path="users/:userId" element={<User />} />
            <Route path="products" element={<ProductsList />} />
          </Route>

          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
