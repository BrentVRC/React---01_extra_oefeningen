import {Number} from "./Number";

export function Numbers({numbers,title}){
    return (
        <div className="section">
            <h3>{title}</h3>
            {numbers.map((n,id) => <Number key={id} number={n}/>)}
        </div>
    )
}