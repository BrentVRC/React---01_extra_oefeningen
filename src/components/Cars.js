import {Car} from "./Car";

export function Cars({car,title}){
    return(
        <div className="section">
            <h3>{title}</h3>
            {car.map((c,id) => <Car key={id} car={c}/>)}
        </div>
    )
}