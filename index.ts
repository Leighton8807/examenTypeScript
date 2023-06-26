//Taller evaluativo ADSO 2560321-2 Maria Pedraza & Jorge Leighton

//------ejercicio evaluativo 1
const areaRectangulo = (base: number, altura:number) =>{console.log(base*altura);
 }
 areaRectangulo(5,8);

 //------ejercicio evaluativo 2
 let arreglo =[1,45,72,88];
 let promesa1 = new Promise((resolve, reject)=>{
  function resolver() {
    if (arreglo != null) {
      //ejercicio con ciclo for
     for (let i = 0; i < arreglo.length; i++) {
       if (arreglo[i]%2 ==0) {
         arreglo[i];
         console.log(arreglo[i]);
         
         resolve ("Pares mostrados");
        
       }
     }
     //ejercicio con forEach
  //     arreglo.forEach((elemento)=>{
  //       if (elemento%2==0) {
  //         let guardado = elemento
  //         resolve('pares mostrados');
  //         console.log(guardado);
  //       }
  //     })
     }
   }setTimeout(resolver,4000);

  function rechazo() {
    reject(new Error(`Este arreglo no contiene numeros`))
  }setTimeout(rechazo, 5000)
 })
  
 .then((res)=>{
  console.log(res);
 }).catch((err)=>{
  console.log(err.mensaje);
 });

 //------ejercicios evaluativo 3
function resultado (){
  return new Promise((resolve, reject)=>{
    function resolver() {
      resolve('ok')
    }
    setTimeout(resolver,3000)

    function rechazar() {
      reject('-')
    }
  })
}

let sincronico = async()=>{
  let valorPromesa = await resultado()
  console.log(valorPromesa);
}

sincronico();