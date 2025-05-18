// Your code here:
function cancionDeLeche(){
//  ${i} <- este comondado convierte a string un numero para mostrar en JS6 dentro de la implementacion de comillas invertidas: `` 
        for (let i = 99; i >= 0; i--) {
    if (i > 1) {
        console.log(`${i} bottles of milk on the wall, ${i} bottles of milk. Take one down and pass it around, ${i-1} bottle${i-1 !== 1 ? 's' : ''} of milk on the wall.`);
    } else if (i === 1) {
        console.log(`1 bottle of milk on the wall, 1 bottle of milk. Take one down and pass it around, no more bottles of milk on the wall.`);
    } else {
        console.log(`No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.`);
    }
    }

}
cancionDeLeche();
