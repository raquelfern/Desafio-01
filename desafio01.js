//Soma
function soma(n1,n2,n3){
    return n1 + n2 + n3;
}
var somaResult = soma(2, 4, 6);
console.log('Resultado: ', somaResult);

function media(n1,n2){
    var n1 = 10;
    var n2 = 0;
    var result = (n1 + n2)/3;

    if(n1 <= 1 || n2 <= 1){
        console.log('Reprovado!');
    } else {
        console.log('Aprovado!');
    }
    return result;
}
media(); //Sempre tem que chamar a função

function quadrado(n1,n2,n3,n4,n5){
    var n1=1, n2=2, n3=3, n4=4, n5=5;

    var q1 = n1 * n1;
    var q2 = n2 * n2;
    var q3 = n3 * n3;
    var q4 = n4 * n4;
    var q5 = n5 * n5;        

    console.log('Resultados: ',q1,q2,q3,q4,q5);
}
quadrado();
//alert('Show!');