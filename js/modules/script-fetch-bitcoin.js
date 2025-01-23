export default class FetchBitcoin {
  constructor(btcPreco, url) {
    this.displayBtc = document.querySelector(btcPreco);
    this.url = url;
  }
  async fetchBitcoin(url) {
    try {
      const responseBitcoin = await fetch(url);
      const jsonBitcoin = await responseBitcoin.json();
      const bitcoinPreco = jsonBitcoin.BRL.sell;
      this.displayBtc.innerText = (100 / bitcoinPreco).toFixed(5);
    } catch (erro) {
      console.log(Error(erro));
    }
  }
  init() {
    if (this.displayBtc && this.url) {
      this.fetchBitcoin(this.url);
      return this;
    }
  }
}
