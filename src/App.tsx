import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MainArea from "./components/events/MainArea";
import BookmarkedEventsContainer from "./components/events/BookmarkedEvents/BookmarkedEventsContainer";
import FiltersContainer from "./components/events/FilterPickers/FiltersContainer";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

function App() {
  const [bookmarkedEventsAreOpen, setBookmarkedEventsAreOpen] = useState(false);
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Header
          setBookmarkedEventsAreOpen={setBookmarkedEventsAreOpen}
          bookmarkedEventsAreOpen={bookmarkedEventsAreOpen}
        ></Header>
        {bookmarkedEventsAreOpen && (
          <div className="h-screen z-50 p-2">
            <BookmarkedEventsContainer />
          </div>
        )}
        {<FiltersContainer />}
        {/* <MainArea
        bookmarkedEventsAreOpen={bookmarkedEventsAreOpen}
        isMobile={isMobile}
      ></MainArea> */}
      </LocalizationProvider>
    </>
  );
}

export default App;
