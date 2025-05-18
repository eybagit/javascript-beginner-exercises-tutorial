function sing() {
   let letra =[];
   
   for (let i = 0; i < 4; i++) {
       letra.push("let it be");    
    }
    letra.push("there will be an answer");
    
    for (let i = 0; i < 5; i++) {
        letra.push("let it be");    
    }
    letra.push("whisper words of wisdom");
    
    letra.push("let it be"); 
  
    return letra.join(", ")
} 
    console.log(sing());