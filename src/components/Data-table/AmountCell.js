const AmountCell = ({ items, as, className, tax, shippingFees }) => {
  const As = as;
  let subtotal = 0;
  items.forEach((item) => {
    subtotal = subtotal + item.price * item.quantity;
  });
  const grandTotal = (tax / 100) * subtotal + shippingFees + subtotal;
  return (
    <>
      <As className={className}>${grandTotal.toFixed(2)}</As>
    </>
  );
};

export default AmountCell;
