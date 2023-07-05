import React from 'react'
import { images } from '../static'
import { WrapperComponent, Hero, EventIntro, FacilitatorsSection, Footer } from "../components/index.js";


const Home = () => {
    return (
        <WrapperComponent>
            <Hero />
            <EventIntro
                image={images.arcadegame}
                title={"About the Event"}
                content={
                    "The Arcade Facilitator Program is Google's always-on, no-cost initiative designed to help students, professionals and even experts acquire Google Cloud skills. They also get a chance to accumulate points which can then be redeemed for swags and prizes at the Prize Counter. The Program is currently in its second cohort."
                }
            />
            <EventIntro
                image={images.profilePic}
                title={"Akshit Jain"}
                className={"md:mt-24 md:flex-row-reverse"}
                content={
                    "Akshit Jain is the Higher Ed Program Manager at Google Cloud India. He has 3+ years of experience managing many online and offline programs such as the #GoogleCloudReady Program, the GCCP Program, the Google Cloud Career Fair, and others. Currently, he is managing the Arcade Facilitator Program along with his team of Googlers."
                }
            />
            <FacilitatorsSection />
            <Footer />
        </WrapperComponent>
    )
}

export default Home