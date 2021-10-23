import React from "react";
import { useSelector } from "react-redux";
import SliderFunctionalities from "../../config/SliderFunctionalities";
import Product from "./../../config/Product";

const RelatedProduct = ({ category }) => {
  const product = useSelector((state) =>
    state.products.filter((pd) => pd.category === category)
  );
  return (
    <div className="related__product box__shadow bg-light p-3 mt-4">
      <h2 className="text-dark text-start">Related Products...</h2>
      <hr />
      {
        <SliderFunctionalities
          sliderArrows={true}
          sliderSpeed={2000}
          sliderTransition="all 0.8s"
        >
          {product?.map((item, index) => (
            <Product
              key={index + 1}
              product={item}
              productId={item._id}
              productImg={item.productImage[0].url}
              productName={item.name}
              productPrice={item.price}
              productSize={item.weight + item.unit}
              productDiscount={item.discount}
            />
          ))}
        </SliderFunctionalities>
      }
    </div>
  );
};

export default RelatedProduct;
