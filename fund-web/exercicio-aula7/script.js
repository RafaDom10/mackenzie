const esportes = {
  modalidade: {
    baseball: {
      nomeModalidade: 'Baseball',
      time: 'Boston Red Sox',
      qtdJogadores: 9,
      corPredominante: 'Vermelho',
      brasao: '<img src="./boston.png" alt="logo boston">'
    },
    basketball: {
      nomeModalidade: 'Basketball',
      time: 'Brooklyn Nets',
      qtdJogadores: 5,
      corPredominante: 'Preto',
      brasao: '<img src="./brooklyn.png" alt="logo boston">'
    },
    football: {
      nomeModalidade: 'Football',
      time: 'Green Bay Packers',
      qtdJogadores: 11,
      corPredominante: 'Verde',
      brasao: '<img src="./green-bay.png" alt="logo boston">'
    }
  }
};

const op = prompt('Digite uma cor predominante: Vermelho, Verde, Preto')
  .toLocaleUpperCase();

switch (op) {
  case 'VERMELHO':
    document.write(`
      <div class="container">
        <div class="logo">
          ${esportes.modalidade.baseball.brasao}
        </div>
        <div class="info">
          <p>
            Modalidade: ${esportes.modalidade.baseball.nomeModalidade} <br>
            Time: ${esportes.modalidade.baseball.time} <br>
            Quantidade de jogadores: ${esportes.modalidade.baseball.qtdJogadores} <br>   
            Cor predominante: ${esportes.modalidade.baseball.corPredominante}
          </p>
        </div>
      </div>
    `);
    document.body.style.background = '#CB3929';
    break;

  case 'VERDE':
    document.write(`
      <div class="container">
        <div class="logo green-bay">
          ${esportes.modalidade.football.brasao}
        </div>
        <div class="info green">
          <p>
            Modalidade: ${esportes.modalidade.football.nomeModalidade} <br>
            Time: ${esportes.modalidade.football.time} <br>
            Quantidade de jogadores: ${esportes.modalidade.football.qtdJogadores} <br>   
            Cor predominante: ${esportes.modalidade.football.corPredominante}
          </p>
        </div>
      </div>
    `);
    document.body.style.background = '#203731';
    break;

  case 'PRETO':
    document.write(`
      <div class="container">
        <div class="logo green-bay">
          ${esportes.modalidade.basketball.brasao}
        </div>
        <div class="info green">
          <p>
            Modalidade: ${esportes.modalidade.basketball.nomeModalidade} <br>
            Time: ${esportes.modalidade.basketball.time} <br>
            Quantidade de jogadores: ${esportes.modalidade.basketball.qtdJogadores} <br>   
            Cor predominante: ${esportes.modalidade.basketball.corPredominante}
          </p>
        </div>
      </div>
    `);
    document.body.style.background = '#1D1E26';
    break;

  default:
    alert('Entrada invalida!')
    document.location.reload()
    break;
}
