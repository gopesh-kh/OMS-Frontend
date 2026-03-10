import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import AccountPage from "./pages/AccountPage";
import AuthPage from "./pages/AuthPage";
import AllProductPage from "./pages/AllProductPage";
import PageNotFound from "./pages/PageNotFound";
import { ROUTE } from "./constants/routeConstant";
import FavouriteProductPage from "./pages/FavouriteProductPage";

function App() {
  return (
    <Routes>
      <Route path={ROUTE.AUTH.auth} element={<AuthPage />}>
        <Route path={ROUTE.AUTH.login} />
        <Route path={ROUTE.AUTH.signup} />
      </Route>
      <Route path={ROUTE.PRODUCTS.products} element={<HomePage />}>
        <Route path={ROUTE.PRODUCTS.productId} element={<AllProductPage />} />
      </Route>
      <Route path={ROUTE.CART.cart} element={<CartPage />}></Route>
      <Route path={ROUTE.ACCOUNT.account} element={<AccountPage />}>
        <Route index path={ROUTE.ACCOUNT.viewprofile} />
        <Route path={ROUTE.ACCOUNT.editprofile} />
        <Route path={ROUTE.ACCOUNT.orders}>
          <Route path={ROUTE.ACCOUNT.orderId} />
        </Route>
      </Route>
      <Route
        path={ROUTE.FAVOURITE.favourite}
        element={<FavouriteProductPage />}
      />
      <Route
        path={ROUTE.PAGE_NOT_FOUND.pageNotFound}
        element={<PageNotFound />}
      />
    </Routes>
  );
}

export default App;
