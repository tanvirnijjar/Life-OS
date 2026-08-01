import "./EventCard.css";

const EventCard = ({ event, onDelete }) => {
  return (
    <div className="event-card">
      <h3>{event.title}</h3>

      <p>
        <strong>Date:</strong> {event.date}
      </p>

      <button
        className="delete-btn"
        onClick={() => onDelete(event.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default EventCard;