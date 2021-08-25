console.timeLog("Let's roll some dice, baby!");
console.log("---------------------------");

const switchConvert = (dieValue) => {
    let dieString = "";

    switch (dieValue) {
        case 1: 
            dieString = "one";
            break;
        case 2:
            dieString = "two";
            break;
        case 3: 
            dieString = "three";
            break;
        case 4: 
            dieString = "four";
            break;
        case 5:
            dieString = "five";
            break;
        case 6:
            dieString = "six";
            break;
    }

    return dieString;
};


const Roll = (min, max) => {
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 10; i++) {
    let die1 = Roll(1, 6);
    let die2 = Roll(1, 6);

    let message = `${switchConvert(die1)} + ${switchConvert(die2)} == ${die1 + die2}`
    if (die1 === die2) {
        message += " DOUBLES!"
    }        
        console.log(message)
    }
