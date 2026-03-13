import { Route, Routes } from "react-router";
import Layout from "./pages/Layout";
import CartPage from "./pages/CartPage";
import AllProductPage from "./pages/AllProductPage";
import PageNotFound from "./pages/PageNotFound";
import { ROUTE } from "./constants/routeConstant";
import FavouriteProductPage from "./pages/FavouriteProductPage";
import LoginComponent from "./components/LoginComponent";
import AuthPage from "./pages/AuthPage";
import SignupComponent from "./components/SignupComponent";
import ProfilePage from "./pages/ProfilePage";
import ViewProfileComponent from "./components/ViewProfileComponent";
import EditProfileComponent from "./components/EditProfileComponent";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

function App() {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path={ROUTE.AUTH.auth} element={<AuthPage />}>
          <Route path={ROUTE.AUTH.login} element={<LoginComponent />} />
          <Route path={ROUTE.AUTH.signup} element={<SignupComponent />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route path={ROUTE.HOME.home} element={<Layout />}>
          <Route path={ROUTE.PRODUCTS.products} element={<AllProductPage />}>
            <Route
              path={ROUTE.PRODUCTS.productId}
              element={<AllProductPage />}
            />
          </Route>

          <Route path={ROUTE.CART.cart} element={<CartPage />} />

          <Route
            path={ROUTE.FAVOURITE.favourite}
            element={<FavouriteProductPage />}
          />

          <Route path={ROUTE.ACCOUNT.account} element={<ProfilePage />}>
            <Route
              index
              path={ROUTE.ACCOUNT.viewprofile}
              element={<ViewProfileComponent />}
            />
            <Route
              path={ROUTE.ACCOUNT.editprofile}
              element={<EditProfileComponent />}
            />
          </Route>
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
