import React, { useEffect, useState } from 'react'
import { Car } from "./Car";
import * as carService from "./CarsService";
import CarItem   from "./CarItem";


const CarsList = () => {
    const [cars, setCars] = useState<Car[]>([])

    const loadCarsInfo = async () =>{
        try {
            const result = await carService.getCars()
            setCars(result?.data);
        } catch (error) {
            console.log(error);
        }
       
    }

    useEffect(() => {
        loadCarsInfo()
}, [])

    return (
        <div className="row">
           {cars.map(car => {
               return <CarItem car={car} key={car._id}/>
           })}
        </div>
    )
       
}

export default CarsList



