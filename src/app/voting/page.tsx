import { LeftSide } from "../components/LeftSide/LeftSide";
import { RightSide } from "../components/RightSide/RightSide";
import "./../main__wrapper.scss";
import { ContentVoting } from "../components/ContentVoting/ContentVoting";

export default function Voting() {
  return (
    <main className="main__wrapper">
      <LeftSide />
      <RightSide>
        <ContentVoting/>
      </RightSide>
    </main>
  );
}
