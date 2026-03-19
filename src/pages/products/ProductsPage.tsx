import ProductCardComponent from "../../components/product/ProductCardComponent";

const ProductsPage = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      <ProductCardComponent />
      <ProductCardComponent />
      <ProductCardComponent />
      <ProductCardComponent />
    </div>
  );
};

export default ProductsPage;
