document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.flexDirection = "column";
document.body.style.padding = "0.3%";
document.body.style.backgroundImage = "url(/img.jpg)";

const header = document.createElement("div");
document.body.appendChild(header);

header.style.background = " linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))";
header.style.height = "10%";
header.style.width = "50%";
header.style.padding = "10%  3%";
header.style.border = "1px solid rgba(255, 255, 255, 0.18)";
header.style.borderRadius = "20px";
header.style.boxShadow = "0 8px 32px 0 rgba(0, 0, 0, 0.37)";
header.style.webkitBackdropFilter = "blur(10px)";
header.style.backdropFilter = "blur(10px)";
header.style.display = "flex";
header.style.justifyContent = "center";
header.style.alignItems = "center";
header.style.flexDirection = "column";


const h1 = document.createElement("h1");
h1.textContent = "Calculadora de IMC";
header.appendChild(h1);
h1.style.fontFamily = "'Chakra Petch', sans-serif";
h1.style.fontSize = "300%";
h1.style.color = "#3AB4C3";
h1.style.position = "absolute";
h1.style.top = "55px";

const incons = document.createElement("img");
header.appendChild(incons);
incons.src = "/btn.png";
incons.style.left = '300px';
incons.style.top = '400px';
incons.style.width = "43px";
incons.style.height = "43px";
incons.style.position = "relative";
incons.style.right = "28%";
incons.style.top = "100px";
incons.style.transition = ".5s";
incons.addEventListener("click", function () {
  incons.style.transform = "scale(1.5) rotate(390deg)"
  setTimeout(() => {
    window.location.reload(true)
  }, 500)
});

const nome = document.createElement("p");
header.appendChild(nome);
nome.textContent = "Nome:";
nome.style.position = "relative";
nome.style.right = "34.6%";
nome.style.top = "18px";
nome.style.fontFamily = "'chakra', sans-serif";
nome.style.fontSize = "17px";
nome.style.color = "#3AB4C3";


const inputn = document.createElement("input");
inputn.placeholder = "Digite seu nome";
inputn.setAttribute("type", "text");
inputn.id = "nome";
header.appendChild(inputn);
inputn.style.width = "530px";
inputn.style.height = "35px"
inputn.style.margin = "2px";
inputn.style.padding = "2px";
inputn.style.paddingLeft = '10px';
inputn.style.border = "none";
inputn.style.borderRadius = "5px";

const idade = document.createElement("p");
header.appendChild(idade);
idade.textContent = "Idade:";
idade.style.position = "relative";
idade.style.right = "30.2%";
idade.style.top = "18px";
idade.style.fontFamily = "'chakra', sans-serif";
idade.style.fontSize = "17px";
idade.style.color = "#3AB4C3";

const inputIdade = document.createElement("input");
inputIdade.setAttribute("type", "number");
inputIdade.placeholder = "Digite sua idade";
inputIdade.id = "idade";
header.appendChild(inputIdade);
inputIdade.style.width = "116px";
inputIdade.style.height = "35px"
inputIdade.style.margin = "2px";
inputIdade.style.padding = "2px";
inputIdade.style.paddingLeft = '10px';
inputIdade.style.border = "none";
inputIdade.style.borderRadius = "5px";

const peso = document.createElement("p");
header.appendChild(peso);
peso.textContent = "Peso:";
peso.style.position = "relative";
peso.style.right = "16%";
peso.style.top = "18px";
peso.style.fontFamily = "'chakra', sans-serif"; 
peso.style.fontSize = "17px"
peso.style.color = "#3AB4C3";

const inpPeso = document.createElement("input");
inpPeso.placeholder = "Digite seu peso";
inpPeso.setAttribute("type", "number");
inpPeso.id = "peso";
header.appendChild(inpPeso);
inpPeso.style.width = "116px";
inpPeso.style.height = "35px"
inpPeso.style.margin = "2px";
inpPeso.style.padding = "2px";
inpPeso.style.paddingLeft = '10px';
inpPeso.style.border = "none";
inpPeso.style.borderRadius = "5px";

