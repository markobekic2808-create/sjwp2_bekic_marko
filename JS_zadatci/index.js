for(let i=0; i<11; i++){
    console.log(i);
}


function jePozitivan(n) {

return n > 0;

}

let unos = prompt("Upiši broj:");

let broj = Number(unos);

if (Number.isNaN(broj)) {

console.log("Nije upisan broj.");

} else {

if (jePozitivan(broj)) {
console.log("Broj je pozitivan.");

} else {

console.log("Broj nije pozitivan.");
}
}
let brr=0;
for(let i=0;i<broj;i++){
    brr+=i;

}
let ispis = prompt("Zbroj brojeva od 1 do "+broj+" iznosi ",brr);

let ocjene = [4,5,3,4,2];
let suma=0;
for(let i=0;i<5;i++){
    suma+=ocjene[i];
}
let prosjek =suma/5;
prompt("Prosjek svih ocjena iznosi: ",prosjek);


let unoss = prompt("Upisi broj: ");
let brojj = Number(unoss);
for(let i=1;i<=brojj;i++){
    if(i%2==0){
        prompt("Broj je paran");
    }
    else{
        prompt("Broj je neparan");
    }
}


let polje = [12,7,25,4,19];
let najveci=0;
for(let i=0;i<5;i++){
    if(polje[i]>najveci){
        najveci=polje[i];
    }
}
prompt("Najveci broj je: ",najveci);



