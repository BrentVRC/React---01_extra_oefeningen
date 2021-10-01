
export function CarColor({car}){
    const colorstring = car.color && `${"kleur: " +car.color}`
    const color = car.color === "blauw" ? "#0000FF" : "" ||
    car.color === "geel" ? "#FFFF00" : "" ||
    car.color === "zwart" ? "#000000" : "" ||
    car.color === "wit" ? "" : "" ||
    car.color === "rood" ? "#FF0000" : "" ||
    car.color === "grijs" ? "#696969" : "" ||
    car.color === "groen" ? "#008000" : ""
    const specialStyle = {margin: "0.5em",backgroundColor:color}
    console.log(specialStyle)
    return(
        <div style={specialStyle} className="productNote">{colorstring}</div>
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