const altura = document.createElement("p");
header.appendChild(altura);
altura.textContent = "Altura:";
altura.style.position = "relative";
altura.style.right = "-2%";
altura.style.top = "16px";
altura.style.fontFamily = "'chakra', sans-serif"; 
altura.style.fontSize = "17px";
altura.style.color = "#3AB4C3";

const inputAltura = document.createElement("input");
inputAltura.setAttribute("type", "number");
inputAltura.placeholder = "Digite sua altura"
inputAltura.id = "altura";
header.appendChild(inputAltura);
inputAltura.style.width = "";
inputAltura.style.margin = "2px";
inputAltura.style.padding = "2px";
inputAltura.style.paddingLeft = '10px';
inputAltura.style.border = "none";
inputAltura.style.borderRadius = "5px";

const containerNome = document.createElement("div");
containerNome.appendChild(idade);
containerNome.appendChild(peso);
containerNome.appendChild(altura);
header.appendChild(containerNome);
containerNome.style.display = "flex";
containerNome.style.flexDirection = "row";
containerNome.style.gap = "80px";
containerNome.style.position = "relative";
containerNome.style.right = "10.6px";
containerNome.style.justifyContent = "center";

const containerInput = document.createElement("div");
containerInput.appendChild(inputIdade);
containerInput.appendChild(inpPeso);
containerInput.appendChild(inputAltura);
header.appendChild(containerInput);
containerInput.style.display = "flex";
containerInput.style.flexDirection = "row";
containerInput.style.position = "relative";
containerInput.style.gap = "12%";
containerInput.style.justifyContent = "center";
containerInput.style.paddingBottom = "20px";

const calcule = document.createElement("button");
calcule.textContent = "Calcular IMC";
header.appendChild(calcule);
calcule.style.backgroundColor = "#15d601";
calcule.style.height = "40px";
calcule.style.borderRadius = "10PX";
calcule.style.color = "white";
calcule.style.cursor = "pointer";


calcule.addEventListener("mouseenter", function (){
  calcule.style.backgroundColor = "#20ea02";
  calcule.style.transition = "0.5s";
});
calcule.addEventListener("mouseleave", function (){
  calcule.style.backgroundColor = "#15d601";
  calcule.style.transition = "0.2s";
});

const ul = document.createElement("ul");
ul.style.width = "80%";
document.body.appendChild(ul);

calcule.addEventListener("click", function() {
  const nome = document.getElementById("nome").value;
  const peso = document.getElementById("peso").value;
  const altura = document.getElementById("altura").value;
  const idade = document.getElementById("idade").value;
  const imc = (peso/(altura*altura)).toFixed(1);

  if (!nome && !peso && !altura && !idade) {
      return
  }
  
  const saida = document.createElement("div")
  header.appendChild(saida);
  saida.style.display = "flex";
  saida.style.justifyContent = "center";
  saida.style.fontFamily = "'Chakra Petch', sans-serif";
  saida.style.width = "70%";
  saida.style.margin = ".5% 1%";
  saida.style.padding = "1% 1%";
  saida.style.border = "2px solid #141301";
  saida.style.borderRadius = "4px";


  if (imc < 18.5) {
    saida.style.backgroundColor = '#00BFFF';
    saida.textContent = `Olá ${nome}! Você tem ${idade} anos e seu IMC é: ${imc}, você está abaixo do peso ideal!`;
  } else if (imc < 25) {
    saida.style.backgroundColor = '#3CB371';
    saida.textContent = `Olá ${nome}! Você tem ${idade} anos e seu IMC é: ${imc}, você está no peso ideal!`;
  } else if (imc < 30) {
    saida.style.backgroundColor = '#FFD700';
    saida.textContent = `Olá ${nome}! Você tem ${idade} anos e seu IMC é: ${imc}, você está com sobre peso`
  } else if (imc < 35) {
    saida.style.backgroundColor = '#FF8C00';
    saida.textContent = `Olá ${nome}! Você tem ${idade} anos e seu IMC é: ${imc}, você tem uma obesidade grau 1!`;
  } else if (imc < 40) {
    saida.style.backgroundColor = '#FF4500';
    saida.textContent = `Olá ${nome}! Você tem ${idade} anos e seu IMC é: ${imc}, você tem uma obesidade garu 2!`;
  } else {
    corDeFundo = '#8B0000';
  }

  const div = document.createElement("div");
  div.style.backgroundColor = corDeFundo;
  const pNnome = document.createElement("p");
  pNnome.textContent = no;
  const pIdade = document.createElement("p");
  pIdade.textContent = idade;
  const pImc = document.createElement("p");
  pImc.textContent = imc;
  div.appendChild(pNnome);
  div.appendChild(pIdade);
  div.appendChild(pImc);
  div.style.display = 'flex';
  div.style.justifyContent = 'space-between';
 
  const li = document.createElement("li");
  li.style.marginTop = "10px";
  li.appendChild(div);
  ul.appendChild(li);
})

