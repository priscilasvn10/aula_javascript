var nome = "Priscila Silva";
var idade = 26;
var idade2 = 10;
var n1 = 5;
var n2 = 2;
var frase = "Japão é o melhor time do mundo";
//alerta(nome +" tem " + idade + " anos");
//alerta(idade + idade2);
conole.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão", "Brasil");
alert(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
console.log(n1 * n2);

var lista = ["maçã","pêra","laranja"];
lista.push("uva");
console.log(lista);
lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.toString()[0]);
console.log(lista.join(" - "));

//dicionário
var fruta = {nome: "maçã", cor: "vermelha"}
console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor);


var frutas = [{nome: "maçã", cor: "vermelha"}, {nome:"uva", cor: "roxa"}]
console.log(frutas);
alert(frutas[1].nome);



console.log(lista[1]);
alert(lista[1]);


//caixa para receber uma informação

var idade3 = prompt("Qual sua idade? ");

if(idade3 >= 18){

	alert("maior de idade");

} else{
	alert("menor de idade");
};




var count = 0;
while(count <= 5){

	console.log(count);
	alert(count);
	count ++;
};



var count2 ;
for(count =0; count <=5; count ++){
	alert(count);

};



var d= new Date();
alert(d.getMonth()+1);
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());

		
function soma(n1, n2){

	return n1 + n2;
}

var validar = 0;

function validaIdade(idade){

	if(idade >= 18){
	 validar = true;
	}else{
		validar = false;
		}
	return validar;

}
function setReplace(frase, nome, novo_nome){
	frase.replace(nome, novo_nome)
}



alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));

var idade4 = prompt("Qual é a sua idade");
validaIdade(idade4);
console.log(validar);

function clicou(){
	document.getElementById("agradecimento").innerHTML = <b>"Obrigado por clicar"</b>;
//	console.log(document.getElementById("agradecimento"))
	
//	alert("Obrigado por clicar");
}



function redirecionar(){
	window.open("https://globallabs.academy/");
	window.location.href = "https://globallabs.academy/";
}


function trocar(elemento){
//	document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
//	alert("trocar texto");
	elemento.innerHTML = "Obrigado por passar o mouse";

}

function voltar(elemento){
//	document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
	elemento.innerHTML = "Passe o mouse aqui";

}



function load(){

	alert("Pagina carregada");

}


function funcaoChange(elemento){

	console.log(elemento.value)

}
		