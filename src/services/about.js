import About from '../data/about.json'

export function getAllDescription(){
    return About
}

export function getDescriptionById(id){
    return About.find((e) => e.id === id);
}