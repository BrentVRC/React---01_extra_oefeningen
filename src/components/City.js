export function City({city}){
    return(
        <div className="card">
            <div className="section::after">
                <div>{city.name}</div>
                <div>{city.numberOfPersons}</div>
            </div>
        </div>
    )
}

export function Cities({city,title}){
    return(
        <div className="section">
            <h3>{title}</h3>
            {city.map((c,id) => <City key={id} city={c}/> )}
        </div>
    )
}