import { useState } from 'react';

function App() {
  const [text, setTexst] = useState("Ana");

  const toggleText = () => {
    if (text === "Ana") {
      setTexst("Topličanec")
    } else {
      setTexst("Ana")
    }
  }

 const label = text === "Ana" ? "Ime" : "Prezime"

  return (
   <div>
<span onMouseOver={toggleText} onMouseOut={toggleText}>{label}: {text}</span>
   </div>
  );
}

export default App;
