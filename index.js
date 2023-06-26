"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//------ejercicio evaluativo 1
const areaRectangulo = (base, altura) => {
    console.log(base * altura);
};
areaRectangulo(5, 8);
//------ejercicio evaluativo 2
let arreglo = [1, 45, 72, 88];
let promesa1 = new Promise((resolve, reject) => {
    function resolver() {
        if (arreglo != null) {
            //ejercicio con ciclo for
            for (let i = 0; i < arreglo.length; i++) {
                if (arreglo[i] % 2 == 0) {
                    arreglo[i];
                    console.log(arreglo[i]);
                    resolve("Pares mostrados");
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
    }
    setTimeout(resolver, 4000);
    function rechazo() {
        reject(new Error(`Este arreglo no contiene numeros`));
    }
    setTimeout(rechazo, 5000);
})
    .then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err.mensaje);
});
//------ejercicios evaluativo 3
function resultado() {
    return new Promise((resolve, reject) => {
        function resolver() {
            resolve('ok');
        }
        setTimeout(resolver, 3000);
        function rechazar() {
            reject('-');
        }
    });
}
let sincronico = () => __awaiter(void 0, void 0, void 0, function* () {
    let valorPromesa = yield resultado();
    console.log(valorPromesa);
});
sincronico();
