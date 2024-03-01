import EventsContainer from "./EventsContainer";
import SearchBar from "./SearchBar";

interface MainAreaProps {
  bookmarkedEventsAreOpen: boolean;
  isMobile: boolean;
}
const MainArea = ({ bookmarkedEventsAreOpen, isMobile }: MainAreaProps) => {
  return (
    <div
      className={`${
        bookmarkedEventsAreOpen && isMobile ? "hidden" : ""
      } relative max-w-screen-xl m-auto`}
    >
      <div className="min-w-[402px]">
        <SearchBar />
      </div>
      <div className="max-w-screen-xl">
        <EventsContainer />
      </div>
    </div>
  );
};

export default MainArea;
