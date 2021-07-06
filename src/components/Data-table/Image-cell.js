const ImageCell = ({ actions, className, as }) => {
  const As = as;
  return (
    <As>
      {actions.map((action) => (
        <img src={action.image} className={className} alt={action.name} />
      ))}
    </As>
  );
};

export default ImageCell;
