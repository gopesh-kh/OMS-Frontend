import ProductCardComponent from "../components/ProductCardComponent";

const AllProductPage = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-4 wrap-anywhere">
      <ProductCardComponent />
      <ProductCardComponent />
    </div>
  );
};

export default AllProductPage;
