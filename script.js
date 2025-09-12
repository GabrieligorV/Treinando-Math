const tela = document.querySelector('.tela');
const teclas = document.querySelectorAll('button');

teclas.forEach((item, index) => {
  item.addEventListener('click', () => {
    console.log('clickou');
    tela.innerText = item.value;
  });
});

function calculo() {
  const num1 = (Math.random() * 100).toFixed();
  const num2 = (Math.random() * 100).toFixed();
  const resultado = num1 - num2;
  const resposta = (tela.innerText = `${num1} - ${num2}`);
}

function verificacao() {
  if (resultado) {
  }
}
