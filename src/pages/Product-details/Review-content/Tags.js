import { Link } from "@reach/router";
const Tags = ({ productTags }) => {
  return (
    <div className="tags__wrapper">
      {productTags?.map((tag) => (
        <Link to={`/searchByTag/${tag}`}>{tag}</Link>
      ))}
    </div>
  );
};

export default Tags;
