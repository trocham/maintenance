import React, {ChangeEvent, FormEvent, useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom'

import { Car } from './Car'
import * as carsService from "./CarsService";
import { toast } from 'react-toastify';

interface Params{
    id:string
}

const CarForm = () => {

const hist = useHistory();
const params = useParams<Params>();
console.log(params);

const clearState={
    _id :"",
    make:"",
    model:"",
    description:"",
    image:"",
    estimatedate:"",
    km:0,
    user:"",
    inMaintenance:false
}

    const [car, setCar] = useState<Car>(clearState)

    const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
        setCar({...car, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>)=>{
        //e.preventDefault()
        //console.log(car)

        if(!params.id){
            await carsService.saveCar(car);
             toast.success("Car added to maintenance");
             setCar(clearState)
             hist.push('/');
        }else{
            await carsService.updateCar(params.id,car);
        }
       
    }

    const getCar = async (id:string)=>{
        const res = await carsService.getCar(id);
        const {make,model} = res?.data;
        setCar({make,model})
    }

    useEffect(() => {
        if(params.id){
            getCar(params.id)
        }
    }, )

    return (
        <div  className="col-xs-1">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="card">
                        <div className="car-body">
                            <h3> Add Car Maintenance</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="frorm-group mb-3">
                                        <input className="form-control" type="text" name="make" placeholder="make" onChange={handleInputChange} value={car.make} autoFocus/>
                                    </div>
                                    <div className="frorm-group mb-3">
                                        <input className="form-control"type="text" name="model" placeholder="model" onChange={handleInputChange} value={car.model}/>
                                    </div>
                                    <div className="frorm-group mb-3">
                                        <input className="form-control" type="text" name="image" placeholder="image" onChange={handleInputChange} value={car.image}/>
                                    </div>
                                    <div className="frorm-group mb-3">
                                        <input className="form-control" type="text" name="km" placeholder="km" onChange={handleInputChange} value={car.km}/>
                                    </div>
                                    <div className="frorm-group mb-3">
                                        <input className="form-control" type="text" name="user" placeholder="user" onChange={handleInputChange} value={car.user}/>
                                    </div>
                                     <div className="frorm-group mb-3">
                                        <input className="form-control" type="text" name="estimatedate" placeholder="estimate date YYYY/DD/MM" onChange={handleInputChange} value={car.estimatedate}/>
                                    </div>
                                    <div className="frorm-group mb-3">
                                        <input className="form-control" type="text" name="description" placeholder="description" onChange={handleInputChange} value={car.description}/>
                                    </div>
                                       {
                                           params.id?
                                           <button className="btn btn-info">modify</button>
                                           :
                                           <button className="btn btn-primary">save</button>
                                       } 
                                    
                                </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarForm