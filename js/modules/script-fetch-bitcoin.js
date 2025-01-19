export default function initFetchBitcoin() {
  const displayBtc = document.querySelector(".btc-preco");
  async function fetchBitcoin(url) {
    try {
      const responseBitcoin = await fetch(url);
      const jsonBitcoin = await responseBitcoin.json();
      const bitcoinPreco = jsonBitcoin.BRL.sell;
      displayBtc.innerText = (100 / bitcoinPreco).toFixed(5);
    } catch (erro) {
      console.log(Error(erro));
    }
  }
  fetchBitcoin("https://blockchain.info/ticker");
}
