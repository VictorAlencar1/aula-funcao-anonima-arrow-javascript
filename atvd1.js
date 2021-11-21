var questao1 = function(){
    var array = ["Salvador", "Aracaju", "Recife", "Maceió", "Natal"]
    let str = array.join(", ");
    let resultado = str.toUpperCase();
    console.log(resultado);
  }
  
  var questao2 = function(){
    var num
    for (let num = 100; num >= 100 && num <= 450 ; num++){
      console.log(num);
    }
  }
  
  var questao3 = function(){
    var str1 = "Mariane "
    var str2 = "ama muito ";
    var str3 = "seu irmão ";
    var str4 = "Daniel!";
    console.log(str1.concat(str2, str3, str4));
  }