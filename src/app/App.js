import { Helmet } from "react-helmet";
import Nav from "../components/Nav";
import Routes from "./Routes";
const App = () => {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <Nav/>
      <Routes/>
    </>
  );
};

export default App;
