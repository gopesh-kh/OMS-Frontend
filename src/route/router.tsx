import { createBrowserRouter } from "react-router";

import Layout from "../pages/Layout";
import AuthPage from "../pages/auth/AuthPage";

import ProductsPage from "../pages/products/ProductsPage";
import ProductDetailsPage from "../pages/products/ProductDetailsPage";

import CartPage from "../pages/CartPage";
import WishlistPage from "../pages/WishlistPage";

import AccountLayout from "../pages/account/AccountLayout";
import ProfilePage from "../pages/account/ProfilePage";
import AddressPage from "../pages/account/AddressPage";
import OrdersPage from "../pages/account/OrdersPage";

import LoginPage from "../pages/auth/LoginPage";
import SignupPage from "../pages/auth/SignupPage";

import ProtectedRoute from "../components/ProtectedRoute";
import PublicRoute from "../components/PublicRoute";

import PageNotFound from "../pages/PageNotFound";
import { ROUTE } from "../constants/routeConstant";

export const router = createBrowserRouter([
  {
    element: <PublicRoute />,
    children: [
      {
        path: ROUTE.AUTH.auth,
        element: <AuthPage />,
        children: [
          {
            path: ROUTE.AUTH.login,
            element: <LoginPage />,
          },
          {
            path: ROUTE.AUTH.signup,
            element: <SignupPage />,
          },
        ],
      },
    ],
  },

  {
    element: <ProtectedRoute />,
    children: [
      {
        path: ROUTE.HOME.home,
        element: <Layout />,
        children: [
          {
            index: true,
            element: <ProductsPage />,
          },

          {
            path: ROUTE.PRODUCTS.products,
            children: [
              {
                path: ROUTE.PRODUCTS.productId,
                element: <ProductDetailsPage />,
              },
            ],
          },

          {
            path: ROUTE.CART.cart,
            element: <CartPage />,
          },

          {
            path: ROUTE.WISHLIST.wishlist,
            element: <WishlistPage />,
          },

          {
            path: ROUTE.ACCOUNT.account,
            element: <AccountLayout />,
            children: [
              {
                index: true,
                element: <ProfilePage />,
              },
              {
                path: ROUTE.ACCOUNT.address,
                element: <AddressPage />,
              },
              {
                path: ROUTE.ACCOUNT.orders,
                element: <OrdersPage />,
              },
            ],
          },
        ],
      },
    ],
  },

  {
    path: "*",
    element: <PageNotFound />,
  },
]);
