import { ContentBreeds } from "../components/ContentBreeds/ContentBreeds";
import { ContentContainer } from "../components/ContentContainer/ContentContainer";
import { LeftSide } from "../components/LeftSide/LeftSide";
import { RightSide } from "../components/RightSide/RightSide";
import "./../main__wrapper.scss";

export default function Breeds() {
  return (
    <main className="main__wrapper">
      <LeftSide />
      <RightSide>
        <ContentContainer>
          <ContentBreeds />
        </ContentContainer>
      </RightSide>
    </main>
  );
}
