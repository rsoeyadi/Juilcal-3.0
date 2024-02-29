import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Event } from "../../common/types";
import EventCard from "./EventCard";
import { useSupabaseClient } from "../../lib/SupabaseProvider";
import { RootState } from "../../store";
import { addEvents } from "../../store/BookmarkedEvents/bookmarkedEventsSlice";

function EventsContainer() {
  const supabase = useSupabaseClient();
  const [events, setEvents] = useState<Event[]>([]);
  const searchValue = useSelector(
    (state: RootState) => state.search.searchQuery
  );
  const [flag, setFlag] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getEvents() {
      try {
        let query = supabase.from("Events").select();
        if (searchValue != "") {
          const searchWords = searchValue.split(" ");
          searchWords.forEach((word) => {
            query = query.or(`title.ilike.%${word}%`);
          });
        }
        const { data, error } = await query;
        if (error) throw error;

        if (data) {
          setEvents(data);
          if (flag == 0) {
            dispatch(addEvents(data));
            setFlag(1);
          }
        }
      } catch (error) {
        console.error("Failed to fetch events:", error);
        setEvents([]);
      }
    }

    getEvents();
  }, [searchValue, supabase]);

  return (
    <div>
      <ul
        className="grid grid-flow-row-dense"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(402px, 1fr))" }}
      >
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </ul>
    </div>
  );
}

export default EventsContainer;
