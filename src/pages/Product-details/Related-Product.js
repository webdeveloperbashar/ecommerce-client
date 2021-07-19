import React from "react";
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
          {[1, 2].map((__, _) => (
            <Product
              productImg="https://i.ibb.co/gzD9DdP/09.png"
              productName="Tomatos on the vine"
              productPrice="$254"
              productSize="1.5 KG"
            />
          ))}
        </SliderFunctionalities>
      }
    </div>
  );
};

export default RelatedProduct;
