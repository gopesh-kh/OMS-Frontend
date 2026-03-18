import { useParams } from "react-router";

const ProductDetailsPage = () => {
  const { productId } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">Product Details</h1>

      <p className="mt-2 text-gray-600">Product ID: {productId}</p>
    </div>
  );
};

export default ProductDetailsPage;
