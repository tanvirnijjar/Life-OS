import { useEffect, useState } from "react";
import "./Calendar.css";
import EventCard from "./EventCard";

const Calendar = () => {
  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem("lifeos-events");
    return saved ? JSON.parse(saved) : [];
  });

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("lifeos-events", JSON.stringify(events));
  }, [events]);

  const addEvent = () => {
    if (!title.trim() || !date) return;

    const newEvent = {
      id: Date.now(),
      title,
      date,
    };

    setEvents([newEvent, ...events]);
    setTitle("");
    setDate("");
  };

  const deleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(search.toLowerCase()) ||
      event.date.includes(search)
  );

  return (
    <div className="calendar-page">
      <h1>📅 Calendar</h1>

      <div className="event-form">
        <input
          type="text"
          placeholder="Event title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button onClick={addEvent}>Add Event</button>
      </div>

      <input
        className="search-bar"
        type="text"
        placeholder="Search events..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="events-grid">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onDelete={deleteEvent}
            />
          ))
        ) : (
          <p className="empty-state">No events found.</p>
        )}
      </div>
    </div>
  );
};

export default Calendar;
