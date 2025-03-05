// FUNCION QUE REALIZA UNA SUMA
function suma() {
    let a = 0
    let b = 0
    alert('Este algoritmo ejecuta la suma de dos numeros ingresados por el usuario')
    a = parseInt(prompt('Ingrese el primer valor a sumar'));
    b = parseInt(prompt('ingrese el segundo valor sumar con el primero'));
    suma = a + b
    alert('el resultado de su suma es ' + suma)
}

function opBasicas() {
    let a = 0
    let b = 0

    alert('Este algoritmo le realiza la operacion basica que usted quiera')

    a = parseInt(prompt('Ingrese el primer valor que quiere operar'))
    b = parseInt(prompt('Ingrese el segundo valor a operar'))
    let suma = a + b
    let resta = a - b
    let multiplicacion = a * b
    let division = a / b
    alert('el resultado de la suma es ' + suma + ', de la resta es ' + resta + ', de la multiplicacion es ' + multiplicacion + ' y de la division ' + division)
}

function cuadrado() {
    let a = 0
    alert('Este algoritmo le indica el cuadrado del numero que usted ingrese')
    a = parseInt(prompt('Ingrese el numero que quiere operar'))
    let b = a * a
    alert('El cuadrado del numero que usted ingreso es ' + b)
}

function convUnidades() {
    let a = 0
    alert('Este algoritmo le convierte la cantidad de metros que usted ingrese a centimetros y pulgadas')
    a = parseInt(prompt('Ingrese cuantos metros desea convertir'))
    let cm = a * 100
    let pg = a * 39.37
    alert(a + 'metros son ' + cm + ' centimetros y ' + pg + ' pulgadas')
}
function area() {
    let base = 0
    let altura = 0
    alert('Este algoritmo le dice cual es el area de un triangulo basado en la base y altura que usted ingrese')
    base = parseInt(prompt('Ingrese cuantos centimetros tendra la base'))
    altura = parseInt(prompt('Ingrese cuantos centimetros tendra la altura'))
    let area = base * altura / 2
    alert('El area del triangulo son ' + area + ' centimetros')
}
function inversion() {
    let capital = 0
    let años = 0
    alert('Este algoritmo le indica la ganancia que tendrá usted sobre el capital invertido en los años que usted indique')
    capital = parseInt(prompt('Ingrese la cantidad de dinero que desea invertir'))
    años = parseInt(prompt('Ingrese la cantidad de años que desea tener invertido su dinero'))
    let gananciaXAño = (capital * 0.017) * 12 * años + capital
    alert('El dinero que usted recibirá en ' + años + ' años sera de ' + gananciaXAño)
}
function numeroMayor() {
    let a = 0
    let b = 0
    alert('Este algoritmo le dice a usted cual es el numero mayor entre los que usted ingrese')
    a = parseInt(prompt('Ingrese el primer valor a comparar'))
    b = parseInt(prompt('Ingrese el segundo valor a comparar'))
    if (a < b) {
        alert('El numero mayor es ' + b)
    } else if (a === b) {
        alert('Los numeros que usted ingreso son iguales')
    } else {
        alert('El numero mayor es ' + a)
    }
}
function numeroMenor() {
    let a = 0
    let b = 0
    let c = 0
    alert('Este algoritmo le dice a usted cual es el numero menor de tres que usted tendra que ingresar')
    a = parseInt(prompt('Ingrese el primer numero a evaluar'))
    b = parseInt(prompt('Ingrese el segundo numero a evaluar'))
    c = parseInt(prompt('Ingrese el tercer numero a evaluar'))
    if (a < b && a < c) {
        alert('El numero menor es ' + a)
    } else if (b < a && b < c) {
        alert('El numero menor es ' + b)
    } else {
        alert('El numero menor es ' + c)
    }
}
function parImpar() {
    let a = 0
    alert('Este algoritmo le dice a usted si el numero ingresado es par o impar')
    a = parseInt(prompt('Ingrese el numero a evaluar'))
    if (a % 2) {
        alert('El numero es impar')
    } else {
        alert('El numero es par')
    }
}

// function promedio() {
//     let materia = '';
//     let estudiante = '';
//     let nNotas = 0;
//     let calificacion = 0;
//     let sumaNotas = 0;
//     let promedio = 0;
//     let iteracion = 0
//     materia = prompt('Ingrese la materia que imparte')
//     estudiante = prompt('Ingrese el nombre del estudiante')
//     nNotas = parseInt(prompt('Ingrese el número de calificaciones'))

//     while (iteracion < nNotas) {
//         calificacion = parseFloat(prompt('Ingrese la calificaion'))
//         sumaNotas = sumaNotas + calificacion
//         iteracion = iteracion + 1;
//     }
//     promedio = sumaNotas / nNotas

//     if (promedio > 2.9) {
//         alert('El estudiante ' + estudiante + ' es muy abeja y aprobó la materia de ' + materia + ' con un promedio de ' + promedio)
//     } else {
//         alert('El estudiante reprobo la materia de ' + materia + ' con un promedio de ' + promedio)
//     }}

