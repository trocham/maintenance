
import axios from "axios";
import { Car } from "./Car";

const URL="http://localhost:3001";

export const getCars = async () => {
    try {
        return await axios.get(`${URL}/maintenanceCars`);
    } catch (error) {
        console.log(error)
    }
}

export const getCar = async (id:string) => {
    try {
        return await axios.get(`${URL}/maintenanceCars/${id}`);
    } catch (error) {
        console.log(error)
    }
}

export const saveCar = async (car:Car) => {
    try {
        console.log(car)
        return await axios.post(`${URL}/maintenanceCar`,car);

    } catch (error) {
        console.log(error)
    }
}

export const deleteCar = async (car:Car) => {
    try {
        return await axios.delete(`${URL}/maintenanceCar`);

    } catch (error) {
        console.log(error)
    }
}

export const updateCar = async (id:string, car:Car) => {
    try {
        return await axios.put<Car>(`${URL}/maintenanceCar/${id}`,car);

    } catch (error) {
        console.log(error)
    }
}