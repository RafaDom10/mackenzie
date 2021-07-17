const nome = 'Rafael Domingues';
const data = new Date();
const diaSemana = data.toLocaleDateString('pt-BR', { weekday: 'long' });
let horas = data.getHours();
let saudacao = null;

if (horas < 12) {
  saudacao = 'Bom dia';
} else if (horas >= 12 && horas < 18) {
  saudacao = 'Boa tarde!';
} else if (horas >= 18) {
  saudacao = 'Boa noite!';
}

window.onload = initiPage;

function initiPage() {
  alert(`Olá sou o ${nome}!! \nSP/ADS-MACK \n${saudacao}! Hoje é ${diaSemana}...`);
}


const nome2 = "Rafael Domingues";
const ano = "Ano - 2021";
const twitter = "Twitter: @Rafael23646145";
const instagram = "Instagram: @rafadomingues23";
const linkedin = "LinkedIn: @domingues-rafael";
const github = "GitHub: github.com/RafaDom10"
const genero = "Sexo: Masculino";
const local = "Localizacão - polo: Higienópolis";

const texto = document.getElementsByClassName('footer');
texto.innerHTML = `<p>Teste</p>`