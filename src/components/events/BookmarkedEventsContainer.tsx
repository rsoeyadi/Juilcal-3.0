import { useSelector } from "react-redux";
import { RootState } from "../../store";
import BookmarkedEventCard from "./BookmarkedEventCard";
import BookmarkedEventIcon from "/bookmarked_event_icon.svg";

const BookmarkedEventsContainer = () => {
  const bookmarkedEvents = useSelector(
    (state: RootState) => state.bookmarkedEvents.bookmarkedEvents
  );
  const allEvents = useSelector(
    (state: RootState) => state.bookmarkedEvents.allEvents
  );
  console.log(allEvents);

  const bookmarkedEventsList = allEvents.filter(
    (event) =>
      bookmarkedEvents[
        event.id
      ] /* match overlapping events between all events + bookmarked events */
  );

  return (
    <div className="max-h-[108px] bg-white z-50 absolute">
      <div className="m-auto max-w-sm grid grid-cols-4 gap-x-3 py-8 px-3 bg-white border border-gray-200 rounded-lg shadow text-[#101828]">
        <img
          src={BookmarkedEventIcon}
          alt="Bookmarked Event"
          className="m-auto w-[48px] h-[48px] text-gray-500"
        />
        <div className="col-span-3">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#667085]">
            Saved Events
          </h5>
          <p className="text-gray-700 font-normal dark:text-gray-400">
            Careful — clearing your browser data will reset your progress!
          </p>
        </div>
      </div>

      {bookmarkedEventsList.map((event) => (
        <BookmarkedEventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default BookmarkedEventsContainer;
