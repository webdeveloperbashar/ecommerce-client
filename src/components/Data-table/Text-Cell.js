const TextCell = ({ text, className, as, input, actions }) => {
  const As = as;
  const Input = input;
  return (
    <>
      {As && <As className={className}>{text}</As>}
      {Input && (
        <>
          <div className="quantity qnty">
            {actions.map((action) => (
              <button
                key={action.name}
                className={action.className}
                onClick={action.handler}
              >
                {action.icon}
              </button>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default TextCell;
