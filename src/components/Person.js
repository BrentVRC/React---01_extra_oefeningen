import {CarColor} from "./Car";

export function Persons({person,title}){
    return(
        <div className="section">
            <h3>{title}</h3>
            {person.map((p,id) => <Person key={id} person={p}/> )}
        </div>
    )
}

export function Person({person}){
    return(
        <div className="card">
            <div className="section::after">
                <h4>{person.name}</h4>
                <div>{person.age}</div>
                <div>{person.city}</div>
            </div>
        </div>
    )
}