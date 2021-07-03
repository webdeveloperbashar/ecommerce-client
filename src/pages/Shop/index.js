import React from "react";
import { useBreakpoints } from "react-device-breakpoints";
import Nav from "../../components/Nav";

const Index = () => {
  // device breakpoint
  const device = useBreakpoints();
  return <>{device.isDesktop && <Nav isShow />}</>;
};

export default Index;
