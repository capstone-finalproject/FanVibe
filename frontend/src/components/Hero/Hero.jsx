import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { fetchHandler } from "../../utils";

import "./index.css";

const Hero = () => {
  const [featuredEvent, setFeaturedEvent] = useState({});
  const navigate = useNavigate();

  const fetchFeaturedEvent = useCallback(async () => {
    try {
      const [event] = await fetchHandler("/api/event/featuredEvent");

      setFeaturedEvent(event);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchFeaturedEvent();
  }, [fetchFeaturedEvent]);

  const handleEventClick = useCallback(() => {
    navigate(`/event/${featuredEvent.id}`);
  }, [navigate, featuredEvent]);

  if (!Object.keys(featuredEvent).length) return <></>;

  return (
    <section className="hero w-full relative mb-6">
      <div className="imgContainer absolute inset-0">
        <img src={featuredEvent.thumbnail} alt="Witcher" className="absolute"/>
        <div className="bottomGradient absolute w-full" />
      </div>
      <div className="flex flex-col absolute mr-6 px-16 bottom-10">
        <h2 className="text-4xl text-white">{featuredEvent.genre ?? ""}</h2>
        <h1 className="text-5xl text-white mt-4">{featuredEvent.name ?? ""}</h1>

        <div className="buttonContainer mt-6 w-full">
          <button onClick={handleEventClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            See Event
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
