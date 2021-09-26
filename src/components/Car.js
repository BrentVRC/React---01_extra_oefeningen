
export function CarColor({car}){
    const colorstring = car.color && `${"kleur: " +car.color}`
    return(
        <div className="productNote">{colorstring}</div>
    )
}

export function Car({car}){
    const brandstring = car.brand && `${"merk: " + car.brand}`
    const typestring = car.type && `${"type: " +car.type}`


    return(
            <div className="card">
                <div className="section::after">
                    <h4>{car.name}</h4>
                    <div>{brandstring}</div>
                    <div>{typestring}</div>
                    <CarColor car={car}/>
                </div>
            </div>
    )
}