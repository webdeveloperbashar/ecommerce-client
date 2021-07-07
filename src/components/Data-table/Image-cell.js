const ImageCell = ({ actions, className, as }) => {
  const As = as;
  return (
    <As>
      {actions.map((action, index) => (
        <img src={action.image} key={index + 1} className={className} alt={action.name} />
      ))}
    </As>
  );
};

export default ImageCell;
