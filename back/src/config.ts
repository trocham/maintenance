import dotenv from 'dotenv';
dotenv.config();

export default{
    MONGO_DB: process.env.MONGO_DB || 'maintenance-db',
    MONGO_USR: process.env.MONGO_USR || 'trocha',
    MONGO_PWR: process.env.MONGO_PWR || 'trochadb1',
    APP_PORT:process.env.APP_PORT || 3001,
}