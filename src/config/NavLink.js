import { Link } from "@reach/router";

const NavLink = (props) => {
 return <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          color: isCurrent && "#A8B324",
        },
      };
    }}
  />;
};
export default NavLink;