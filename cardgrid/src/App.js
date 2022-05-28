import logo from './logo.svg';
import './App.css';
import data from "./data"
import Card from "./card.js"
import { MdTravelExplore } from 'react-icons/md';

function App() {
    const card= data.map(x=>{
      return(
      <Card 
      title={x.title} 
      description={x.description} 
      location={x.location}
      date={x.date}/>
      )
    })

  return (
    <div className="App">
      <div className="nav"><MdTravelExplore />my travel journal</div>
      {card}
    </div>
  );
}

export default App;
