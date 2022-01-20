import React from "react";
import { Link } from "react-router-dom";

export const EducationTagNav = () => {
  return (
    <nav>
      <article className={"nav-content overflow-scroll"}>
        <Link to="/education/amm" className={"text-link padding-right-2"}>
          amm
        </Link>
        <Link
          to="/education/divergence-loss"
          className={"text-link padding-right-2"}
        >
          Divergence loss
        </Link>
        <Link to="/education/hold" className={"text-link padding-right-2"}>
          Hold
        </Link>
        <Link
          to="/education/provide-liquidity"
          className={"text-link padding-right-2"}
        >
          Provide liquidity
        </Link>
        <Link to="/education/stake" className={"text-link padding-right-2"}>
          Stake
        </Link>
        <Link to="/education/xyk" className={"text-link padding-right-2"}>
          xyk
        </Link>
      </article>
    </nav>
  );
};
