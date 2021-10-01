import './App.css';
import {CARS, CITY_DATA, NUMBER_DATA, PERSON_DATA} from "./data/data";
import {Numbers} from "./components/Numbers";
import {Cars} from "./components/Cars";
import {Persons} from "./components/Person";
import {Cities} from "./components/City";

function App() {

    function calculateCities(personData){
        const cities = personData.map(p => p.city);
        const uniqueCities = [...new Set(cities)];
        const personsPerCityObject = uniqueCities.map(city => ({
            name: city ,
            numberOfPersons: personData.reduce((intermediateResult,p) => intermediateResult += (p.city === city ? 1 : 0),0)}))
        return personsPerCityObject
    }
  return (

    <div className="App">
        <Numbers title="Numbers" numbers={NUMBER_DATA}/>
        <Numbers title="Numbers > 6" numbers={NUMBER_DATA.filter(n => n >6)}/>
        <Numbers title="Numbers * 2" numbers={NUMBER_DATA.map(n => n*2)}/>
        <Cars title="Auto's" car={CARS}/>
        <Persons title="Personen" person={PERSON_DATA}/>
        <Persons title="Personen volgens leeftijd" person={[...PERSON_DATA].sort((a,b) => a.age - b.age)}/>
        <Numbers title="Leeftijden van de Personen" numbers={PERSON_DATA.map(n => n.age)}/>
        <Numbers title="Gesorteerde leeftijd van de Personen" numbers={[...PERSON_DATA].sort((a,b) => a.age - b.age).map(n => n.age)}/>
        <Cities title="City test" city={CITY_DATA}/>
        <Cities title="Cities" city={calculateCities(PERSON_DATA)}/>

    </div>
  )
}

export default App;