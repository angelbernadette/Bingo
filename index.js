console.log("Hello World");

let B = false,
    I = false,
    N = false,
    G = false,
    O = false;

    let BNumber, INumber, NNumber, GNumber, ONumber;

function newNumber(maxNumber) {
   let x = Math.floor(Math.random()* maxNumber) + 1;

   //if...else if...else statement
   // Confitional operator
   //GTE >=, LTE <=, EQ ==, NEQ ! =, AND &&, OR ||
   if (x <= 15) {
    console.log(`New number ${x} belongs to "B"`);
    B = true;
    BNumber = x;
   } else if (x >=16 && x <=30) {
    console.log(`New number ${x} belongs to "I"`);
    I = true
    INumber = x;
   } else if (x >=31 && x <=45) {
        console.log(`New number ${x} belongs to "N"`);
    N = true
    NNumber = x;
   } else if (x >=45 && x <=60) {
        console.log(`New number ${x} belongs to "G"`);
    G = true
    GNumber = x;
   } else if (x >=60 && x <=75) {
        console.log(`New number ${x} belongs to "O"`);
    O = true
   } else {
        console.log(`New number ${x} is invalid.`);
    O = true;
    ONumber = x;
} 
    console.log(`New number ${x} is invalid.`);
}

if (B == true && I == true && N == true == G == true && O == true) {
    console.log(`BINGOOOOOO!!!!`);
    console.table({
        B: BNumber,
        I: INumber,
        N: NNUmber,
        G: GNumber,
        O: ONumber,
    });
}


newNumber(75);
//let counter = 5;
//for(counter; counter >= 0; counter--) {
//  console.log(Current counter is ${counter});
////if (counter == 2) break;

// newNumber(75);
//}

//let counter = 10; 
//while(counter >=0){
//console.log(While, Current counter is ${counter});
//counter--;
//}

while (!B || !I || !N|| !G|| !O) {
newNumber(75);
}