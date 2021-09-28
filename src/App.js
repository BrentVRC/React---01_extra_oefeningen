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
        <Numbers title="Numbers * 2" numbers={NUMBER_DATA.map(n => n*2)}/>
        <Cars title="Auto's" car={CARS}/>
        <Persons title="Personen" person={PERSON_DATA}/>
        <Persons title="Personen volgens leeftijd" person={PERSON_DATA.sort((a,b) => a.age - b.age)}/>
        <Numbers title="Leeftijden van de Personen" numbers={PERSON_DATA.map(n => n.age)}/>
    </div>
  )
}

export default App;