import { ContentContainer } from "../components/ContentContainer/ContentContainer";
import { ContentGallery } from "../components/ContentGallery/ContentGallery";
import { LeftSide } from "../components/LeftSide/LeftSide";
import { RightSide } from "../components/RightSide/RightSide";
import "./../main__wrapper.scss";

export default function Gallery() {
  return (
    <main className="main__wrapper">
      <LeftSide />
      <RightSide>
        <ContentContainer>
          <ContentGallery />
        </ContentContainer>
      </RightSide>
    </main>
  );
}
