import { useState } from "react";
import OpenBookmark from "/bookmark_border.svg";
import ClosedBookmark from "/bookmark.svg";
const Bookmark = () => {
  const [bookmark, setBookmark] = useState(OpenBookmark);
  return (
    <button
      onClick={() =>
        setBookmark(bookmark === OpenBookmark ? ClosedBookmark : OpenBookmark)
      }
    >
      <img src={bookmark} alt="" />
    </button> 
  );
};

export default Bookmark;
