import React from "react";
import { Link } from "react-router-dom";

export const EducationTagNav = () => {
  return (
    <nav className={"flex flex-end"}>
      <ul className={"navigation-content"}>
        <li><Link to="/education/amm">amm</Link></li>
        <li><Link to="/education/divergence-loss">Divergence loss</Link></li>
        <li><Link to="/education/hold">Hold</Link></li>
        <li><Link to="/education/provide-liquidity">Provide liquidity</Link></li>
        <li><Link to="/education/stake">Stake</Link></li>
        <li><Link to="/education/xyk">xyk</Link></li>
      </ul>
    </nav>
  );
};
