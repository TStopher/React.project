import './App.css';
import Card from './Components/Card';
import Data from './Data';
import Navbar from './Components/Navbar';

function App() {
  const cards = Data.map(item => {
    return (
      <Card 
      key={item.id}
      {...item}
      />
    )
  })
  return (
    <div className="App">
      <Navbar/>
    {cards}
    </div>
  );
}

export default App;
