import { useSelector } from "react-redux";
import { Event } from "../../common/types";
import { RootState } from "../../store";
import { useEffect, useState } from "react";
import { useSupabaseClient } from "../../lib/SupabaseProvider";
import BookmarkedEventCard from "./BookmarkedEventCard";

const BookmarkedEventsContainer = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const bookmarkedEvents = useSelector(
    (state: RootState) => state.bookmarkedEvents.events
  );
  const supabase = useSupabaseClient();

  useEffect(() => {
    async function getEvents() {
      try {
        let query = supabase.from("Events").select();
        const { data, error } = await query;
        if (error) throw error;

        setEvents(data || []);
      } catch (error) {
        console.error("Failed to fetch events:", error);
        setEvents([]);
      }
    }

    getEvents();
  }, [supabase]);

  const bookmarkedEventsList = events.filter(
    (event) =>
      bookmarkedEvents[
        event.id
      ] /* match overlapping events between all events + bookmarked events */
  );

  return (
    <div>
      {bookmarkedEventsList.map((event) => (
        <BookmarkedEventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default BookmarkedEventsContainer;
