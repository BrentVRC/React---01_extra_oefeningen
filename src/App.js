import './App.css';
import {CARS, NUMBER_DATA, PERSON_DATA} from "./data/data";
import {Numbers} from "./components/Numbers";
import {Cars} from "./components/Cars";
import {Person, Persons} from "./components/Person";

function App() {
  return (
    <div className="App">

        <Numbers title="Numbers" numbers={NUMBER_DATA}/>
        <Numbers title="Numbers > 6" numbers={NUMBER_DATA.filter(n => n >6)}/>
        <Numbers title="Numbers" numbers={NUMBER_DATA}>{NUMBER_DATA*2}</Numbers>
        <Cars title="Auto's" car={CARS}/>
        <Persons title="Personen" person={PERSON_DATA}/>
        <Persons title="Personen volgens leeftijd" person={PERSON_DATA.sort((a,b) => a.age-b.age)}/>
    </div>
  )
}

export default App;