import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import ProtectedRoute from "./ui/ProtectedRoute";
import AppLayout from "./ui/AppLayout";
import UsersList from "./features/users/UsersList";
import User from "./features/users/User";
import ProductsList from "./features/products/ProductsList";
import OrdersList from "./features/orders/OrdersList";
import NotFound from "./pages/NotFound";

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
            <Route index element={<Home replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="users" element={<UsersList />} />
            <Route path="users/:userId" element={<User />} />
            <Route path="products" element={<ProductsList />} />
            <Route path="orders" element={<OrdersList />} />
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={true}
          pauseOnFocusLoss={false}
          draggable={true}
          pauseOnHover={true}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
