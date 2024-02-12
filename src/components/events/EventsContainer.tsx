import { useEffect, useState } from "react";
import { Event } from "../../common/types";
import EventCard from "./EventCard";
import { useSupabaseClient } from "../../lib/SupabaseProvider";
function App() {
  const supabase = useSupabaseClient();
  const [events, setEvents] = useState<Event[] | null>(null);

  useEffect(() => {
    getEvents();
  }, []);

  async function getEvents() {
    const { data } = await supabase.from("Events").select();
    setEvents(data);
  }

  return (
    <div className="max-w-screen-xl m-auto">
      <ul
        className="grid grid-flow-row-dense"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(402px, 1fr))" }}
      >
        {events?.map((event: Event) => (
          <EventCard key={event.id} event={event}></EventCard>
        ))}
      </ul>
    </div>
  );
}

export default App;
