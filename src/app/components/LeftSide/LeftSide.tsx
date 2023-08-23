import { LinkComp } from "../LinksComp/LinkComp";
import { Welcome } from "../Welcome/Welcome";
import "./LeftSide.scss";

export const LeftSide = () => {

  return (
    <div className="left__wrapper">
      <Welcome />
      <LinkComp />
    </div>
  );
};
