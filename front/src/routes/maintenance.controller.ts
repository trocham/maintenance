
import { RequestHandler } from "express";
import Mntns  from "./Maintenance";

export const getMaintenanceCars : RequestHandler = async (req,res) => {
    try {
        const cars = await Mntns.find();
        return res.json(cars);
    } catch (error) {
        console.log(error) ;
    }
}

export const getMaintenanceCar : RequestHandler = async (req,res) => {
    try {
        const carSearched = await Mntns.findById(req.params.id);
            if(!carSearched) 
                return res.status(204).json();

        return res.json(carSearched);

    } catch (error) {
        console.log(error);
    }
}

export const createMaintenanceCar : RequestHandler = async (req,res) => {
  try{
    const mntns =  new Mntns(req.body)
    const restObj = await mntns.save();
    console.log(restObj);
    res.json('create car maintenance');
  }catch(error){
    console.log(error);
  }
    
}

export const updateMaintenanceCar : RequestHandler = async (req,res) => {
    try {
        const carModify = await Mntns.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.json(carModify);
    } catch (error) {
        console.log(error);
    }
}

export const deleteMaintenanceCar : RequestHandler = async (req,res) => {
    try {
        const carDiscarted = await Mntns.findByIdAndDelete(req.params.id);
            if(!carDiscarted) 
                return res.status(204).json();

        return res.json(carDiscarted);
    } catch (error) {
        console.log(error);
    }
    
}

