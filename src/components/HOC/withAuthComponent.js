import { Redirect } from "react-router-dom";
import getDataFromLocalhost from "../../config/GetLocalhostData";

const withAuthComponent = (OriginalComponent) => {
  const NewComponent = () => {
    return getDataFromLocalhost("user") ? (
      <OriginalComponent />
    ) : (
      <Redirect to="/login" />
    );
  };
  return NewComponent;
};

export default withAuthComponent;
