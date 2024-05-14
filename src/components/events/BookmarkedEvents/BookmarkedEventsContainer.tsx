import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import BookmarkedEventCard from "./BookmarkedEventCard";
import BookmarkedEventIcon from "/bookmarked_event_icon.svg";

const BookmarkedEventsContainer = () => {
  const bookmarkedEvents = useSelector(
    (state: RootState) => state.bookmarkedEvents.bookmarkedEvents
  );
  const allEvents = useSelector(
    (state: RootState) => state.bookmarkedEvents.allEvents
  );

  const bookmarkedEventsList = allEvents.filter(
    (event) => bookmarkedEvents[event.id]
  );
  console.log({ bookmarkedEventsList });

  return (
    <div className="bg-white p-4 rounded-lg shadow-md max-w-md mx-auto">
      <div className="flex items-center space-x-3 pb-4 border-b border-gray-200">
        <img
          src={BookmarkedEventIcon}
          alt="Bookmarked Event"
          className="w-12 h-12 text-gray-500"
        />
        <div>
          <h5 className="text-2xl font-bold tracking-tight text-[#667085]">
            Saved Events
          </h5>
          <p className="text-gray-700 font-normal">
            Careful — clearing your browser data will reset your progress!
          </p>
        </div>
      </div>

      <div className="space-y-4 mt-4">
        {bookmarkedEventsList.length > 0 ? (
          bookmarkedEventsList.map((event) => (
            <BookmarkedEventCard key={event.id} event={event} />
          ))
        ) : (
          <p className="text-gray-500">No saved events found.</p>
        )}
      </div>
    </div>
  );
};

export default BookmarkedEventsContainer;
