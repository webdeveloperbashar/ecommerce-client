import { AiOutlineDollarCircle, AiTwotoneMedicineBox } from "react-icons/ai";
import { GiTruck } from "react-icons/gi";

const DeliveryTips = () => {
  return (
    <div>
      <div className="warning p-3 box__shadow alert alert-danger">
        <h5>Covid-19 Info: We keep delivering</h5>
      </div>
      <div className="delivery__tips box__shadow bg-light p-3">
        <div className="tips d-flex align-items-center">
          <span>
            <GiTruck className="tips__icon" />
          </span>
          <span>
            <p>Free Shipping apply to all orders over $699.99</p>
          </span>
        </div>
        <div className="tips d-flex align-items-center">
          <span>
            <AiTwotoneMedicineBox className="tips__icon" />
          </span>
          <span>
            <p>Guranteed 100% Organic from natural farmas</p>
          </span>
        </div>
        <div className="tips d-flex align-items-center">
          <span>
            <AiOutlineDollarCircle className="tips__icon" />
          </span>
          <span>
            <p>1 Day Returns if you change your mind</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default DeliveryTips;
