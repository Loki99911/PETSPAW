"use client";
import Image from "next/image";
import "./Welcome.scss";

export const Welcome = () => {
  return (
    <div className="WelcomeWrapper">
      <p className="WelcomeMainText">
        Hi!
        <Image src={"/hand.png"} alt="hand" width={44} height={38} />
      </p>
      <p className="WelcomeText">Welcome to MacPaw Bootcamp 2023</p>
      <h2 className="WelcomeTitle">Lets start using The Cat API</h2>
    </div>
  );
};