const legenda = document.createElement("footer");
header.appendChild(legenda);
legenda.style.width = "100%";
legenda.style.display = 'flex'
legenda.style.justifyContent = "space-around";
legenda.style.alignItems = "center";
legenda.style.fontFamily = "'Chakra Petch', sans-serif";
legenda.style.paddingTop = "50px";

const pesobaixo = document.createElement("div");
legenda.appendChild(pesobaixo);
pesobaixo.textContent = "Abaixo do peso";
pesobaixo.style.backgroundColor = "#00BFFF";
pesobaixo.style.width = "15%";
pesobaixo.style.margin = "1% .5%";
pesobaixo.style.padding = ".5% .2%";
pesobaixo.style.border = "2px solid #141301";
pesobaixo.style.borderRadius = "5px";
pesobaixo.style.textAlign = "center";
pesobaixo.style.border = "none";

const pesoNormal = document.createElement("div");
legenda.appendChild(pesoNormal);
pesoNormal.textContent = "Peso Normal";
pesoNormal.style.backgroundColor = "#3CB371";
pesoNormal.style.width = "99px"
pesoNormal.style.height = "35px"
pesoNormal.style.width = "15%";
pesoNormal.style.margin = ".5% .5%";
pesoNormal.style.padding = ".5% .2%";
pesoNormal.style.border = "2px solid #141301";
pesoNormal.style.borderRadius = "5px";
pesoNormal.style.border = "none";
pesoNormal.style.display = "flex";
pesoNormal.style.alignItems = "center";
pesoNormal.style.justifyContent = "center";

const sobrePeso = document.createElement("div");
legenda.appendChild(sobrePeso);
sobrePeso.textContent = "Sobrepeso";
sobrePeso.style.backgroundColor = "#FFD700";
sobrePeso.style.width = "15%";
sobrePeso.style.width = "99px";
sobrePeso.style.height = "35px";
sobrePeso.style.margin = "10px";
sobrePeso.style.padding = ".5% .2%";
sobrePeso.style.border = "2px solid #141301";
sobrePeso.style.borderRadius = "5px";
sobrePeso.style.border = "none";
sobrePeso.style.alignItems = "center";
sobrePeso.style.display = "flex";
sobrePeso.style.justifyContent = "center";

const modErada = document.createElement("div");
legenda.appendChild(modErada);
modErada.textContent = "Obesidade grau 1";
modErada.style.backgroundColor = "#FF8C00";
modErada.style.width = "15%";
modErada.style.margin = ".5% .5%";
modErada.style.border = "2px solid #141301";
modErada.style.padding = ".5% .2%";
modErada.style.borderRadius = "5px";
modErada.style.textAlign = "center";
modErada.style.border = "none"

const morbida = document.createElement("div");
legenda.appendChild(morbida);
morbida.textContent = "Obesidade grau 2"
morbida.style.backgroundColor = "#FF4500"; 
morbida.style.width = "15%";
morbida.style.margin = ".5% .5%";
morbida.style.border = "2px solid #141301";
morbida.style.padding = ".5% .2%";
morbida.style.borderRadius = "5px";
morbida.style.textAlign = "center";
morbida.style.border = "none"
