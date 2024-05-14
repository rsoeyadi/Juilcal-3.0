import { useEffect, useState } from "react";
import OpenBookmark from "/bookmark_border.svg";
import ClosedBookmark from "/bookmark.svg";
import { useDispatch, useSelector } from "react-redux";

import { toggleBookmark } from "../../../store/BookmarkedEvents/bookmarkedEventsSlice";
import { RootState } from "../../../store";

interface BookmarkProps {
  eventId: string;
}

const Bookmark = ({ eventId }: BookmarkProps) => {
  const dispatch = useDispatch();

  // relying on the actual redux state to tell us if it's bookmarked or not
  const isBookmarked = useSelector(
    (state: RootState) => state.bookmarkedEvents.bookmarkedEvents[eventId]
  );

  // Local state to manage bookmark icon, not from redux
  const [bookmark, setBookmark] = useState(
    isBookmarked ? ClosedBookmark : OpenBookmark
  );

  // Effect to update the bookmark icon when the bookmarked status changes
  useEffect(() => {
    setBookmark(isBookmarked ? ClosedBookmark : OpenBookmark);
  }, [isBookmarked]);

  const handleClick = () => {
    dispatch(toggleBookmark(eventId));
  };

  return (
    <button onClick={handleClick}>
      <img src={bookmark} alt="Bookmark" />
    </button>
  );
};

export default Bookmark;
