import { useState, useEffect } from 'react';
import Menu from './components/menu.jsx';
import TeaAnimation from './components/TeaAnimation.jsx';
import Home from './pages/home.jsx';
import './App.css';


function App() {
  const [stage, setStage] = useState('menu');
  const [selectedTea, setSelectedTea] = useState(null);

  const handleTeaSelect = (tea) => {
    setSelectedTea(tea);
    setStage('brewing');
  };

  useEffect(() => {
    if (stage === 'brewing') {
      const timer = setTimeout(() => setStage('shop'), 5000);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  return (
    <div 
      className="app-container" 
      style={{ 
        backgroundColor: selectedTea ? selectedTea.theme : '#f5f5f4',
        color: selectedTea ? selectedTea.textColor : '#444',
        transition: 'all 1s ease' 
      }}
    >
      {stage === 'menu' && <Menu onSelect={handleTeaSelect} />}

      {stage === 'brewing' && <TeaAnimation tea={selectedTea} />}

      {stage === 'shop' && (
        <div className="iroh-chat-container">
           <Home tea={selectedTea} />
           <button onClick={() => setStage('menu')}>Back to Menu</button>
        </div>
      )}
    </div>
  );
}





export default App;