import EventsContainer from "./EventsContainer";
import SearchBar from "./SearchBar";

const MainArea = () => {
  return (
    <div className="relative max-w-screen-xl m-auto">
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
