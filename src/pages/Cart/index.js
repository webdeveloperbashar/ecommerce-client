import { useBreakpoints } from "react-device-breakpoints";
import { MdDelete } from "react-icons/md";
import cateImg from "../../assets/Cate-image/cateImg-3.jpg";
import DataTable from "../../components/Data-table";
import ActionCell from "../../components/Data-table/Action-cell";
import ImageCell from "../../components/Data-table/Image-cell";
import TextCell from "../../components/Data-table/Text-Cell";
import Footer from "../../components/Footer";
import Nav from "../../components/Header/Nav";
import HorizontalLine from "../../config/HorizontalLine";
const Index = () => {
  const device = useBreakpoints();
  const theadItems = [
    <TextCell key="image" text="Image" as="th" />,
    <TextCell key="name" text="Product Name" as="th" />,
    <TextCell key="quantity" text="Quantity" as="th" />,
    <TextCell key="price" text="Price" as="th" />,
    <TextCell key="action" text="Action" as="th" className="text-end" />,
  ];
  const tbodyItems = [
    [
      <ImageCell
        key="image"
        className="table__product__img"
        as="td"
        actions={[
          {
            name: "image",
            image: cateImg,
          },
        ]}
      />,
      <TextCell key="name" text="Alu Vaji" as="td" />,
      <TextCell key="quantity" text="2" as="td" />,
      <TextCell key="price" text="$25" as="td" />,
      <ActionCell
        key="action"
        className="text-end"
        actions={[
          {
            name: "Delete",
            icon: <MdDelete />,
            handler: () => {},
          },
        ]}
        as="td"
      />,
    ],
    [
      <ImageCell
        key="image"
        className="table__product__img"
        as="td"
        actions={[
          {
            name: "image",
            image: "https://i.ibb.co/ZVVYXyh/fruits.png",
          },
        ]}
      />,
      <TextCell key="name" text="Kashmiri Fruits" as="td" />,
      <TextCell key="quantity" text="2 Kg" as="td" />,
      <TextCell key="price" text="$148" as="td" />,
      <ActionCell
        key="action"
        className="text-end"
        actions={[
          {
            name: "Delete",
            icon: <MdDelete />,
            handler: () => {},
          },
        ]}
        as="td"
      />,
    ],
  ];
  return (
    <>
      {device.isDesktop && <Nav isShow />}
      <div className="cart__wrapper">
        <div className="cart__section__image">
          <h2 className="text-center">Cart</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="cart__list box__shadow bg-light p__2 mt-5 mb-4">
                <DataTable
                  theadItems={theadItems}
                  tbodyItems={tbodyItems}
                  noItemMsg="There is no product"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="cart__totals box__shadow bg-light p__2 mt-5 mb-4">
                <h2 className="text-dark font-size__3 py-1">Order Summary</h2>
                <HorizontalLine
                  width="100%"
                  height="1px"
                  margin="8px auto"
                  background="#8080803b"
                />
                <div className="order__summery__table mt-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="font-size__1 py-3">Subtotal</span>
                    <span className="font-size__2">$135874</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between py-3">
                    <span className="font-size__1">Tax</span>
                    <span className="font-size__2">5%</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between py-3">
                    <span className="font-size__1">Delivery Charge</span>
                    <span className="font-size__2">$79</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;
