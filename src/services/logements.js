import Logements from '../data/logements.json'

export function getAllLogements(){
    return Logements
}

export function getLogementById(id){
    return Logements.find((e) => e.id === id);
}