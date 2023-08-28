import { ContentContainer } from "../components/ContentContainer/ContentContainer";
import { ContentSearch } from "../components/ContentSearch/ContentSearch";
import { LeftSide } from "../components/LeftSide/LeftSide";
import { RightSide } from "../components/RightSide/RightSide";
import "./../main__wrapper.scss";

export default function Search() {

  return (
    <main className="main__wrapper">
      <LeftSide />
      <RightSide>
        <ContentContainer>
          <ContentSearch />
        </ContentContainer>
      </RightSide>
    </main>
  );
}
