export const ROUTE = {
  HOME: {
    home: "/",
  },
  AUTH: {
    auth: "auth",
    login: "login",
    signup: "signup",
  },
  PRODUCTS: {
    products: "products",
    productId: ":productId",
  },
  CART: {
    cart: "cart",
  },
  ACCOUNT: {
    account: "account",
    viewprofile: "viewprofile",
    editprofile: "editprofile",
    orders: "orders",
    orderId: ":orderId",
  },
  FAVOURITE: {
    favourite: "favourite",
  },
  PAGE_NOT_FOUND: {
    pageNotFound: "*",
  },
};

export const REDIRECT_TO_REGISTER = "/auth/signup";
export const REDIRECT_TO_LOGIN = "/auth/login";
