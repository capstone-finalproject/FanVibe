import { useEffect, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Bucket from "../components/BucketList/Bucket";

import { fetchHandler } from "../utils";

const ConcertDetailPage = () => {
  const [content, setContent] = useState({});
  const [events, setEvents] = useState([]);
  const [relatedConcerts, setRelatedConcerts] = useState({});
  const { id: concertId } = useParams();
  const navigate = useNavigate();

  const fetchConcertDetail = useCallback(async () => {
    try {
      const [res] = await fetchHandler(`/api/concert/${concertId}`);

      if (res) {
        const [eventResponse] = await fetchHandler(
          `/api/event?concertId=${concertId}`,
        );
        const [related] = await fetchHandler(
          `/api/concert?genre=${encodeURIComponent(
            res.genre,
          )}&excludedConcertId=${concertId}`,
        );
        setContent(res);
        setEvents(eventResponse);
        setRelatedConcerts({ data: related, title: "Related Concerts" });
      }
    } catch (err) {
      console.error(err);
    }
  }, [concertId]);

  useEffect(() => {
    fetchConcertDetail();
  }, [fetchConcertDetail]);

  const handleEventClick = useCallback(
    (event) => {
      navigate(`/event/${event.target.value}`);
    },
    [navigate],
  );

  const handleRelatedConcertClick = useCallback(
    (id) => {
      navigate(`/concert/${id}`);
    },
    [navigate],
  );

  console.log({ relatedConcerts });

  return (
    <section className="mx-6 container mx-auto">
      <div className="mx-auto w-full flex flex-col">
        <div className="containerImage flex justify-center">
          <img
            src={content?.thumbnail ?? ""}
            alt={content?.name ?? ""}
            className="rounded-md w-2/4 h-2/4"
          />
        </div>
        <div className="p-6 detailContentContainer flex flex-col">
          <h1 className="text-6xl font-bold">{content?.name ?? ""}</h1>
          <h2 className="text-4xl mt-4 font-semibold">{content.genre}</h2>

          <div className="mt-12">
            <h2 className="mb-6 text-3xl font-bold">Events</h2>
            {!!events && (
              <div className="w-full">
                {events.map((item) => {
                  const date = new Date(item.date);
                  const formattedDate = date.toLocaleDateString("en-US", {
                    dateStyle: "medium",
                  });

                  const day = date.toLocaleDateString("en-US", {
                    weekday: "short",
                  });

                  const time = date.toLocaleTimeString("end-US", {
                    timeStyle: "short",
                  });

                  return (
                    <div
                      key={`Events-${item.id}`}
                      className="container w-full flex flex-row border-solid border-b border-white-900 mt-8 p-6 pt-0"
                    >
                      <div className="leftContainer flex flex-row mr-4">
                        <div className="flex justify-center align-center">
                          <img
                            src={item.thumbnail}
                            alt={item.name}
                            className="w-40 h-20"
                          />
                        </div>
                        <div className="dateContainer ml-6">
                          <h1 className="date text-lg font-bold">
                            {formattedDate}
                          </h1>
                          <h2>{`${day} - ${time}`}</h2>
                        </div>
                      </div>
                      <div className="grow flex flex-col pl-6">
                        <h2 className="font-bold">{item.name}</h2>
                        <p className="">{`${item?.venue?.name} - ${
                          item?.venue?.city
                        } ${item?.venue?.state && `, ${item.venue.state}`}`}</p>
                      </div>
                      <div className="buttonContainer">
                        <button
                          onClick={handleEventClick}
                          value={item.id}
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                          See Event
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="bucketContainer mt-12 p-6 border-solid border-t border-slate-600">
        {relatedConcerts.data && relatedConcerts.data.length > 0 && (
          <Bucket item={relatedConcerts} onClick={handleRelatedConcertClick} />
        )}
      </div>
    </section>
  );
};

export default ConcertDetailPage;
