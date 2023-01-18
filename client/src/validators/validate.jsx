
export const validate = (input) => {
    let error = {}
     //NAME
    if(input.name.length < 3) {
        error.name =  "You must put more than 3 letters "}
    if(!/^[a-zA-Z]{1,10}$/.test(input.name)){
        error.name = "Only letters allowed"}
     //HP   
     if(input.hp.includes(".")) {
        error.hp = "Only numbers allowed"}    
    if(input.hp <= 0 || input.hp > 100 ){
        error.hp = "From 1 to 100 allowed"}
    // attack
    if(input.attack <= 0 || input.attack > 100 ){
        error.attack = "From 1 to 100 allowed"}
    if(input.attack.includes(".")) {
        error.attack = "Only numbers allowed"} 
    // defense 
    if(input.defense <= 0 || input.defense > 100 ){
        error.defense = "From 1 to 100 allowed"}
    if(input.defense.includes(".")) {
        error.defense = "Only numbers allowed"} 
    //height
    if(input.height <=0 || input.height > 50){
        error.height = "From 1 to 50 allowed"}
    if(input.height.includes(".")){
        error.height = "Only numbers allowed"}
    //speed
    if(input.speed <= 0 || input.speed > 100 ){
        error.speed = "From 1 to 50 allowed"}
    if(input.speed.includes(".")) {
        error.speed = "Only numbers allowed"} 
    //weight
    if(input.weight <=0 || input.weight > 1000){
        error.weight = "From 1 to 1000 allowed"}
    if(input.weight.includes(".")){
        error.weight = "Only numbers allowed"}
        //types
       
        return error
}
