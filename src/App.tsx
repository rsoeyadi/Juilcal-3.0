import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MainArea from "./components/events/MainArea";
import BookmarkedEventsContainer from "./components/events/BookmarkedEventsContainer";

function App() {
  const [bookmarkedEventsAreOpen, setBookmarkedEventsAreOpen] = useState(false);

  return (
    <>
      <Header
        setBookmarkedEventsAreOpen={setBookmarkedEventsAreOpen}
        bookmarkedEventsAreOpen={bookmarkedEventsAreOpen}
      ></Header>
      {bookmarkedEventsAreOpen && (
          <BookmarkedEventsContainer />
      )}
      <MainArea></MainArea>
    </>
  );
}

export default App;
