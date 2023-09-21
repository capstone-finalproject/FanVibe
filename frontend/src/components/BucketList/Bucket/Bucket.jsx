import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

import Card from "../Cards/StandardCard";
import LeftArrow from "../LeftArrow";
import RightArrow from "../RightArrow";

import "./styles.css";

const Bucket = ({ item, onClick }) => {
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const [emblaRef, embla] = useEmblaCarousel({
    align: "center",
    containScroll: "trimSnaps",
    dragFree: true,
  });

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;

    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);

    onSelect();
  }, [embla, onSelect]);

  const { title, data } = item;

  if (!data) return <></>;

  const slides = data.map((cardData, idx) => (
    <div key={`${title}-${idx}`} className="tile embla__slide">
      <Card itemId={`${title}-${idx}'`} data={cardData} onClick={onClick} />
    </div>
  ));

  const content = (
    <>
      <div className="pb-4">
        <h1 className="md:text-2xl lg:text-4xl font-bold">{title}</h1>
      </div>
      <div className="embla relative">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">{slides}</div>
          {prevBtnEnabled && (
            <div className="absolute left-0 arrowContainer">
              <LeftArrow onClick={scrollPrev} />
            </div>
          )}
          {nextBtnEnabled && (
            <div className="absolute right-0 arrowContainer">
              <RightArrow onClick={scrollNext} />
            </div>
          )}
        </div>
      </div>
    </>
  );

  return (
    <div className="pb-0">
      <div className="w-full">{content}</div>
    </div>
  );
};

export default Bucket;
