import { Link } from "@reach/router";

const NavLink = (props) => {
 return <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          color: isCurrent && "#67bc0f",
        },
      };
    }}
  />;
};
export default NavLink;