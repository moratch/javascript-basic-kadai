const textElement = document.getElementById('text');
const buttonElement = document.getElementById('btn');

buttonElement.addEventListener('click', () => {
  setTimeout(() => {
  textElement.textContent = 'ボタンがクリックされました！';
},2000);
});
