import { useEffect, useState } from "react";
import "./App.css";
import { useSupabaseClient } from "./lib/SupabaseProvider";
import { Event } from "./common/types";
import EventCard from "./components/events/EventCard";

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
    <ul>
      {events?.map((event: Event) => (
        <EventCard key={event.id} event={event}></EventCard>
      ))}
    </ul>
  );
}

export default App;
