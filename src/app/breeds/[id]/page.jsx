import { LeftSide } from "@/app/components/LeftSide/LeftSide";
import "./../../main__wrapper.scss";
import { RightSide } from "@/app/components/RightSide/RightSide";
import { ContentContainer } from "@/app/components/ContentContainer/ContentContainer";
import { ContentBreedById } from "@/app/components/ContentBreedById/ContentBreedById";

export default function BreedByID({ params }) {
  const { id } = params;
  return (
    <main className="main__wrapper">
      <LeftSide />
      <RightSide>
        <ContentContainer>
          <ContentBreedById breedId={id} />
        </ContentContainer>
      </RightSide>
    </main>
  );
}
