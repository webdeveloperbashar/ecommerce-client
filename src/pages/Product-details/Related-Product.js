import React from "react";
import FakeData from "../../config/FakeData";
import SliderFunctionalities from "../../config/SliderFunctionalities";
import Product from "./../../config/Product";

const RelatedProduct = () => {
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
          {FakeData.map((item, index) => (
            <Product
              key={index + 1}
              productId={item.id}
              productImg={item.img}
              productName={item.name}
              productPrice={item.price}
              productSize={item.size}
            />
          ))}
        </SliderFunctionalities>
      }
    </div>
  );
};

export default RelatedProduct;
