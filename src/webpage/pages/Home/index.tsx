import React from "react";
import "./index.css";
import Social from "../../components/Social";
import Data from "../../components/Data";
import ScrollDown from "../../components/ScrollDown";
import { useMediaQuery } from "usehooks-ts";
import { HomeContent, HomeImg, HomeContainer } from "./styles";

export default function Home() {
  const largeDevices = useMediaQuery("(max-width: 992px)");
  const mediumDevices = useMediaQuery("(max-width: 768px)");
  const smallMediumDevices = useMediaQuery("(max-width: 576px)");
  const smallDevices = useMediaQuery("(max-width: 350px)");

  return (
    <section className="home section" id="home">
      <HomeContainer>
        <HomeContent largeDevices={largeDevices} mediumDevices={mediumDevices}>
          <Social />
          <HomeImg
            largeDevices={largeDevices}
            mediumDevices={mediumDevices}
            smallDevices={smallDevices}
          />
          <Data />
        </HomeContent>

        <ScrollDown />
      </HomeContainer>
    </section>
  );
}