function promedio() {
    a1 = 0
    a2 = 0
    a3 = 0
    a4 = 0
    a5 = 0
    a6 = 0
    a7 = 0
    alert('Este algoritmo le dice a usted el promedio de un estudiante basado en 7 notas y si aprueba o reprueba, las notas deben ser de 10 a 50')
    a1 = parseInt(prompt('Ingrese la primera calificacion'))
    a2 = parseInt(prompt('Ingrese la segunda calificacion'))
    a3 = parseInt(prompt('Ingrese la tercera calificacion'))
    a4 = parseInt(prompt('Ingrese la cuarta calificacion'))
    a5 = parseInt(prompt('Ingrese la quinta calificacion'))
    a6 = parseInt(prompt('Ingrese la sexta calificacion'))
    a7 = parseInt(prompt('Ingrese la septima calificacion'))

    prom = (a1 + a2 + a3 + a4 + a5 + a6 + a7) / 7
    if (prom < 30) {
        alert('Le tocó nivelar por vago mi rey, su nota es ' + prom)
    } else {
        alert('Parce usted es muy inteligente, su nota es ' + prom)
    }
}
function manzanas() {
    let kilos = 0
    let precioPorKilo = 4500
    alert('Este algoritmo le dice a usted cuanto le valen las manzanas que lleve de acuerdo a la cantidad de kilos que compre, si compra menos de 3 son cada uno a 4500, si compra mas de 3 y menos de 6 se le descuenta un 10%, mas de 6 hasta 10 un 15% y mas de 10 menos un 20%')
    kilos = parseInt(prompt('¿Cuantos kilos de manzanas desea llevar?'))
    basic = kilos * precioPorKilo
    diez = (precioPorKilo - (precioPorKilo * 0.1)) * kilos
    quince = (precioPorKilo - (precioPorKilo * 0.15)) * kilos
    veinte = (precioPorKilo - (precioPorKilo * 0.2)) * kilos
    if (kilos <= 3) {
        alert('Usted deberá pagar ' + basic)
    } else if (kilos > 3 && kilos <= 6) {
        alert('Usted deberá pagar ' + diez)
    } else if (kilos > 6 && kilos <= 10) {
        alert('Usted deberá pagar ' + quince)
    } else {
        alert('Usted deberá pagar ' + veinte)
    }
}
function xtraHours() {
    let horas = 0
    let precioNormal = 10000
    let precioExtra = 20000
    alert('Este algoritmo le dice a usted cuanto ganará si trabaja mas o menos de 40 horas semanales')
    horas = parseInt(prompt('¿Cuantas horas trabajo esta semana?'))
    salarioBasic = horas * precioNormal
    salarioBasicXtra = (40 * precioNormal) + (horas - 40) * precioExtra
    if (horas <= 40) {
        alert('Su salario esta semana fue de ' + salarioBasic)
    } else {
        alert('Su salario esta semana fue de ' + salarioBasicXtra)
    }
}
function sumaS() {
    let a = 0
    let suma = 0
    alert('Este algoritmo le suma todos los numeros que usted escriba hasta que digite 0 y le regresa el total de todos los que anteriormente habia colocado')
    a = parseInt(prompt('Ingrese cualquier numero para iniciar la suma (este numero no cuenta)'))
    if (a === 0) {
        alert('Usted ha digitado el numero 0 por lo tanto el ciclo ha finalizado')
    } else {
        while (a != 0) {
            a = parseInt(prompt('Ingrese otro numero'))
            suma = suma + a
            alert(suma)
        }
    }
}
function zeroToTen() {
    let n = 0
    alert('Este algoritmo le muestra a usted los numeros de 1 a 10 en orden')
    while (n < 10) {
        n = n + 1
        alert(n)
    }
}
function oneHundredToZero() {
    let n = 110
    alert('Este algoritmo le muestra a usted los numeros de 0 a 100 de 10 en 10')
    while ((n <= 110) && (n > 0)) {
        n = n - 10
        alert(n)
    }
}
function table() {
    alert('este algoritmo le va a mostrar a usted la tabla de multiplicar del numero que usted ingrese')
    let n1 = 0
    let m = 0
    n1 = parseInt(prompt('Ingrese el numero del que desea realizar la tabla'))
    if (!n1) {
        alert('No ingresaste un numero')
    } else {
        while (m < 10) {
            m = m + 1
            r = m * n1
            alert(n1 + ' * ' + m + ' = ' + r)
        }
    }
}
function atm() {
    let saldo = 1000000;
    alert('ESTE ALGORITMO LE PERMITE HACER RETIROS EN UNA SIMULACION DE CAJERO ELECTRONICO EN BASE A SU SALDO');
    while (saldo > 0) {
        let monto = parseInt(prompt('BIENVENIDO AL CAJERO PINBANK, SU SALDO ES DE ' + saldo + ' ,¿CUANTO DESEA RETIRAR?'));
        if (isNaN(monto) || monto <= 0) {
            alert('Ingrese un monto válido.');
            continue;
        }
        if (monto > saldo) {
            alert('La cantidad de dinero que tiene es insuficiente');
        } else {
            saldo -= monto;
            alert('Retiro exitoso. Su nuevo saldo es: $' + saldo);
        }
    }
    alert('Su saldo es 0. No puede retirar más dinero.');
}
// function atm() {
//     let balance = 1000000
//     let amount = 0
//     alert('ESTE ALGORITMO LE PERMITE HACER RETIROS EN UNA SIMULACION DE CAJERO ELECTRONICO EN BASE A SU SALDO')
//     if (amount > balance) {
//         amount = parseInt(prompt('BIENVENIDO AL CAJERO PINBANK, SU SALDO ES DE ' + balance + ' ,¿CUANTO DESEA RETIRAR?'))
//         alert('La cantidad de dinero que tiene es insuficiente')
//     } else if ((amount < balance) && (balance > 0)) {
//         balance = balance - amount
//         alert('Retiro exitoso ')
//     }
// }





// else {
//         while ((amount < balance) && (balance > 0)) {
//             amount = parseInt(prompt('BIENVENIDO AL CAJERO PINBANK, SU SALDO ES DE ' + balance + ' ,¿CUANTO DESEA RETIRAR?'))
//             balance = balance - amount
//             alert(balance)
//         }
//     }
// function sumar(a, b) {
//     return a + b
// }
// let resultado = sumar(5, 7);

// console.log('el resultado de su suma es ' + resultado)