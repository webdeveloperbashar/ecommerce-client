const ActionCell = ({ actions, className, as }) => {
  const As = as;
  return (
    <As className={className}>
      {actions.map((action) => (
        <button
          key={action.name}
          className={action.className}
          onClick={action.handler}
        >
          {action.icon}
        </button>
      ))}
    </As>
  );
};

export default ActionCell;