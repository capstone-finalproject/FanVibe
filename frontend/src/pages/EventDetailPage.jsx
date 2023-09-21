import { useContext, useEffect, useState, useCallback, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

import UserContext from "../contexts/current-user-context";
import Bucket from "../components/BucketList/Bucket";
import Comment from "../components/Comment/Comment";

import { fetchHandler, getPatchOptions, getPostOptions } from "../utils";

const EventDetailPage = () => {
  const [content, setContent] = useState({});
  const [relatedEvents, setRelatedEvents] = useState({});
  const [comments, setComments] = useState([]);
  const [currentCommentId, setCurrentCommentId] = useState(null);
  const [comment, setComment] = useState("");
  const { currentUser } = useContext(UserContext);
  const { id: eventId } = useParams();
  const navigate = useNavigate();

  const textBoxRef = useRef(null);

  const fetchConcertDetail = useCallback(async () => {
    try {
      const [res] = await fetchHandler(`/api/event/${eventId}`);

      if (res) {
        const [related] = await fetchHandler(
          `/api/event?genre=${encodeURIComponent(
            res?.genre
          )}&excludedEventId=${eventId}`
        );
        const [concertComments] = await fetchHandler(
          `/api/comment?eventId=${eventId}`
        );
        if (related) {
          setRelatedEvents({ data: related, title: "Related Events" });
        }

        setContent(res);
        setComments(concertComments);
      }
    } catch (err) {
      console.error(err);
    }
  }, [eventId]);

  useEffect(() => {
    fetchConcertDetail();
  }, [fetchConcertDetail]);

  const date = new Date(content.date);
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleReplyToComment = (threadId) => {
    textBoxRef.current.focus();
    setCurrentCommentId(threadId);
  };

  const handleLikeComment = async (commentId, likes) => {
    try {
      await fetchHandler(
        `/api/comment/${commentId}/like`,
        getPatchOptions({
          likes,
        }),
      );
    } catch (err) {
      console.error(err);
    }
  };

  const handleTextChange = (event) => {
    const text = event.target.value;
    setComment(text);
  };

  const onSubmitComment = async () => {
    try {
      const [res] = await fetchHandler(
        "/api/comment/",
        getPostOptions({
          ...(currentCommentId && { threadId: currentCommentId }),
          text: comment,
          eventId: content.id,
        }),
      );

      if (!currentCommentId) {
        setComments([res, ...comments]);
      } else {
        const updatedList = comments.map((item) => {
          if (item.id === currentCommentId) {
            item.replies.unshift(res);
          }

          return item;
        });

        setComments(updatedList);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setCurrentCommentId(null);
      setComment('');
    }
  };

  const handleOnClick = useCallback(
    (id) => {
      navigate(`/event/${id}`);
    },
    [navigate],
  );

  const navigateBackToConcert = useCallback(() => {
    navigate(`/concert/${content.concertId}`);
  }, [navigate, content]);

  if (!Object.keys(content).length) return <></>;

  return (
    <section className="mx-6">
      <div className="backToConcertButton p-6">
        <button className="" onClick={navigateBackToConcert}>Back to Concert</button>
      </div>
      <div className="mx-auto w-full flex flex-row relative">
        <div className={`containerImage w-2/4`}>
          <img
            src={content?.thumbnail ?? ""}
            alt={content?.name ?? ""}
            className="rounded-md"
          />
        </div>
        <div className="pl-6  detailContentContainer flex flex-col w-2/4">
          <h1 className="text-6xl font-bold">{content?.name ?? ""}</h1>
          <h2 className="text-lg mt-4 font-medium">{content.location}</h2>
          <h2 className="date">{formattedDate}</h2>

          <div className="mt-8">
            <h1 className="text-3xl font-bold">{content.artist.name}</h1>
            <h2 className="mt-4">{content?.artist?.bio ?? ""}</h2>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between mt-16">
        <div className="w-1/2 pl-6">
          <h1 className="text-3xl font-bold">Venue</h1>
          <div className="venueContentContainer">
            <h1 className="mt-4 text-4xl font-bold">
              {content?.venue?.name ?? ""}
            </h1>
            <h2 className="mt-4 font-semibold">
              {`${content?.venue?.address ?? ""}, ${content.venue.city}, ${
                content.venue.state ?? ""
              } ${content.venue.postalCode}, ${content?.venue?.country ?? ""}`}
            </h2>
            <a href={content.venue.website} target="_blank" rel="noreferrer">
              <button className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full mt-4">
                Website
              </button>
            </a>
          </div>
        </div>

        <div className="w-1/2 pl-8">
          {content.lineUp && content?.lineUp.length > 0 && (
            <>
              <h1 className="text-3xl font-bold">Line Up</h1>
              <div className="lineupContainer">
                <ul className="relative">
                  {content.lineUp.map((artist) => (
                    <li key={artist.id} className="mt-4 line relative">
                      <span className="text-lg">{artist.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="mt-8 pt-8 border-solid border-t border-slate-700">
        <h1 className="text-3xl font-bold">Comments</h1>
        {!!currentUser && (
          <div className="mx-4">
            <textarea
              placeholder="Comment here..."
              className="w-full bg-transparent mt-4 focus:ring-0 focus:outline-none"
              type="textbox"
              ref={textBoxRef}
              onChange={handleTextChange}
              value={comment}
            />
            <button onClick={onSubmitComment} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Comment</button>
          </div>
        )}

        {comments.length > 1 ? (
          <div className="commentsContainer">
            <div className="w-full">
              {comments.map((item) => (
                <div
                  key={`Events-${item.id}`}
                  className="w-full flex flex-col border-solid border-b border-white-700 mt-8 p-6 pt-0"
                >
                  <div className="flex flex-col">
                    <Comment
                      item={item}
                      handleReplyToComment={handleReplyToComment}
                      handleLikeComment={handleLikeComment}
                    />
                  </div>
                  <div className="flex flex-col pl-8">
                    {item.replies.map((reply) => (
                      <div key={reply.id} className="mt-4">
                        <Comment
                          item={reply}
                          handleReplyToComment={() => {}}
                          showReply={false}
                          handleLikeComment={handleLikeComment}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="buttonContainer"></div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-row justify-center w-full mt-8">
            <h2 className="text-2xl">
              {currentUser ? "Be the first to comment!" : "Sign in to comment!"}
            </h2>
          </div>
        )}
      </div>
      <div className="bucketContainer mt-12">
        {!!relatedEvents && (
          <Bucket item={relatedEvents} onClick={handleOnClick} />
        )}
      </div>
    </section>
  );
};

export default EventDetailPage;
