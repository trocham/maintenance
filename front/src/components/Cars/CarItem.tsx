import React from 'react'
import { Car } from './Car'
import "./CarItem.css"
import {useHistory} from "react-router-dom"

interface Props{
    car: Car
}

const CarItem = ({car}: Props) => {
    const history = useHistory();

    return (
        <div className="col-md-4">
            <div className="card card-body video-card" 
            style={car.inMaintenance?{cursor:'pointer', backgroundColor:"rgb(184 183 187)"}:{cursor:'pointer'}} 
            onClick={() => history.push(`/update/${car._id}`)}>


                <div className="d-flex justify-content-between"></div>
                    
                    
                    <p>{car.make} {car.model}</p>
                    <img src={car.image} alt={car.model}></img>
                    {
                        //<button className="btn btn-primary">modify</button>
                    }
            </div>
        </div>
    )
}

export default CarItem
