import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MainArea from "./components/events/MainArea";
import BookmarkedEventsContainer from "./components/events/BookmarkedEventsContainer";

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
      <Header
        setBookmarkedEventsAreOpen={setBookmarkedEventsAreOpen}
        bookmarkedEventsAreOpen={bookmarkedEventsAreOpen}
      ></Header>
      {bookmarkedEventsAreOpen && (
        <div className="h-screen z-50">
          <BookmarkedEventsContainer />
        </div>
      )}
      <MainArea
        bookmarkedEventsAreOpen={bookmarkedEventsAreOpen}
        isMobile={isMobile}
      ></MainArea>
    </>
  );
}

export default App;
