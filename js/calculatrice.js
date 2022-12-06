
const somme=(m,n)=>{
    return parseFloat(m)+parseFloat(n)
}

const multiplication=(m,n)=>{
    return parseFloat(m)*parseFloat(n)
}
const soustraction=(m,n)=>{
    return parseFloat(m)-parseFloat(n)
}
const division=(m,n)=>{
    return parseFloat(m)/parseFloat(n)
}
const carré=(a)=>{
    return a*a
}
const cube=(a)=>{
    return a*a*a
}
const puissance=(m,n)=>{
   let=1
   for (let i = 1; i <= n; i++) {
    s=s*m
    
   }
   return s
}
const tablemultiplication=(m,n)=>{
    let=1
    for (let i = 1; i <= 12; i++) {
     s=s+m+' * '+i+' = '+(m*i)+'\n'
     
    }
    return s
 }



var nombre=prompt('Quels operations voulez-vous effectuer?'+
                  '\n1-Addition'+
                  '\n2-Multiplication'+
                  '\n3-Soustraction'+
                  '\n4-Division'+
                  '\n5-Table de multiplication'+
                  '\n6-Carré'+
                  '\n7-Cube'+
                  '\n8-Puissance'+
                  '\n9-Factorielle')


nombre=parseInt(nombre)

switch (nombre) {
    case 1:
        var a=prompt('Entrer un nombre')
        var b=prompt('Entrer un nombre')
        alert('La somme de'+a+' et '+b+' est '+somme(a,b))
        break;

    case 2:
        var a=prompt('Entrer un nombre')
        var b=prompt('Entrer un nombre')
        alert('La multiplication de'+a+' et '+b+' est '+multiplication(a,b))
        break;
       
    case 3:
        var a=prompt('Entrer un nombre')
        var b=prompt('Entrer un nombre')
        alert('La soustraction de' +a+ ' et '+b+' est '+soustraction(a,b))
        break;
                
    case 4:
        var a=prompt('Entrer un nombre')
        var b=prompt('Entrer un nombre')
        alert('La division de'+a+' et '+b+' est '+division(a,b))
        break;

    case 5:
        var a=prompt('Entrer un nombre')
        alert('La table de multiplication de'+a+' est +\n' +tablemultiplication(a))
        break;

    case 6:
        var a=prompt('Entrer un nombre')
        alert('Le carré de' +a+ ' est '+carré(a))
         break;

    case 7:
        var a=prompt('Entrer un nombre')
        alert('Le cube de' +a+ ' est '+cube(a))
        break;

    case 8:
        var a=prompt('Entrer un nombre')
        var b=prompt('Entrer la puissance')
        alert('La puissance de'+a+' et '+b+' est '+puissance(a,b))
        break;

     case 9:
        var a=prompt('Entrer un nombre')
        alert('Le factorielle de' +a+ ' est '+factorielle(a))
         break;
       

    default:
          alert('mauvais choix!!\n Entrer le bon numero')
        break;
}


