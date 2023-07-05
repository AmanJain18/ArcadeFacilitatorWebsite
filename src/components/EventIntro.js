import React from "react";

const EventIntro = ({ image, title, content }) => {
  return (
    <div className="event-intro flex-col flex md:flex-row justify-center items-center text-center md:gap-8 gap-12 mt-12 md:mt-16 md:max-h-[400px]">
      <div className="event-intro-image md:w-1/2 flex justify-center bg-cover">
        <img
          className="rounded-lg lg:max-h-[400px] xs:max-w-[220px] md:max-w-[280px] w-[180px] md:w-auto"
          src={image}
          alt="Event"
        />
      </div>
      <div className="event-intro-text md:flex-1 justify-between text-justify md:w-1/2">
        <h2 className="text-[#A5BE00] text-2xl md:text-3xl lg:text-4xl text-center md:text-start">
          {title}
        </h2>
        <p className="text-red-500">{content}</p>
      </div>
    </div>
  );
};

export default EventIntro;
