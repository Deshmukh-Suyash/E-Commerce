import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import { useParams } from "react-router-dom";
import ProductReviews from "../Components/ProductReviews";
import { useContext } from "react";
import { ThemeContext } from "../Store/ThemeProvider";
import useGetProductByid from "../Hooks/UseGetProductByid";
import UseWishListProduct from "../Hooks/UseWishListProduct";
import UseCartProduct from "../Hooks/UseCartProduct";
const Pdp = () => {
  // console.log("Data",productdata)
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const { theme } = useContext(ThemeContext);
  const { loading, productData, error } = useGetProductByid(id);
  const { productInWishlist, handleWishlist } = UseWishListProduct(productData);
  const { handlecart, isproductInCart } = UseCartProduct(productData);
  useEffect(() => {
    if (!loading && productData.thumbnail) {
      setSelectedImage(productData.thumbnail);
    }
  }, [productData]);
  const discountedPrice =
    productData &&
    (
      productData.price -
      (productData.price * productData.discountPercentage) / 100
    ).toFixed(2);
  const light = "bg-blue-300";
  const dark = "bg-grey-100";
  return (
    <div className={theme == "light" ? light : dark}>
      <Navbar hideSearchBar={true} />

      {loading && <PdpSkeleton />}

      {error && (
        <div className="text-center py-20 text-red-500 text-xl font-semibold">
          {error}
        </div>
      )}

      {!loading && !error && productData && (
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div
            className={
              theme == light
                ? "grid grid-cols-1 md:grid-cols-2 gap-10"
                : "grid grid-cols-1 md:grid-cols-2 gap-10"
            }
          >
            {/* Image Section */}
            <div>
              <div className="border rounded-xl p-4 bg-white shadow">
                <img
                  src={selectedImage}
                  alt={productData.title}
                  className="w-full h-96 object-contain"
                />
              </div>

              <div className="flex gap-4 mt-4">
                {productData.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    onClick={() => setSelectedImage(img)}
                    className={`h-20 w-20 object-cover rounded-md cursor-pointer border ${
                      selectedImage === img ? "border-black" : "border-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-5">
              <h1 className="text-3xl font-bold">{productData.title}</h1>

              <p className="text-gray-500">
                Brand: <span className="font-medium">{productData.brand}</span>
              </p>

              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-green-600">
                  ${discountedPrice}
                </span>
                <span className="line-through text-gray-400">
                  ${productData.price}
                </span>
                <span className="text-red-500">
                  ({productData.discountPercentage}% OFF)
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-yellow-500">⭐</span>
                <span>{productData.rating}</span>
              </div>

              <p className="text-gray-600 leading-relaxed">
                {productData.description}
              </p>

              <div className="space-y-2 text-sm text-gray-600">
                <p>📦 Stock: {productData.stock}</p>
                <p>🚚 {productData.shippingInformation}</p>
                <p>🔁 {productData.returnPolicy}</p>
                <p>🛡 {productData.warrantyInformation}</p>
              </div>

              <div className="flex gap-4 mt-6">
                <button
                  onClick={handlecart}
                  className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
                >
                  {isproductInCart ? "Remove From Cart" : "Add to Cart"}
                </button>

                <button
                  onClick={handleWishlist}
                  className="border border-black px-6 py-3 rounded-lg hover:bg-gray-100 transition"
                >
                  {productInWishlist
                    ? "Remove from Wishlist"
                    : "Add to Wishlist"}
                </button>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <ProductReviews reviews={productData.reviews} />
        </div>
      )}
    </div>
  );
};

const PdpSkeleton = () => {
  const { theme } = useContext(ThemeContext);
  const light = "max-w-7xl mx-auto px-6 py-10 animate-pulse";
  const dark = "max-w-7xl mx-auto px-6 py-10 animate-pulse bg-gray-300";
  return (
    <div className={theme == "light" ? light : dark}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <div className="h-96 bg-gray-200 rounded-xl mb-4 flex items-center justify-center font-bold text-gray-500">
            Loading...
          </div>
          <div className="flex gap-4">
            <div className="h-20 w-20 bg-gray-200 rounded-md"></div>
            <div className="h-20 w-20 bg-gray-200 rounded-md"></div>
            <div className="h-20 w-20 bg-gray-200 rounded-md"></div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="h-8 bg-gray-200 w-3/4 rounded"></div>
          <div className="h-4 bg-gray-200 w-1/4 rounded"></div>
          <div className="h-10 bg-gray-200 w-1/2 rounded"></div>
          <div className="h-24 bg-gray-200 w-full rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default Pdp;
