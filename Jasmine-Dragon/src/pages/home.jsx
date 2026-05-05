import { useState } from 'react';

function Home({ tea }) {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAskIroh = async () => {
    if (!question.trim()) return;
    setLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_KEY;
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `You are Uncle Iroh from Avatar: The Last Airbender. 
                     The traveler is drinking ${tea?.name || 'tea'}. 
                     Answer the traveler's question with warmth and wisdom, 
                     often using tea as a metaphor. Keep it concise.
                     Question: ${question}`
            }]
          }]
        })
      });

      const data = await res.json();
      
      // Navigate the JSON response to get the text
      if (data.candidates && data.candidates[0].content.parts[0].text) {
        setResponse(data.candidates[0].content.parts[0].text);
      } else {
        throw new Error("Invalid response format");
      }

    } catch (error) {
      console.error("Gemini Error:", error);
      setResponse("Destiny is a funny thing. It seems the spirits have disrupted our connection. Let us try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="iroh-home-container">
      <header className="jasmine-dragon-board">
        <h1>The Jasmine Dragon</h1>
      </header>

      <div className="iroh-layout">
        <div className="iroh-character-section">
          <img 
            src="https://img.icons8.com/color/144/elderly-person.png" 
            alt="Uncle Iroh" 
            className="iroh-portrait" 
          />
          <div className="dialogue-bubble">
            <p>"The {tea?.name || 'tea'} is poured. What weighs on your heart, traveler?"</p>
          </div>
        </div>

        <div className="interaction-area">
          <textarea 
            className="iroh-textarea"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask for wisdom..."
          />
          <button 
            className="pour-tea-btn" 
            onClick={handleAskIroh} 
            disabled={loading}
          >
            {loading ? "Steeping Wisdom..." : "Pour Tea & Listen"}
          </button>

          {response && (
            <div className="iroh-response-box fade-in">
              <p className="wisdom-text">{response}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;