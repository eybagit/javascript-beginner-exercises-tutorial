
let firePosition = 1;

const spinChamber = () => {
    return Math.floor(Math.random() * 6) + 1;
};

const fireGun = (ignoredParameter) => { 
    const chamberPosition = spinChamber();
    
    if (!(chamberPosition === firePosition)) { 
        return "Keep playing!";
    } else {
        return "You're dead!";
    }
};

console.log(fireGun(firePosition));
