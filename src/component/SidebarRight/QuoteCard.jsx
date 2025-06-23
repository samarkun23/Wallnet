import { useEffect, useState } from "react";
import axios from 'axios';

export default function QuoteCard() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    // fix the card here make the req from backend from "https://zenquotes.io/api/random" here and fix it 
    axios.get("https://api.quotable.io/random")
      .then(data => {
        console.log(data);
        
        setQuote(data);
        setLoading(false);
      })
      .catch(() => {
        setQuote({ content: "Failed to load quote.", author: "System" });
        setLoading(false);
      });
  }, []);

  return (
    <div className="card bg-white/10 backdrop-blur border border-white/10 text-white shadow-md p-4">
      <h2 className="text-sm text-gray-400 mb-2">💬 Daily Quote</h2>
      {loading ? (
        <div className="animate-pulse text-gray-600">Loading...</div>
      ) : (
        <div>
          <p className="text-lg italic">"{quote.q}"</p>
          <p className="text-right text-sm mt-2 text-gray-400">– {quote.a}</p>
        </div>
      )}
    </div>
  );
}
