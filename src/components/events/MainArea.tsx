import BookmarkedEventsContainer from "./BookmarkedEventsContainer";
import EventsContainer from "./EventsContainer";
import SearchBar from "./SearchBar";

const MainArea = () => {
  return (
    <div className="max-w-screen-xl m-auto">
      <div className="min-w-[402px]">
        <SearchBar />
      </div>
      <div className="max-w-screen-xl">
        <EventsContainer />
      </div>
      <BookmarkedEventsContainer />
    </div>
  );
};

export default MainArea;
