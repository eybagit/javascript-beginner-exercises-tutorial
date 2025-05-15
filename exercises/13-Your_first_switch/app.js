function getColor(selection){
	selection= selection.toLowerCase();
	  switch (selection) {
        case 'red':
            return true;  // Devuelve true si el color es rojo
        case 'green':
            return true;  // Devuelve true si el color es verde
        case 'blue':
            return true;  // Devuelve true si el color es azul
        default:
            return false; // Devuelve false si el color no está disponible
		}
	
}


let colorname = prompt('What color do you want?').trim();
let isAvailable = getColor(colorname);

if(isAvailable)
	console.log('Good news! That color is available');
else 
	console.log('We are sorry, that color is not available');
