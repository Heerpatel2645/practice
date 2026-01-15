import "./App.css";
import Card from "./components/Card.jsx";

function App() {
  return (
    <div className="container">
      <h1>Coffee</h1>
      <div className="cards">
        <Card
          title="Buy tea and snacks"
          buttonText="join now"
          imageurl="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        <Card
          title="cold coffee and snacks"
          imageurl="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        <Card
          title="Somewhere in Europe"
          imageurl="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
      </div>
    </div>
  );
}

export default App;
