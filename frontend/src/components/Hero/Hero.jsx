import { useCallback, useEffect, useState } from "react";

import "./index.css";

const Hero = () => {
  const [featuredEvent, setFeaturedEvent] = useState({});

  const fetchFeaturedEvent = useCallback(async () => {
    try {
      const event = await fetch("/api/concert/featuredEvent");
      setFeaturedEvent(event);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    // fetchFeaturedEvent();
  }, []);

  return (
    <section className="hero w-full relative mb-6">
      <div className="imgContainer absolute inset-0">
        <img src="https://www.cabletv.com/app/uploads/2023/04/Witcher1200x630.png" alt="Witcher" className="absolute"/>
        <div className="bottomGradient absolute w-full" />
      </div>
      <div className="flex flex-col absolute mr-6 p-6 bottom-0">
        <h1 className="text-5xl text-white">{featuredEvent.title ?? "This is a test"}</h1>
        <h2 className="mt-4">{featuredEvent?.artist?.bio ?? "IN A WORLD WHERE"}</h2>
      </div>
    </section>
  );
};

export default Hero;
