const URL = 'https://api.covid19api.com/dayone/country/brazil';

async function getData(url) {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.log('Error on server')
  }
}

function formatNumber(number) {
  return new Intl.NumberFormat('pt-BR').format(number);
}

function formatDate(date) {
  return new Intl.DateTimeFormat('pt-BR').format(new Date(date));
}

(async function showData(url) {
  const data = await getData(url);
  const latestData = data.slice(-5);

  latestData.map(data => (
    window.document.body.innerHTML +=
    `
    <article>
    <h1>🦠 Dados da COVID-19 no Brasil nos últimos 5 dias.</h1>
    <p>Data de Atualização: ${formatDate(data.Date)}</p>
    <p>Casos Confirmados: ${formatNumber(data.Confirmed)}</p>
    <p>Mortes: ${formatNumber(data.Deaths)}</p>
    </article>
    `
  ));
})(URL);
