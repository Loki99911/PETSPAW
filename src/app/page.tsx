import { LeftSide } from "./components/LeftSide/LeftSide";
import { RightSide } from "./components/RightSide/RightSide";
import "./main__wrapper.scss";

export default function Home() {
  return (
    <main className="main__wrapper">
      <LeftSide />
      <RightSide></RightSide>
    </main>
  );
}
