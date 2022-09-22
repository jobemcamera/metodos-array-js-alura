// 1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

// 2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

// 3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

// 4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: "Tem mais alguma tecnologia que você gostaria de aprender?", continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.

var escolhaBackFront = prompt ("Olá! Qual área você gostaria de seguir? 1 [Front-end] ou 2 [Back-end]?");

if(escolhaBackFront == 1) {
  var escolhaReactVue = prompt("Você quer aprender 1 [React] ou 2 [Vue]?");
  if (escolhaReactVue == 1) {
    alert("Dahora! Você quer seguir como Front-End estudando React!");
  } else {
    alert("Dahora! Você quer seguir como Front-End estudando Vue!");
  }
} else if(escolhaBackFront == 2) {
  var escolhaCsharpJava = prompt("Você quer aprender 1 [C#] ou 2 [Java]?");
  if (escolhaCsharpJava == 1) {
    alert("Dahora! Você quer seguir como Back-End estudando C#!");
  } else {
    alert("Dahora! Você quer seguir como Back-End estudando Java!");
  }
} else {
  alert("Você deve inserir 1 ou 2.");
}

var escolhaFullStack = prompt("Você quer se especializar ou se tornar um Fullstack? 1 [Especializar] ou 2 [Fullstack]");
if (escolhaFullStack == 1) {
  alert("Legal, você quer se tornar um especialista!");
} else if (escolhaFullStack == 2) {
  alert("Legal, você quer se tornar um desenvolvedor Fullstack!");
} else {
  alert("Você deve digitar o número 1 ou 2.");
}

var pergunta = prompt("Tem mais alguma tecnologia que você gostaria de aprender? 1 [SIM] ou 2 [NÃO]");

while(pergunta != 2) {
  var escolhaTecnologia = prompt ("Qual outra tecnologia você gostaria de aprender?");
  alert("Legal, você também quer aprender " + escolhaTecnologia + ".");
  var pergunta = prompt("Tem mais alguma tecnologia que você gostaria de aprender? 1 - SIM; 2 - NÃO;");
}