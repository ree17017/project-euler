function multipleOfThreeOrFive(number){
    return number % 3 == 0 || number % 5 == 0;
}

let sum = 0;
for(let i=0; i<1000; i++){
    if(multipleOfThreeOrFive(i)){
        sum += i    
    }
}

console.log(sum)
