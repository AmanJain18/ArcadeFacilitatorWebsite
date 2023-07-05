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
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus lacus id sapien ultricies, vitae blandit odio suscipit. Morbi vitae non metus tristique varius. In lobortis lacus eu tincidunt efficitur. Sed scelerisque ante sed consectetur interdum. Suspendisse potenti. Donec at sollicitudin nulla. Duis eu fermentum metus."
          }
        />
        <EventIntro
          image={ProfilePic}
          title={"Akshit Jain"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus lacus id sapien ultricies, vitae blandit odio suscipit. Morbi vitae non metus tristique varius. In lobortis lacus eu tincidunt efficitur. Sed scelerisque ante sed consectetur interdum. Suspendisse potenti. Donec at sollicitudin nulla. Duis eu fermentum metus."
          }
        />
        <FacilitatorsSection />
      </WrapperComponent>
      <Footer />
    </div>
  );
};

export default App;
