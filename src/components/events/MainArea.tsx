import EventsContainer from "./EventsContainer";
import SearchBar from "./SearchBar";

const MainArea = () => {
  return (
    <div className="max-w-screen-xl m-auto">
      <SearchBar />
      <EventsContainer />
    </div>
  );
};

export default MainArea;
