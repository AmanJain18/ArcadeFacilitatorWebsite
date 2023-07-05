import React from "react";
import HeroBanner from "./components/Hero";
import EventIntro from "./components/EventIntro";
import FacilitatorsSection from "./components/FacilitatorsSection";
import Footer from "./components/Footer";
import "./styles/styles.css";
import ProgramImg from "./assets/arcadegame.png";
import ProfilePic from "./assets/ProfilePic.jpeg";
import WrapperComponent from "./components/WrapperComponent";

const App = () => {
  return (
    <div>
      <WrapperComponent>
        <HeroBanner />
        <EventIntro
          image={ProgramImg}
          title={"About the Event"}
          content={
            "The Arcade Facilitator Program is Google's always-on, no-cost initiative designed to help students, professionals and even experts acquire Google Cloud skills. They also get a chance to accumulate points which can then be redeemed for swags and prizes at the Prize Counter. The Program is currently in its second cohort."
          }
        />
        <EventIntro
          image={ProfilePic}
          title={"Akshit Jain"}
          content={
            "Akshit Jain is the Higher Ed Program Manager at Google Cloud India. He has 3+ years of experience managing many online and offline programs such as the #GoogleCloudReady Program, the GCCCP Program, the Google Cloud Career Fair, and others. Currently, he is managing the Arcade Facilitator Program along with his team of Googlers"
          }
        />
        <FacilitatorsSection />
      </WrapperComponent>
      <Footer />
    </div>
  );
};

export default App;
