import { useCallback } from "react";

import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

import usePreventBodyScroll from "../../../hooks/userPreventBodyScroll";

import Card from "../Cards/StandardCard";
import LeftArrow from '../LeftArrow';
import RightArrow from "../RightArrow";

import "./styles.css";

const repeat = (data) => [].concat(...Array(20).fill(data));

const Bucket = ({ item }) => {
  const { disableScroll, enableScroll } = usePreventBodyScroll();

  const onWheel = useCallback((apiObj, ev) => {
    const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

    if (isThouchpad) {
      ev.stopPropagation();
      return;
    }

    if (ev.deltaY < 0) {
      apiObj.scrollNext();
    } else if (ev.deltaY > 0) {
      apiObj.scrollPrev();
    }
  }, []);

  const { title, data } = item;
  const newData = repeat(data);

  return (
    <div className="p-6 pb-0">
      <div className="pl-4 pb-4 ml-11">
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
      <div
        className="w-full"
        onMouseEnter={disableScroll}
        onMouseLeave={enableScroll}
      >
        <ScrollMenu onWheel={onWheel} LeftArrow={LeftArrow} RightArrow={RightArrow}>
          {newData.map((cardData, idx) => (
            <Card
              key={`${title}-${idx}`}
              itemId={`${title}-${idx}`}
              data={cardData}
            />
          ))}
        </ScrollMenu>
      </div>
    </div>
  );
};

export default Bucket;
