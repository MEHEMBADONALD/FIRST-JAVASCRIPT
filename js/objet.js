// var eleve={
//     nom:'MEHEMBA',
//     prenom:'Donald',
//     age:27,
//     sexe:'M',
//     ville:'Douala',
//     classe:'Tle A',
//     matieres:{
//         physique:15,
//         french:17,
//         maths:15
//     }
// }

// console.log('Le nom est '+eleve.nom+' Et sa note en maths est '+eleve.matieres.maths)
//   console.log(eleve);

//   eleve.ville='bertoua'

//   console.log(eleve);


// var a=prompt('Entrer le nombre')
// var puissance=prompt('Entrer la puissance')
// var s=1

// for (let i = 1; i < puissance; i++) {
//    s=s*a
    
// }

// console.log(a+'puisssance'+puissance+' est' +s);

// var n=11

// var variation=setInterval(()=>{
//    n--
//    console.log()
//    if(n=0){
//       clearInterval(variation)
//       variation=null
//       alert('BOOM!!:')
//    }
// }, 1000);


// var a=5

// if (3==3) {
//      var a=10
// }
// console.log(a)

// let a=5

// if (3==3) {
//     let a=10
// }
// console.log(a);

function salutation(nom='toi'){
   return 'bonjour'+nom
}

console.log(salutation);