import { Route, Routes } from "react-router";
import Home from "./pages/HomePage";
import Cart from "./pages/CartPage";
import Account from "./pages/AccountPage";
import Auth from "./pages/AuthPage";
import Product from "./pages/AllProductPage";
import PageNotFound from "./pages/PageNotFound";
import { ROUTE } from "./constants/routeConstant";

function App() {
  return (
    <Routes>
      <Route path={ROUTE.AUTH.auth} element={<Auth />}>
        <Route path={ROUTE.AUTH.login} />
        <Route path={ROUTE.AUTH.signup} />
      </Route>
      <Route path={ROUTE.PRODUCTS.products} element={<Home />}>
        <Route path={ROUTE.PRODUCTS.productId} element={<Product />} />
      </Route>
      <Route path={ROUTE.CART.cart} element={<Cart />}></Route>
      <Route path={ROUTE.ACCOUNT.account} element={<Account />}>
        <Route index path={ROUTE.ACCOUNT.viewprofile} />
        <Route path={ROUTE.ACCOUNT.editprofile} />
        <Route path={ROUTE.ACCOUNT.orders}>
          <Route path={ROUTE.ACCOUNT.orderId} />
        </Route>
      </Route>
      <Route
        path={ROUTE.PAGE_NOT_FOUND.pageNotFound}
        element={<PageNotFound />}
      />
    </Routes>
  );
}

export default App;
