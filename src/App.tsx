import { useEffect, useState } from "react";
import "./App.css";
import { useSupabaseClient } from "./lib/SupabaseProvider";

export interface Event {
  id: number;
  title: string;
  dateTime: string;
  venue: string;
  link: string;
  imgLink: string;
}

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
      {events?.map((event) => (
        <>
          <li key={event.id}>{event.title}</li>
          <img src={`/img/${event.id}.jpg`} />
        </>
      ))}
    </ul>
  );
}

export default App;
