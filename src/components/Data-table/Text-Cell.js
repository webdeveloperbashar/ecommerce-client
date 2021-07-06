const TextCell = ({ text, className, as }) => {
  const As = as;
  return <As className={className}>{text}</As>;
};

export default TextCell;
