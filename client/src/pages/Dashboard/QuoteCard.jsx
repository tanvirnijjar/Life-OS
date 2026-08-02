import "./QuoteCard.css";

function QuoteCard() {
  const quotes = [
    {
      quote: "Success is the sum of small efforts repeated every day.",
      author: "Robert Collier",
    },
    {
      quote: "Discipline beats motivation.",
      author: "Jim Rohn",
    },
    {
      quote: "Dream big. Start small. Act now.",
      author: "Robin Sharma",
    },
    {
      quote: "The future depends on what you do today.",
      author: "Mahatma Gandhi",
    },
    {
      quote: "Small progress is still progress.",
      author: "Unknown",
    },
    {
      quote: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson",
    },
  ];

  const randomQuote =
    quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="quote-card">
      <div className="quote-icon">💡</div>

      <p className="quote-text">
        "{randomQuote.quote}"
      </p>

      <h4 className="quote-author">
        — {randomQuote.author}
      </h4>
    </div>
  );
}

export default QuoteCard;