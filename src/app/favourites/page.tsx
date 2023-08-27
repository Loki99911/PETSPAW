import { ContentContainer } from "../components/ContentContainer/ContentContainer";
import { ContentFavourites } from "../components/ContentFavourites/ContentFavourites";

import { LeftSide } from "../components/LeftSide/LeftSide";
import { RightSide } from "../components/RightSide/RightSide";
import "./../main__wrapper.scss";

export default function Likes() {
  return (
    <main className="main__wrapper">
      <LeftSide />
      <RightSide>
        <ContentContainer>
          <ContentFavourites/>
        </ContentContainer>
      </RightSide>
    </main>
  );
}
