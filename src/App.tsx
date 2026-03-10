import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
import Auth from "./pages/Auth";
import Product from "./pages/Product";
import Error from "./pages/Error";

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />}>
        <Route path="login" />
        <Route path="signup" />
      </Route>
      <Route path="/products" element={<Home />}>
        <Route path=":productId" element={<Product />} />
      </Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/account" element={<Account />}>
        <Route index path="viewprofile" />
        <Route path="editprofile" />
        <Route path="orders">
          <Route path=":orderId" />
        </Route>
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
