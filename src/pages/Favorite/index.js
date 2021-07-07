import React from "react";
import { useBreakpoints } from "react-device-breakpoints";
import shortid from "shortid";
import cateImg from "../../assets/Cate-image/cateImg-3.jpg";
import DataTable from "../../components/Data-table";
import ActionCell from "../../components/Data-table/Action-cell";
import ImageCell from "../../components/Data-table/Image-cell";
import TextCell from "../../components/Data-table/Text-Cell";
import Footer from "../../components/Footer";
import Nav from "../../components/Header/Nav";
const Index = () => {
  // device breakpoints
  const device = useBreakpoints();
  const theadItems = [

  ]
  const tbodyItems = [
    [
      <ImageCell
        key={shortid.generate()}
        className="table__product__img"
        as="td"
        actions={[
          {
            name: "image",
            image: cateImg,
          },
        ]}
      />,
      <TextCell key="name" text="Chiness Food Buffet Dinner" className="text-center" as="td" />,
      <ActionCell
        key="action"
        className="text-center"
        actions={[
          {
            name: "Delete",
            icon: 'Add to Cart',
            handler: () => {
              
            },
            className: 'btn'
          }
        ]}
        as="td"
      />,
    ],
    [
      <ImageCell
        key={shortid.generate()}
        className="table__product__img"
        as="td"
        actions={[
          {
            name: "image",
            image: cateImg,
          },
        ]}
      />,
      <TextCell key="name" text="Kerala Kancchi Food" as="td" className="text-center" />,
      <ActionCell
        key="action"
        className="text-center"
        actions={[
          {
            name: "Delete",
            icon: 'Add to Cart',
            handler: () => {
              
            },
            className: 'btn'
          }
        ]}
        as="td"
      />,
    ],
  ];
  return (
    <>
      {device.isDesktop && <Nav isShow />}
      <div className="favorite__wrapper mb-5">
        <div className="favourite__section__image">
          <h2 className="text-center font-size__3">WishList</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="favourite__table mt-5">
                <DataTable
                  theadItems={theadItems}
                  tbodyItems={tbodyItems}
                  noItemMsg="There is no product"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Index;
