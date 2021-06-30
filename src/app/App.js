import { Helmet } from "react-helmet";
import MobileNavbar from "../components/MobileNavbar";
import Nav from "../components/Nav";
import Routes from "./Routes";

// const navbar = document.querySelector(".desktop__navbar");
// let lastScroll = 0;

// window.addEventListener("scroll", () => {
//   const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   if (scrollTop > lastScroll) {
//     navbar.classList.add("top");
//   } else {
//     navbar.classList.remove("down");
//   }
//   lastScroll = scrollTop;
// });

const App = () => {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <MobileNavbar />
      <Nav />
      <Routes />
    </>
  );
};

export default App;
